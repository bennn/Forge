#lang racket

(provide (all-defined-out))

(require crypto)
(require crypto/libcrypto)

; generate-key boolean? :: -> private-key public-key
; Generates a private/public key pair. If just-private is
; true, then only returns the private key (which also contains
; the public key).
(define (generate-key [just-private #f])

  (define rsa-impl (get-pk 'rsa libcrypto-factory))
  (define privkey (generate-private-key rsa-impl '((nbits 2048))))
  (define pubkey (pk-key->public-only-key privkey))

  (if just-private
      privkey
      (values privkey pubkey)))

; write-key-to-file :: pk-key string -> void
; Write the given key to the given file in a format that
; can be read back in.
(define (write-key-to-file key file-path)
  (define format
    (if (private-key? key)
        'rkt-private
        'rkt-public))

  (define key-datum (pk-key->datum key format))

  (define (write-key port)
    (void (write key-datum port)))
  (call-with-output-file file-path write-key #:exists 'replace))


; encrypt-file :: pk-key string string -> void
; Takes a file, encrypts its contents using the given key,
; and then write encrypted contents to a new file.
(define (encrypt-file key in-path out-path)
  ; Get file contents
  (define (read-contents port)
    (for/list ([n (in-naturals)]
               #:break (eof-object? (peek-bytes 256 0 port)))
      (read-bytes 256 port)))
  (define contents (call-with-input-file in-path read-contents)) ; List<bytes>
  
  ; Encrypt conents
  (define encrypted ; List<bytes>
    (map (curry pk-encrypt key ) contents))

  ; Write encrypted contents
  (define (write-contents port)
    (for ([bstr encrypted])
      (write-bytes bstr port)))
  (call-with-output-file out-file write-contents #:exists 'replace))

; decrypt-file :: private-key string -> bytes
; Takes an encrypted file and decrypts it with the given key.
(define (decrypt-file priv-key file-path)
    ; Read contents
    (define (read-contents port)
      (for/list ([n (in-naturals)]
                 #:break (eof-object? (peek-bytes 256 0 port)))
        (read-bytes 256 port)))
    (define contents (call-with-input-file file-path read-contents))

    ; Decrypt contents
    (apply bytes-append (map (curry pk-decrypt priv-key ) contents)))

; execute-data :: bytes -> void
; Translates the byte string to a syntax object via a pipe,
; and then executes it in the current namespace.
(define (execute-data bstring)
  ; Write data to pipe
  (define-values (input-port output-port) (make-pipe))
  (void (write-bytes bstring output-port))
  (close-output-port output-port)

  ; Set namespace for eval
  (define-namespace-anchor nsa)
  (define ns (namespace-anchor->namespace nsa))

  ; Read data from pipe and execute
  (void (read-language input-port))
  (for ([n (in-naturals)]
        #:break (eof-object? (peek-bytes 256 0 input-port)))
      (eval (read-syntax 'pipe input-port) ns)))



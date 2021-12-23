#lang racket/base

(require racket/runtime-path racket/file)
(require (only-in racket/draw color%)
         (only-in racket make-object))
(require racket/stream)

(provide get-verbosity set-verbosity VERBOSITY_LOW VERBOSITY_HIGH VERBOSITY_DEBUG VERBOSITY_LASTCHECK)
(provide forge-version instance-diff CORE-HIGHLIGHT-COLOR)
(provide stream-map/once port-echo)

(define CORE-HIGHLIGHT-COLOR (make-object color% 230 150 150))

; Level of output when running specs
(define VERBOSITY_SCRIPT 0) ; for test scripts
(define VERBOSITY_LOW 1)
(define VERBOSITY_HIGH 5)
(define VERBOSITY_DEBUG 10)

; Custom settings
(define VERBOSITY_LASTCHECK 1)

(define verbosityoption VERBOSITY_LOW)
; for accessing verbosity in other modules
(define (get-verbosity) verbosityoption)
(define (set-verbosity x) (set! verbosityoption x))


(define-runtime-path info-path "info.rkt")
(define forge-version "x.x.x")
(with-handlers ([exn:fail? (λ (exn) (println exn))])
  (define info-str (file->string info-path))
  (define parts (regexp-match #px"define\\s+version\\s+\"(\\S+)\"" info-str))
  (set! forge-version (cadr parts))
)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

; Returns the difference of two instances (> and < separately)
(define (instance-diff i1 i2)  
  (if (equal? (hash-keys i1) (hash-keys i2))
      (list
       'same-signature
       (hash-map i1 (lambda (k v)                                          
                      (list k (filter (lambda (ele)
                                        (not (member ele (hash-ref i2 k)))) v))))
       (hash-map i2 (lambda (k v)                                          
                      (list k (filter (lambda (ele)
                                        (not (member ele (hash-ref i1 k)))) v)))))
      (list
       'different-signature
       (filter (lambda (k) (not (member k (hash-keys i2)))) (hash-keys i1))
       (filter (lambda (k) (not (member k (hash-keys i1)))) (hash-keys i2)))))

(define (stream-map/once func strm)
  (stream-cons (func (stream-first strm))
               (stream-map/once func (stream-rest strm))))

(define (port-echo in-port out-port #:title [title #f])
  (when title
    (fprintf out-port "~a logs:~n" title))
  (for ([ln (in-lines in-port)])
    (displayln ln out-port)))


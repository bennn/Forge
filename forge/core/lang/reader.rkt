#lang racket/base

(require racket/port)
(require (prefix-in logging: forge/logging/logging))
(require (prefix-in @ (only-in racket/base read-syntax)))

(define (read-syntax path port)
  (define-values (logging-on? project email) (logging:log-execution 'forge/core port path))

  ; Using "read" will not bring in syntax location info
  (define parse-tree (port->list (lambda (x) (@read-syntax path x)) port))
  (define module-datum `(module forge-core-mod racket
                          (require forge/choose-lang-specific)
                          (require forge/lang/lang-specific-checks) ; TODO: can this be relative?
                          ; ANSWER: maybe using dynamic-require
                          ;(printf "ast-ch = ~a~n" (get-ast-checker-hash))
                          (set-checker-hash! forge-checker-hash)
                          (set-ast-checker-hash! forge-ast-checker-hash)
                          ;(printf "ast-ch = ~a~n" (get-ast-checker-hash))

                          (require forge/logging/sigs)
                          #;(require forge/sigs-functional)

                          (provide (except-out (all-defined-out)
                                               forge:n))

                          ; For evaluating
                          (define-namespace-anchor forge:n)
                          (forge:nsa forge:n)

                          ; For logging
                          #;(require (only-in forge/logging/logging 
                                            [flush-logs logging:flush-logs]
                                            [log-errors logging:log-errors]))
  
                          (set-option! 'eval-language 'core)
                          ,@parse-tree
                          #;(logging:log-errors
                            ,@parse-tree)
                          
                          (module+ execs)
                          (module+ main
                            (require (submod ".." execs))
                            #;(logging:flush-logs))))

  (datum->syntax #f module-datum))

(provide read-syntax)



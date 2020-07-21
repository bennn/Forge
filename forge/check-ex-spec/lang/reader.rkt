#lang racket/base

(require racket/port)
(require racket/match)

(define (read-syntax path port)
  (define parse-tree (port->list read port))
  (match-define (cons assignment contents) parse-tree)
  (unless (string? assignment)
    (raise "Argument error: expected string after #lang forge/check-ex-spec; received ~a.~n" assignment))


  (define module-datum `(module forge-core/check-ex-spec-mod racket
                          (require forge/sigs)
                          (provide (all-defined-out))
                          (define-namespace-anchor n)
                          (nsa n)

                          (require (prefix-in check-ex-spec: forge/check-ex-spec/student))
                          (check-ex-spec:load-assignment ,assignment)
                          ,@contents))
  (datum->syntax #f module-datum))

(provide read-syntax)
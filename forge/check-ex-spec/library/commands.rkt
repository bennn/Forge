#lang racket

(require forge/sigs-raw)
(require syntax/parse/define)

(provide example)
(define-simple-macro (example name:id pred bounds)
  (test name #:preds [pred]
             #:bounds bounds
             #:expect sat))
#lang forge/bsl

sig A { f1: lone B }
sig B { f2: lone A } 

fun f[a: A] : Int {
   a.f1
}

test expect {
    should_error: {some a: A | f[a] = a} is sat
}
#lang forge/bsl

sig Node {
    next: one Node
}

one sig A, B extends Node {}

pred joinRight {
    some next.B
}

run {joinRight}
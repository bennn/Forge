#lang froglet

sig Node {
    next: one Node,
    field: pfunc Node -> Node
}

one sig A, B extends Node {}

pred joinRight {
    some A.field.A
}
 
test expect {{joinRight} is sat}

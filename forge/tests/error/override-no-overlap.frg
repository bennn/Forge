#lang forge

option run_sterling off
option verbose 0

sig Node { edges: set Node }
sig NonNode { notEdges: set NonNode }

test expect { should_error: {some edges ++ notEdges} is sat}


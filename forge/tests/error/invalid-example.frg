#lang forge
option run_sterling off
option verbose 0

sig Person {
    age: one Int
}

example onlyBabies is {some p: Person | p.age < 3} for {
    Person = `Person0
    no age
}

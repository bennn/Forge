#!/bin/bash

rm -rf classes/*
javac -cp "lib/*" src/kodkod/cli/* test-sat4j/kodkod/cli/*.java -d classes

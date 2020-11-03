# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jlernz/lotide`

**Require it:**

`const _ = require('@jlernz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

head(): returns the first item in the array

tail():  returns the "tail" of an array: everything except for the first item (head) of the provided array.

middle(): returns the middle of an array

countOnly(): take in a collection of items and return counts for a specific subset of those items

countLetters(): The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

findKey(): scan the object and return the first key for which the callback returns a truthy value

findKeyByValue(): search for a key on an object where its value matches a given value.

letterPositions(): return all the indices (zero-based positions) in the string where each character is found.

map():  return a new array based on the results of the callback function.

without(): take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

takeUntil(): return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

eqarrays(): takes in two arrays and returns true or false, based on a perfect match.

eqObjects(): takes in two objects and returns true or false, based on a perfect match.

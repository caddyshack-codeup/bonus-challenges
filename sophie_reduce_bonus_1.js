"use strict";

// # Map, Filter, and Reduce

// Use the code below to complete the following problems


const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

// Use map, filter, and reduce to:
//
// 1. Create an array of the first letters of each fruit
let firstLetters = fruits.reduce((list, fruit) => {
    for (let fruit of fruits) {
        // console.log(fruit[0]);
        list.add(fruit[0]);
    }

    return list;

}, new Set);
// console.log(firstLetters);

firstLetters = Array.from(firstLetters);

console.log(firstLetters);
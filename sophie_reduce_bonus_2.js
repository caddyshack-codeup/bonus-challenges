"use strict";

// # Map, Filter, and Reduce

// Use the code below to complete the following problems


const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

///////////////////////////////////////////////////////
// 1. Determine the average age of all the customers //
///////////////////////////////////////////////////////

let customerAge = customers.reduce((total, customer) => {
    // console.log(customer.age);
    return total + customer.age


}, 0);

// console.log(averageAge);

let averageAge = customerAge / customers.length;

console.log(`The average age of all of the customers is: ${averageAge}`);

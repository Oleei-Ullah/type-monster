"use strict";
const myName = "Abdullah";
console.log(`My name is ${myName}`);
const printGreeting = (pt) => {
    console.log(`Hellow Mr: ${pt.name}. Today is ${pt.date.toLocaleDateString()}`);
};
printGreeting({ name: myName, date: new Date() });

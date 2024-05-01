"use strict";
//Normal function's type checking
function sum(num1, num2) {
    console.log(`My balanec is ${num1 * num2}`);
    return `My balanec is ${num1 * num2}`;
}
sum(2, 3);
//Arrow function's type checking
const addArrow = (num1, num2 = 40) => num1 * num2;
console.log(addArrow(3));
//Type checking in Object methods
const car = {
    name: "Toyota",
    milage: 40,
    cost(hour) {
        console.log(this.milage * hour);
        return this.milage * hour * 5;
    }
};
car.cost(6);
//Array methods type checking
const arr = ["3", "6"];
const squaredArray = arr.map((ele) => Number(ele + ele));
console.log(squaredArray);

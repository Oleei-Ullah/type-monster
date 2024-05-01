//Normal function's type checking
function sum(num1 : number, num2: number) : string {
    console.log(`My balanec is ${num1 * num2}`)
    return `My balanec is ${num1 * num2}`
}

sum(2,3)

//Arrow function's type checking

const addArrow = (num1: number, num2: number = 40) : number => num1 * num2;

console.log(addArrow(3))
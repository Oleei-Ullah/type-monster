//Normal function's type checking
function sum(num1 : number, num2: number) : string {
    console.log(`My balanec is ${num1 * num2}`)
    return `My balanec is ${num1 * num2}`
}

sum(2,3)

//Arrow function's type checking

const addArrow = (num1: number, num2: number = 40) : number => num1 * num2;

console.log(addArrow(3))

//Type checking in Object methods

const car= {
    name : "Toyota",
    milage: 40,
    cost(hour: number) : number {
        console.log(this.milage * hour)
        return this.milage * hour * 5
    }
}

car.cost(6)

//Array methods type checking

const arr : string[] = ["3", "6"];

const squaredArray = arr.map((ele: string) : number => Number(ele + ele))
console.log(squaredArray);

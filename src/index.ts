const myName : string = "Abdullah";

console.log(`My name is ${myName}`);


const printGreeting = (pt: {name: string; date: Date}) => {
    console.log(`Hellow Mr: ${pt.name}. Today is ${pt.date.toLocaleDateString()}`)
}

printGreeting({name: myName, date: new Date()})

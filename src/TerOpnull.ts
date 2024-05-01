{//Ternary operator
const age : number = 18;

const isAdult = age >= 18 ? "Adult" : "Not adult";
console.log(isAdult);




//Optional chaninig with nullish coalescing operator
interface PersonInfo {
    name: string;
    age: number;
    address: string;
    permanentAddress?: string
}
const person : PersonInfo = {
    name: "Abdullah",
    age: 20,
    address: "mymensingh"
}

console.log(person?.permanentAddress ?? "No permanent address available");

}
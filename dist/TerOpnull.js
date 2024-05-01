"use strict";
var _a;
{ //Ternary operator
    const age = 18;
    const isAdult = age >= 18 ? "Adult" : "Not adult";
    console.log(isAdult);
    const person = {
        name: "Abdullah",
        age: 20,
        address: "mymensingh"
    };
    console.log((_a = person === null || person === void 0 ? void 0 : person.permanentAddress) !== null && _a !== void 0 ? _a : "No permanent address available");
}

const fruits1 : string[] = ["Banana", "Apple", "Blackberry", "Mango"];
const fruits2 : string[] = ["Orange", "jackfruit", "Litchy"];

//Here spread operator uses to make sure that only string is pushing on a string array. if we don't use "..." it will push the whole fruits2 array which will create typescript error.
fruits1.push(...fruits2);
console.log(fruits1);

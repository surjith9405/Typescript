//Tuples JS doesnot handle but TS can handle.
//Its an array with fixed size and types like element in the array always the type we specified in the order.
var person = {
    name: "surjith",
    age: 30,
    hobbies: ["Reading SrimadBhagavatham", "Sports"], // hover hobbies should be type of string | number
    roles: [2, "author"]
};
person.roles.push("Admin");
console.log("Tuple:", person.roles);

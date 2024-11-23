//Enum is the Type with keyword enum;
// Added by TS, Automatically enumerated global constant identifiers.
//Tuples JS doesnot handle but TS can handle.
//Its an array with fixed size and types like element in the array always the type we specified in the order.
var person = {
    name: "surjith",
    age: 30,
    hobbies: ["Reading SrimadBhagavatham", "Sports"], // hover hobbies should be type of string | number
    roles: "read only user"
};
if (person.roles === "read-only-user") {
    console.log("is read only!");
}
;
console.log("Tuple:", person.roles);

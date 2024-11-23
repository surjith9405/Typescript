//Tuples JS doesnot handle but TS can handle.
//Its an array with fixed size and types like element in the array always the type we specified in the order.

const person: {
    name: string;
    age: number;
    hobbies: string[];
    roles: [number, string]; //tupple here TS compiler tells that 1st element is number type and 2nd element is string tye
} = {
    name: "surjith",
    age:30,
    hobbies: ["Reading SrimadBhagavatham", "Sports"], // hover hobbies should be type of string | number
    roles:[2,"author"]
    };

    person.roles.push("Admin");

    console.log("Tuple:", person.roles);
    
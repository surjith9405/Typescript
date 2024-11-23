//Enum is the Type with keyword enum;
// Added by TS, Automatically enumerated global constant identifiers.

// to find the global constant.
// Always starts with the Capital Letter.
// better Asisgn Number and String

enum Role{ ADMIN="Admin", READ_ONLY="Read-only", AUTHOR=5 };


const person = {
    name: "surjith",
    age:30,
    hobbies: ["Reading SrimadBhagavatham", "Sports"], // hover hobbies should be type of string | number
    roles: Role.ADMIN
    };

    if(person.roles === Role.AUTHOR) {
        console.log("is Author only!");    
    };

    console.log("Tuple:", person.roles);
    
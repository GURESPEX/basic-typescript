enum gender {
    male,
    female
}

interface People {
    name: string;
    age: number;
    gender: gender;
    hobbie: string | string[];
    job?: string;
}

const People1: People = {
    name: "peter",
    age: 20,
    gender: gender.male,
    hobbie: ["watch movie", "swimming"],
}

const People2: People = {
    name: "alex",
    age: 18,
    gender: gender.female,
    hobbie: "play game",
    job: "doctor",
}

console.log(People1);
console.log(People2);

enum gender {
    male,
    female
}

interface Animal {
    name: string;
    fly: boolean;
    gender: gender;
    leg: number;
    swim: boolean;
}

const Animal1: Animal = {
    name: "tiger",
    fly: false,
    gender: gender.male,
    leg: 4,
    swim: true,
}

console.log(Animal1);

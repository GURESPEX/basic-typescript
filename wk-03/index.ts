enum TypePokemon {
    Fire,
    Flying,
    Grass
}

interface Move {
    name: string;
    effect: string;
}

interface HeldItem {
    name: string;
    stat: { armor: number, damage: number, hp: number, speed: number }
}

interface Pokemon {
    name: string;
    gender: string;
    height: number;
    weight: number;
    location_area_encounters: string;
    moves: Move[];
    type: TypePokemon | TypePokemon[];
    held_items?: HeldItem[];
}

const Pokemon1: Pokemon = {
    name: "Charlizard",
    gender: "female",
    height: 200,
    weight: 200,
    location_area_encounters: "forest",
    moves: [
        {
            name: "flying",
            effect: "cannot take damage from ground"
        }
    ],
    type: [TypePokemon.Fire, TypePokemon.Flying],
}

const Pokemon2: Pokemon = {
    name: "babalsor",
    gender: "female",
    height: 200,
    weight: 200,
    location_area_encounters: "forest",
    moves: [
        {
            name: "kick",
            effect: "deal damage 50"
        }
    ],
    type: TypePokemon.Grass,
    held_items: [{
        name: "glove",
        stat: {
            armor: 20,
            damage: 10,
            hp: 200,
            speed: 200,
        }
    }],
}

console.log(Pokemon1);
console.log(Pokemon2);

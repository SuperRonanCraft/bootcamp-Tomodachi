import Pet from "./Pet";

const pet = new Pet("Alfonso", 20, 20, 60);

export function getEnergy() {
    return pet.energy;
}

export function getFood() {
    return pet.food;
}
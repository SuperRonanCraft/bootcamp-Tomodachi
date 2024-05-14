export default function createGame(name, tickMultiplier, pet) {
  return {
    name,
    tickMultiplier,
    pet,
    logs: [],
  };
}

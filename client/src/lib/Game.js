export default function createGame(name, tickMultiplier = 1) {
  return {
    name,
    tickMultiplier,
    logs: [],
  };
}

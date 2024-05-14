export default function createGame(name, tickMultiplier = 6) {
  return {
    name,
    tickMultiplier,
    logs: [],
  };
}

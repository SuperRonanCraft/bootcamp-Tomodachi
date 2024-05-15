export default function createGame(name, gameId, tickMultiplier = 1) {
  return {
    name,
    gameId,
    tickMultiplier,
  };
}

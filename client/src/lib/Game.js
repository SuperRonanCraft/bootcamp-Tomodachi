import { timeLeft } from '../lib/useGameLoop';

export default function createGame(name, gameId, tickMultiplier = 1) {
  return {
    name,
    gameId,
    tickMultiplier,
    isDead: false,
  };
}

export function getTimeLeft(pet, isDead = false) {
  if (isDead) return '00:00';
  const _timeLeft = timeLeft(pet);

  const minutes = Math.floor(_timeLeft / 60);
  let seconds = _timeLeft % 60;
  if (minutes <= 0 && seconds <= 0) return 'DEAD!';
  if (seconds < 10) {
    if (seconds == 0) seconds = '00';
    else seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

export default function createGame(name, gameId, tickMultiplier = 1) {
  return {
    name,
    gameId,
    tickMultiplier,
    isDead: false,
  };
}

export function getTimeLeft(_timeLeft, isDead = false) {
  if (isDead) return '💀';

  const days = Math.floor(_timeLeft / 86400);
  const hours = Math.floor((_timeLeft / 60 / 60) % 24);
  let minutes = Math.floor((_timeLeft / 60) % 60);
  let seconds = _timeLeft % 60;
  if (hours <= 0 && minutes <= 0 && seconds <= 0) return '💀';
  if (seconds < 10) {
    if (seconds == 0) seconds = '00';
    else seconds = `0${seconds}`;
  }
  if (hours > 0 && minutes < 10) {
    if (minutes == 0) minutes = '00';
    else minutes = `0${minutes}`;
  }
  if (hours <= 0) {
    return `${minutes}:${seconds}`;
  } else {
    if (days <= 0) return `${hours}:${minutes}:${seconds}`;
    else return `${days} day(s) ${hours}:${minutes}:${seconds}`;
  }
}

export function checkDead({ food, happiness, energy }) {
  return (
    food <= 0 ||
    happiness <= 0 ||
    energy <= 0 ||
    (food === energy && happiness === energy)
  );
}

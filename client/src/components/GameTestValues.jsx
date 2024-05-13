import { usePetContext } from '../context/PetContext';

export default function GameTestValues() {
  const { petState, setPetState } = usePetContext();
  return (
    <>
      <h1 className="text-3xl font-bold mt-6">Test Values</h1>
      <div>food: {petState.food}</div>
      <div>happiness: {petState.happiness}</div>
      <div>energy: {petState.energy}</div>
    </>
  );
}

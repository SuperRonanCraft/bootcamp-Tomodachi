import { usePetContext } from '../context/PetContext';
import PetProvider from '../context/PetContext';

export default function Game() {
  const pet = usePetContext();
  console.log(pet);
  return (
    <PetProvider>
      <h1>test</h1>
    </PetProvider>
  );
}

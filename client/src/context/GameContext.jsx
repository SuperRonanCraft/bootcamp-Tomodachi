import { createContext, useContext, useState } from 'react';
import createGame from '../lib/Game';
import createPet from '../lib/Pet';

// Initialize new context for students
const GameContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components
// eslint-disable-next-line react-refresh/only-export-components
export const useGameContext = () => useContext(GameContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export default function PetProvider({ children }) {
  const [petState, setPetState] = useState(createPet());
  const [gameState, setGameState] = useState(createGame('LNHLS', 1, petState));

  // The value prop expects an initial state object
  return (
    <GameContext.Provider
      value={{ gameState, setGameState, petState, setPetState }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </GameContext.Provider>
  );
}

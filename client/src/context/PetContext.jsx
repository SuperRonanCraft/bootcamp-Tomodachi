import { createContext, useContext, useState } from 'react';

// Initialize new context for students
const PetContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components
// eslint-disable-next-line react-refresh/only-export-components
export const usePetContext = () => useContext(PetContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export default function PetProvider({ children }) {
  const [petState, setPetState] = useState({
    food: 100,
    happiness: 100,
    energy: 100,
  });

  // The value prop expects an initial state object
  return (
    <PetContext.Provider value={{ petState, setPetState }}>
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </PetContext.Provider>
  );
}

import { createContext, useContext, useState } from "react";

const PcBuilderContext = createContext();

// ✅ Hook must be defined OUTSIDE any component/function
export const usePcBuilder = () => useContext(PcBuilderContext);

export const PcBuilderProvider = ({ children }) => {
  const [selectedParts, setSelectedParts] = useState({});

  const addPart = (category, product) => {
    setSelectedParts((prev) => ({
      ...prev,
      [category]: product,
    }));
  };

  const removePart = (category) => {
    setSelectedParts((prev) => {
      const updated = { ...prev };
      delete updated[category];
      return updated;
    });
  };

  const clearAllParts = () => {
    setSelectedParts({});
  };

  return (
    <PcBuilderContext.Provider
      value={{ selectedParts, addPart, removePart, clearAllParts }}
    >
      {children}
    </PcBuilderContext.Provider>
  );
};




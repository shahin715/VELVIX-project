import { createContext, useContext, useState } from "react";

const PcBuilderContext = createContext();

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

  return (
    <PcBuilderContext.Provider value={{ selectedParts, addPart, removePart }}>
      {children}
    </PcBuilderContext.Provider>
  );
};

export const usePcBuilder = () => useContext(PcBuilderContext);


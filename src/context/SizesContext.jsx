import { createContext, useState, useMemo, useContext } from 'react';

const SizesContext = createContext();

export default function SizesProvider({ children }) {
  const [sizes, setSizes] = useState({
    height: 170,
    weight: 70,
    measurementSystem: 'SI',
  });

  const contextValue = useMemo(
    () => ({
      sizes,
      setSizes,
    }),
    [sizes, setSizes]
  );

  return (
    <SizesContext.Provider value={contextValue}>
      {children}
    </SizesContext.Provider>
  );
}

function useSizes() {
  return useContext(SizesContext)
}

export { useSizes };

import { createContext, useContext, useState } from "react";

const Context = createContext();

export function IsMapProvider({ children }) {
  const [isMap, setIsMap] = useState(null);

  return (
    <Context.Provider value={[isMap, setIsMap]}>{children}</Context.Provider>
  );
}

export function useIsMapContext() {
  return useContext(Context);
}

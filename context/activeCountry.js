import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ActiveCountryProvider({ children }) {
  const [activeCountry, setActiveCountry] = useState(null);

  return (
    <Context.Provider value={[activeCountry, setActiveCountry]}>
      {children}
    </Context.Provider>
  );
}

export function useActiveCountryContext() {
  return useContext(Context);
}

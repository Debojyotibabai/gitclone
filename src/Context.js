import React, { createContext, useState } from "react";

export const GlobalName = createContext();

export const ContextProvider = (props) => {
  const [name, setName] = useState("Debojyotibabai");

  return (
    <GlobalName.Provider value={[name, setName]}>
      {props.children}
    </GlobalName.Provider>
  );
};

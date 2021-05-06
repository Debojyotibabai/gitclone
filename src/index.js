import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// component
import App from "./App";

// context provider
import { ContextProvider } from "./Context";

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById("root")
);

reportWebVitals();

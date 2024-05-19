import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { App } from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { OptionsProvider } from "./context/OptionsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
   <OptionsProvider>
      <App />
      </OptionsProvider>
    </ThemeProvider>
  </React.StrictMode>
);

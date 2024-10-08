import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraBaseProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraBaseProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraBaseProvider>
);

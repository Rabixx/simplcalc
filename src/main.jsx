import { ColorModeScript } from "@chakra-ui/react";
// Chakra UI and react-icons imports
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
// React etc
import * as ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

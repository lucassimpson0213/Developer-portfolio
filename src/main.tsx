import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

import { ThemeProvider } from "./components/Utils/theme-provider";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </ThemeProvider>
);

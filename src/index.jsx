import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import AuthContextProvider from "./contexts/AuthContext";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Provider store={store}>
          <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </ChakraProvider>
        </Provider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

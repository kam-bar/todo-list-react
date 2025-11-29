import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <GlobalStyle />
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { Inicio } from "./App/Pages/Inicio.jsx";
import { Provider } from "react-redux";
import { store } from "./App/Store/Store.js";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { SystemRouter } from "./App/Routes/SystemRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SystemRouter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

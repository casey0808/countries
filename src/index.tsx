import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
// import { createTheme } from "@mui/material";
import Detail from "./Detail";
// import ToggleColorMode from "./ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/countries",
    element: <App />,
  },
  { path: "/countries/:id", element: <Detail />},
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const theme = createTheme({
//   typography: {
//     fontSize: 14,
//     fontFamily: "Nunito Sans",
//   }
// });

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

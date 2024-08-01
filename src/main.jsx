import "./index.css";
import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
//import Cursor from "./components/ui/cursor.jsx";
import StoreContextProvider from "./components/context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreContextProvider>
      {/*<Cursor />*/}
      <App />
    </StoreContextProvider>
  </React.StrictMode>
);
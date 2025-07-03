import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserProvider from "./context/UserProvider"; // ✅ Updated import
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider> {/* ✅ Wrap App with context provider */}
      <App />
    </UserProvider>
  </React.StrictMode>
);

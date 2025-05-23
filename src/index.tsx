import AppRoot from "app/AppRoot";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.Suspense fallback={<div>Loading...</div>}>
      <AppRoot />
    </React.Suspense>
  </BrowserRouter>
);

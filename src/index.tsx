import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import i18nTranslation from "core/config/i18n";

const AppRoot = React.lazy(async () => {
  await i18nTranslation.initialize();
  return import("app/AppRoot");
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.Suspense fallback={<div>Loading...</div>}>
      <AppRoot />
    </React.Suspense>
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import i18nTranslation from "core/config/i18n";
import LoadingPage from "core/pages/LoadingPage/LoadingPage";

const AppRoot = React.lazy(async () => {
  await i18nTranslation.initialize();
  return import("app/AppRoot");
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.Suspense fallback={<LoadingPage />}>
      <AppRoot />
    </React.Suspense>
  </BrowserRouter>
);

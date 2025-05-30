import routes from "config/route";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import LoadingPage from "core/pages/LoadingPage/LoadingPage";

export default function App() {
  return (
    <React.Fragment>
      <ErrorBoundary FallbackComponent={() => <div>Error</div>}>
        {/* <AppStateContext.Provider value={authorizationData}> */}
        <Layout>
          <React.Suspense fallback={<LoadingPage />}>
            <Routes>
              {routes?.length > 0 &&
                routes.map(({ path, Component }) => (
                  <Route path={path} Component={Component} key={path} />
                ))}
            </Routes>
          </React.Suspense>
        </Layout>
        {/* </AppStateContext.Provider> */}
      </ErrorBoundary>
    </React.Fragment>
  );
}

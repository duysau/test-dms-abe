import routes from "config/route";
import { Layout } from "../layout/Layout";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";


export default function App() {
  console.log("App", routes);
  return (
    <React.Fragment>
      <ErrorBoundary FallbackComponent={() => <div>Error</div>}>
        {/* <AppStateContext.Provider value={authorizationData}> */}
        <Layout>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes?.length > 0 && routes.map(({ path, Component }) =>
                <Route path={path} Component={Component} key={path} />
              )}
            </Routes>
          </React.Suspense>
        </Layout>
        {/* </AppStateContext.Provider> */}
      </ErrorBoundary>
    </React.Fragment>
  );
};

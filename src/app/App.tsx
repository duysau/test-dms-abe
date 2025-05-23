import routes from "config/route";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../layout/Layout";

const router = createBrowserRouter(routes);

export const App = () => {
  debugger;

  return (
    <React.Fragment>
      <ErrorBoundary FallbackComponent={() => <div>Error</div>}>
        {/* <AppStateContext.Provider value={authorizationData}> */}
        <Layout>
          <React.Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
          </React.Suspense>
        </Layout>
        {/* </AppStateContext.Provider> */}
      </ErrorBoundary>
    </React.Fragment>
  );
};

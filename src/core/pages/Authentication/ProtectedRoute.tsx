import { FORBIDDEN_ROUTE } from "core/config/consts";
import React from "react";
import { Navigate, Route } from "react-router-dom";

interface ProtectedRouteProps {
  component?: React.ComponentType<any>;
  auth?: boolean;
  redirectPath?: string;
  path: string;
  exact?: boolean;
}
export function ProtectedRoute({
  component: Component,
  auth,
  redirectPath,
  ...rest
}: ProtectedRouteProps) {
  // const { validAction } = authorizationService.useAuthorizedAction(code);
  return (
    <Route
      {...rest}
      element={
        auth && Component ? (
          <Component />
        ) : (
          <Navigate to={redirectPath ? redirectPath : FORBIDDEN_ROUTE} />
        )
      }
    />
  );
}

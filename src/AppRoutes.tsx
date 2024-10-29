import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { getAuthToken } from "storage";

const AppRoutes = () => {
  const userToken = getAuthToken() || "";

  const isAuthenticated = userToken?.length > 0;

  const currentPath = window.location.pathname;

  return (
    <Routes>
      {routes.map(({ route, component }, key) => {
        return (
          <React.Fragment key={key}>
            <Route
              path={route}
              element={
                currentPath !== "/" ? (
                  isAuthenticated ? (
                    component
                  ) : (
                    <Navigate to="/" />
                  )
                ) : isAuthenticated ? (
                  <Navigate to="/" />
                ) : (
                  component
                )
              }
            />
          </React.Fragment>
        );
      })}
    </Routes>
  );
};

export default AppRoutes;

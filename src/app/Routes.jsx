import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Solution from "../pages/Business/Solutions";

const Routes = () => {
  const rootRoutes = {
    path: "/",
    element: <Navigate to="/main/home" />,
  };
  const noMatchRoutes = {
    path: "*",
    elemt: <Navigate to="/main/home" />,
  };
  const mainRoutes = {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  };
  const businessRoutes = {
    path: "/business",
    element: <MainLayout />,
    children: [
      {
        path: "solutions",
        element: <Solution />,
      },
    ],
  };

  const routes = [rootRoutes, noMatchRoutes, mainRoutes, businessRoutes];

  return useRoutes(routes);
};
export default Routes;

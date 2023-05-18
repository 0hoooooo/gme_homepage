import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Solution from "../pages/Business/Solutions";
import Developer from "../pages/Business/Developers";
import Platform from "../pages/Business/Platform";
import AboutUs from "../pages/Company/AboutUs";

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
      {
        path: "developers",
        element: <Developer />,
      },
      {
        path: "platform",
        element: <Platform />,
      },
    ],
  };
  const companyRoutes = {
    path: "/company",
    element: <MainLayout />,
    children: [
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
    ],
  };

  const routes = [
    rootRoutes,
    noMatchRoutes,
    mainRoutes,
    businessRoutes,
    companyRoutes,
  ];

  return useRoutes(routes);
};
export default Routes;

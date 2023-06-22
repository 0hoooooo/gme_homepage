import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Solution from "../pages/Business/Solutions";
import Developer from "../pages/Business/Developers";
import Platform from "../pages/Business/Platform";
import AboutUs from "../pages/Company/AboutUs";
import Careers from "../pages/Company/Careers";
import ContactUs from "../pages/Company/ContactUs";
import QrCode from "../pages/Personal/Qrcode";
import ContactSales from "../pages/Business/Solutions/ContactSales";
import JobApplication from "../pages/Company/Careers/JobApplication";
import ViewApi from "../pages/Business/Developers/ViewApi";

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
  const personalRoutes = {
    path: "/personal",
    element: <MainLayout />,
    children: [
      {
        path: "qrcode",
        element: <QrCode />,
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
      {
        path: "contact-sales",
        element: <ContactSales />,
      },
      {
        path: "api-documentation",
        element: <ViewApi />,
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
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "job-application",
        element: <JobApplication />,
      },
    ],
  };

  const routes = [
    rootRoutes,
    noMatchRoutes,
    mainRoutes,
    businessRoutes,
    companyRoutes,
    personalRoutes,
  ];

  return useRoutes(routes);
};
export default Routes;

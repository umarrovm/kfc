import { Restaurant } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HalalPage from "../pages/HalalPage";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import RestaPage from "../pages/RestaPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/restaurants",
      element: <RestaPage />,
      id: 2,
    },
    {
      link: "/halal",
      element: <HalalPage />,
      id: 3,
    },
    {
      link: "/menu",
      element: <MenuPage />,
      id: 4,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((page) => (
        <Route path={page.link} element={page.element} key={page.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;

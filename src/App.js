import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Navbar/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MainRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

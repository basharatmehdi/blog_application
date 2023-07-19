//Layout reactjs page
import React from "react";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="lg:container mx-auto text-white pt-4 mt-20 px-6 md:px-12">
        <Outlet />
      </main>
      <div className="lg:container mx-auto text-white pt-4 px-6 md:px-12">
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Layout;

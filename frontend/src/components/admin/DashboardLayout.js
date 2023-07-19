import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DashSidebar from "./DashSidebar";
import Footer from "../Footer";
// import { FaBars, FaTimes } from "react-icons/fa";

const DashboardLayout = () => {
  // const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="text-white lg:container px-6 md:px-12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-6 gap-4">
        <div className="md:col-span-2 lg:col-span-1">
          {/* {!showSidebar ? (
            <FaBars
              onClick={() => setShowSidebar(true)}
              className={`block md:hidden mb-4 border rounded-full text-2xl p-1`}
            />
          ) : (
            <FaTimes
              onClick={() => setShowSidebar(false)}
              className={`block md:hidden mb-4 border rounded-full text-2xl p-1`}
            />
          )} */}
          <DashSidebar />
        </div>
        <div className="md:col-span-6 lg:col-span-5 md:py-10 text-gray-200">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;

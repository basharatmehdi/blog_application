import React, { useState } from "react";
import { FaBars, FaTimes, FaUsersCog, FaEye } from "react-icons/fa";
import { BsFillFileTextFill, BsFillBarChartFill } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button";

const DashSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const linkStyles = `flex items-center space-x-2 space-y-1 px-3 py-2 rounded-md text-gray-300 hover:bg-slate-700 hover:text-white mb-2`;
  return (
    <>
      <div className="flex md:hidden items-center h-20 float-right">
        {!showSidebar ? (
          <FaBars
            onClick={() => setShowSidebar(true)}
            className={`block border rounded-full text-2xl p-1`}
          />
        ) : (
          <FaTimes
            onClick={() => setShowSidebar(false)}
            className={`block border rounded-full text-2xl p-1`}
          />
        )}
      </div>
      <div
        className={`py-10 px-5 ${
          !showSidebar ? "hidden md:flex flex-col" : "flex flex-col w-full"
        } bg-slate-900 md:h-screen rounded-lg md:rounded-b-lg md:rounded-t-none`}
      >
        <Link to="create-post">
          <Button>Add New Post</Button>
        </Link>
        <nav className="flex flex-col mt-6 dashboard">
          <NavLink to={`/admin/dashboard`} className={linkStyles}>
            <BsFillFileTextFill />
            <p className="md:text-sm">Posts</p>
          </NavLink>
          <NavLink to={`/admin/stats`} className={linkStyles}>
            <BsFillBarChartFill />
            <p className="md:text-sm">Stats</p>
          </NavLink>
          <NavLink to={`/admin/categories`} className={linkStyles}>
            <MdCategory />
            <p className="md:text-sm">Categories</p>
          </NavLink>
          <NavLink to={`/admin/users`} className={linkStyles}>
            <FaUsersCog />
            <p className="md:text-sm">User Roles</p>
          </NavLink>
          <NavLink to={`/`} className={linkStyles}>
            <FaEye />
            <p className="md:text-sm">Visit Blog</p>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default DashSidebar;

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";
import Login from "./components/admin/Login";
import Page404 from "./components/404";
import Dashboard from "./components/admin/Dashboard";
import Contact from "./components/Contact";
import About from "./components/About";
import Layout from "./components/Layout";
import DashboardLayout from "./components/admin/DashboardLayout";
import Stats from "./components/admin/Stats";
import UpdatePost from "./components/admin/UpdatePost";
import AddPost from "./components/admin/AddPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<h1>Portfolio</h1>} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="/admin/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="stats" element={<Stats />} />
          <Route path="create-post" element={<AddPost />} />
          <Route path="post/:id" element={<UpdatePost />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="/admin" element={<Login />} />
        {/* if we use url as isRegister */}
        {/* <Route path="/admin/register" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;

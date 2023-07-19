import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import Pagination from "../Pagination";
import data from "../../data/posts.js";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const choosePostPerPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //this returns all posts both published and unpunlished
  return (
    <>
      {/* <div className="w-12">
        <select
          onChange={(e) => setPostsPerPage(e.target.value)}
          className="w-12 h-8 mb-4 text-gray-300 bg-slate-800 border-none focus:outline-none rounded-md"
        >
          {choosePostPerPage.map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      </div> */}
      <div className="">
        {currentPosts.map((post) => (
          <Post {...post} key={post.id} setPostsPerPage={setPostsPerPage} />
        ))}
        <Pagination
          pages={Math.ceil(data.length / postsPerPage)}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Dashboard;

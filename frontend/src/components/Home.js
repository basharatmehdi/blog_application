import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import SidebarHeading from "./SidebarHeading";
import SidebarPosts from "./SidebarPosts";
import SocialMedia from "./SocialMedia";
import Slider from "./Slider";
import posts from "../data/posts";
import Pagination from "./Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <>
      <Slider />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {currentPosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
          <div>
            {/* <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={setCurrentPage}
              currentPage={currentPage}
            /> */}
            <Pagination
              pages={Math.ceil(posts.length / postsPerPage)}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>

        <div className="md:col-span-1">
          {/*  */}
          <SidebarHeading title={"Popular Posts"} />
          {posts.slice(0, 5).map((post) => (
            <SidebarPosts key={post.title} {...post} />
          ))}

          {/* Latest Posts */}
          <SidebarHeading title={"Latest Posts"} />
          {posts.slice(3, 8).map((post) => (
            <SidebarPosts key={post.title} {...post} />
          ))}

          {/* Social Media */}
          <SidebarHeading title={"Social Media"} />
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default Home;

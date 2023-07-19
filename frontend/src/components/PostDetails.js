import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsPersonCircle, BsHandThumbsUpFill, BsEye } from "react-icons/bs";
import posts from "../data/posts";
import SidebarHeading from "./SidebarHeading";
import SidebarPosts from "./SidebarPosts";
import Advertise from "./Advertise";
import SharePost from "./SharePost";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

const PostDetails = () => {
  // const url = window.location.href.split("/");
  // const paramId = url[url.length - 1];
  const param = useParams();
  const postId = param.id;
  const singlePost = posts.filter((post) => post.id === parseInt(postId));
  const {
    title,
    description,
    date,
    imageUrl,
    author,
    views,
    category,
    likes,
    tags,
  } = singlePost[0];

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [postId]);

  return (
    <>
      <Advertise style={"h-20 md:h-32"} />
      <h1 className="text-xl mt-4 md:text-2xl font-[500] capitalize">
        {title}
      </h1>
      <div className="flex items-center text-sm md:text-base text-gray-400 mt-4 mb-6">
        <BsPersonCircle className="text-2xl items-center" />
        <p className="ml-2">{author}</p>
        <p className="ml-auto">Last Updated: {date}</p>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-8">
        {/* <hr className="h-px bg-gray-700 border-0 col-span-12" /> */}
        <div className="md:col-span-2 h-fit">
          <img
            src={imageUrl}
            alt=""
            className="h-[50%] w-full object-cover rounded-lg mb-4"
          />
          <div>{description}</div>
          <div className="md:flex md:items-center">
            <div className="">
              <SharePost title={title} />
            </div>
            <div className="ml-auto">
              <p className="py-1 px-3 bg-green-700/80 rounded mt-6 mb-4 w-fit">
                Tags
              </p>
              {/* <div className="flex items-center gap-2">
              <BsHandThumbsUpFill size={18} />
              <p className="text-sm mr-4">{likes}</p>
            </div>
            <div className="flex items-center gap-2">
              <BsEye size={18} />
              <p className="text-sm">{views}</p>
            </div> */}
              <div className="flex flex-wrap">
                {tags.map((tag, i) => (
                  <p
                    key={i}
                    className="text-sm bg-slate-700/70 px-3 mr-2 md:mb-2 lg:mb-0 rounded text-center py-1 capitalize text-gray-300"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <CommentForm />
            <Comments postId={postId} />
          </div>
        </div>
        <div className="md:col-span-1">
          <Advertise style={"h-72 mt-6"} />
          <SidebarHeading title="Related Posts" />
          {posts.slice(6, 10).map((post) => (
            <SidebarPosts key={post.id} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostDetails;

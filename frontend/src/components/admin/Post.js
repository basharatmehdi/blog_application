import React, { useState } from "react";
import { FaEye, FaTrash, FaUndo } from "react-icons/fa";
import {
  BsBarChartFill,
  BsFillChatLeftTextFill,
  BsPersonCircle,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Post = (props) => {
  const [showMore, setShowMore] = useState(false);

  const {
    id,
    title,
    description,
    published,
    imageUrl,
    author,
    date,
    category,
  } = props;
  const views = 345;
  const comments = 24;
  return (
    <>
      <div className="px-3 py-3 mb-3 bg-slate-900 rounded-lg relative group">
        <div
          onClick={() => setShowMore(!showMore)}
          className="md:hidden absolute top-3 right-3 flex items-center justify-center h-6 w-6 ml-2 bg-slate-600 rounded-full text-gray-200"
        >
          <BsThreeDotsVertical />
        </div>
        <div
          className={`${
            showMore
              ? "flex flex-col absolute top-8 space-y-2 right-4 bg-slate-400 rounded-lg px-3 py-2 h-fit z-10"
              : "hidden space-x-2"
          } md:group-hover:flex absolute top-3 right-4`}
        >
          <Link className="flex items-center p-2 rounded-md md:rounded-full bg-gray-600 hover:bg-red-600 space-x-2 text-sm md:text-base">
            <FaTrash />
            {showMore && <p>Delete</p>}
          </Link>
          <Link className="flex items-center p-2 rounded-md md:rounded-full bg-gray-600 hover:bg-gray-500 space-x-2 text-sm md:text-base">
            <FaUndo />
            {showMore && <p>Unpublish</p>}
          </Link>
          <Link className="flex items-center p-2 rounded-md md:rounded-full bg-gray-600 hover:bg-gray-500 space-x-2 text-sm md:text-base">
            <FaEye />
            {showMore && <p>View</p>}
          </Link>
        </div>
        <div onClick={() => setShowMore(false)} className="flex">
          <Link to={`../post/${id}`}>
            <img
              src={imageUrl}
              alt="Post Image"
              className="rounded-md w-[100px] h-[80px] object-cover"
            />
          </Link>
          <div className="flex flex-col justify-between w-full ml-2 md:ml-4">
            <div className="flex justify-between">
              <Link
                to={`../post/${id}`}
                className="text-[15px] lg:text-lg w-[100%-30px]"
              >
                {title}
              </Link>
              <Link className="hidden md:flex md:text-sm lg:text-base items-center space-x-2">
                <p>{author}</p> <BsPersonCircle size={20} />
              </Link>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <div className="flex items-center md:space-x-2">
                <p className="hidden md:block text-sm lg:text-base">
                  Published
                </p>
                <p className="text-sm">{date}</p>
                <span className="hidden lg:block px-3 py-[2px] rounded-2xl border">
                  {category}
                </span>
              </div>
              <div className="flex items-center text-sm lg:text-base space-x-3">
                <div className="flex items-center">
                  <p className="mr-1">{views}</p>
                  <BsBarChartFill size={14} />
                </div>
                <div className="flex items-center">
                  <p className="mr-1">{comments}</p>
                  <BsFillChatLeftTextFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

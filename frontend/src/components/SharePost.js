import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsWhatsapp,
  BsPinterest,
  BsTwitter,
  BsTelegram,
  BsReddit,
  BsLinkedin,
} from "react-icons/bs";

const SharePost = ({ title }) => {
  return (
    <div className="mt-4 mr-2">
      <p className="px-2 py-1 bg-green-700/80 w-fit rounded-md">Share</p>
      <div className="flex mt-4 space-x-3 md:space-x-2 lg:space-x-3 text-xl">
        <Link
          to={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&title=${title}`}
          className="bg-blue-600 p-1 rounded-md hover:translate-y-1 transition-all"
        >
          <BsFacebook />
        </Link>
        <Link
          to={`https://api.whatsapp.com/send?text=${window.location.href}&title=${title}`}
          className="bg-green-500 p-1 rounded-md hover:translate-y-1 transition-all"
        >
          <BsWhatsapp />
        </Link>
        <Link
          to={`https://twitter.com/intent/tweet?text=${window.location.href}&title=${title}`}
          className="bg-[#1da1f2] p-1 rounded-md hover:translate-y-1 transition-all"
        >
          <BsTwitter />
        </Link>
        <Link
          to={`https://www.pinterest.com/pin/create/button/?url=${window.location.href}&description=${title}`}
          className="bg-[#cb2027] p-1 rounded-md hover:translate-y-1 transition-all"
        >
          <BsPinterest />
        </Link>
        <Link
          to={`https://t.me/share/url?url=${window.location.href}&text=${title}`}
          className="bg-[#28a8e9] p-1 rounded hover:translate-y-1 transition-all"
        >
          <BsTelegram />
        </Link>

        <Link
          to={`https://www.reddit.com/submit?url=${window.location.href}&title=${title}`}
          className="bg-[#FF1A00] p-1 rounded hover:translate-y-1 transition-all"
        >
          <BsReddit />
        </Link>
        <Link
          to={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${title}`}
          className="bg-blue-700 p-1 rounded-md hover:translate-y-1 transition-all"
        >
          <BsLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default SharePost;

import React from "react";
import { Link } from "react-router-dom";
import { BsHandThumbsUp, BsHandThumbsUpFill, BsEye } from "react-icons/bs";
import Button from "./Button";

const PostCard = (props) => {
  const { category, title, imageUrl, description, date, views, likes } = props;
  return (
    <div className="md:flex lg:h-[250px] md:h-[200px] mb-6 justify-between relative shadow-sm shadow-green-500/70 rounded-2xl overflow-hidden">
      <div className="absolute bg-green-500/40 top-1 left-1 px-3 py-[2px] rounded-lg text-sm uppercase">
        {category}
      </div>
      <img
        src={imageUrl}
        alt=""
        className="md:w-[40%] lg:w-[45%] lg:h-[250px] md:h-[200px] object-cover"
      />
      {/* <div className="lg:px-8 px-4 py-4 border sm:border-t-0 md:border md:border-l-0 border-[#abe7e5] md:rounded-r-2xl rounded-b-2xl md: rounded-t-none md:rounded-l-none flex flex-col justify-between overflow-hidden"> */}
      <div className="lg:px-8 px-4 py-4 flex flex-col justify-between overflow-hidden bg-gray-500/10">
        <Link to={`/post/${props.id}`}>
          <h3 className="w-full font-semibold text-base lg:text-lg text-gray-300">
            {title}
          </h3>
        </Link>
        <p className="text-gray-400 text-sm lg:h-[38%] md:h-[38%] line-clamp-3 lg:line-clamp-4 my-3">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex text-gray-300 gap-5 items-center">
            <div className="flex flex-row md:flex-col text-center">
              <div className="flex justify-center">
                <BsHandThumbsUp size={16} />
              </div>
              <p className="text-sm ml-2 md:ml-0">{likes}</p>
            </div>
            <div className="flex flex-row md:flex-col text-center align-middle">
              <div className="flex justify-center">
                <BsEye size={16} />
              </div>
              <p className="text-sm ml-2 md:ml-0">{`${views}K`}</p>
            </div>
          </div>
          <Button>
            <Link to={`/post/${props.id}`}>Read More ...</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

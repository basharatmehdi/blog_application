import React from "react";
import { Link } from "react-router-dom";
import { BsFillCalendarCheckFill, BsFillFilePersonFill } from "react-icons/bs";

const SidebarPosts = (props) => {
  const { title, imageUrl, description, date, author } = props;
  return (
    <div className="overflow-hidden mb-[10px] shadow-sm shadow-green-600 rounded-xl">
      <Link to={`/post/${props.id}`}>
        <div className="overflow-hidden flex">
          <img
            src={imageUrl}
            alt="Post image"
            className="xs:w-[200px] xxs:w-[100px] md:w-[70px] lg:w-[100px] object-cover rounded-l-xl"
          />
          {/* <div className="text-gray-400 px-4 md:px-3 py-3 md:py-2 justify-between flex flex-col border border-l-0 border-[#abe7e5] w-full rounded-r-xl"> */}
          <div className="px-4 md:px-3 py-3 md:py-2 justify-between flex flex-col w-full rounded-r-xl bg-gray-500/10">
            <p className="text-gray-300 xxs:text-sm leading-4 line-clamp-2">
              {title}
            </p>
            <p className="text-gray-400 text-sm md:hidden xxs:text-[12px] line-clamp-1">
              {description}
            </p>
            <div className="flex justify-between mt-2">
              <div className="flex md:items-baseline text-xs xxs:text-[10px] md:text-[10px] text-gray-600">
                <div className="md:text-[8px] lg:text-xs">
                  <BsFillCalendarCheckFill className="mr-2 md:mr-[2px] lg:mr-2" />
                </div>
                <div className="md:text-[8px] lg:text-xs">{date}</div>
              </div>
              <div className="flex md:items-baseline text-xs xxs:text-[10px] md:text-[10px] text-gray-600">
                <div className="md:text-[8px] lg:text-xs"></div>
                <BsFillFilePersonFill className="mr-2 md:mr-[2px] lg:mr-2" />
                {author}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SidebarPosts;

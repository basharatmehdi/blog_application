import React from "react";
import { BsFillCalendarCheckFill, BsFillFilePersonFill } from "react-icons/bs";

const Latest = () => {
  return (
    <div className="overflow-hidden mb-[10px]">
      <div className="lg:h-20 md:h-16 overflow-hidden flex">
        <img
          src="https://res.cloudinary.com/dkas3akvg/image/upload/v1682163914/samples/imagecon-group.jpg"
          alt="Popular image"
          className="md:h-full xs:w-[200px] xxs:w-[100px] md:w-[70px] lg:w-[100px] object-cover h-32 rounded-l-xl"
        />
        <div className="text-gray-400 px-4 md:px-3 py-3 md:py-2 justify-between flex flex-col border border-l-0 border-[#abe7e5] w-full rounded-r-xl">
          <p className=" text-base xxs:text-sm md:leading-4">
            Title of the Latest post.
          </p>
          <p className="text-sm md:hidden xxs:text-[12px]">
            This is the description of the post.
          </p>
          <div className="flex justify-between">
            <div className="flex md:items-center text-xs xxs:text-[10px] md:text-[10px] text-gray-600">
              <BsFillCalendarCheckFill className="mr-2 " />
              20/04/2023
            </div>
            <div className="flex md:items-center text-xs xxs:text-[10px] md:text-[10px] text-gray-600">
              <BsFillFilePersonFill className="mr-2 " />
              Basharat
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;

import React from "react";

const Newsletter = () => {
  return (
    <div className="py-8 bg-zinc-900 px-6 flex items-center flex-col md:flex-row">
      <div className="md:w-2/5 mb-3 md:mb-0">
        <h3 className="xxs:text-2xl sm:text-3xl font-bold text-white">
          Newsletter
        </h3>
      </div>
      <div className="w-full md:w-3/5">
        <div className="flex items-center">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-l w-full py-2 xxs:px-2 sm:px-4 xxs:text-xs sm:text-base text-gray-700 focus:outline-none focus:bg-white focus:border-green-500"
            id="inline-email"
            type="email"
            placeholder="example@domain.com"
          />
          <input
            className="bg-gray-500 appearance-none border-2 border-gray-500 rounded-r py-2 xxs:px-2 xxs:text-xs sm:text-base sm:px-5 md:px-8 text-gray-100 hover:bg-green-500 hover:border-green-500 font-medium transition duration-300"
            type="submit"
            value="Subscribe"
          />
        </div>
        <div className="flex items-center mt-4">
          <input
            className="mr-3 w-3 h-3 border rounded-[50%] p-2 text-green-700 focus:outline-none bg-green-200 checked:bg-green-500 cursor-pointer"
            type="checkbox"
          />
          <p className="xxs:text-xs sm:text-sm text-white">
            I agree to recieve the email newsletter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

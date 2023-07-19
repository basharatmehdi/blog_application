import React from "react";

const Button = (props) => {
  return (
    <button className="text-[#00ac8a] border border-[#00df9a] hover:bg-[#00df9a]/80 hover:text-white ease-in-out duration-500 px-3 py-1 text-sm lg:text-sm lg:px-4 lg:py-2 rounded-lg">
      {props.children}
    </button>
  );
};

export default Button;

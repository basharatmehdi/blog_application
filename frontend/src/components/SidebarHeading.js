import React from "react";

const SidebarHeading = ({ title }) => {
  return (
    <div>
      <h3
        className={`bg-[#00ac8a] w-full py-3 text-center uppercase font-semibold tracking-wider ${
          title === "Popular Posts" ? "" : "mt-7"
        } mb-3 rounded-lg`}
      >
        {title}
      </h3>
    </div>
  );
};

export default SidebarHeading;

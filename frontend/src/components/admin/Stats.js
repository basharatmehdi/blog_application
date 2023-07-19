import React from "react";
import VisitsChart from "./VisitsChart";

const Stats = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 text-black">
      <div className="h-[250px] bg-gray-400 rounded-md">Today</div>
      <div className="h-[250px] bg-gray-400 rounded-md">Monthly Visits</div>
      <div className="h-fit w-full bg-[#0f172a] rounded-md py-2 px-2 mx-auto md:col-span-2">
        <VisitsChart />
      </div>
    </div>
  );
};

export default Stats;

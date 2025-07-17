import React from "react";
import "../index.css";

const Display = ({ ipAddress, city, country, timezone, isp }) => {
  return (
    <div className="card-layout top-45 absolute left-1/2 z-10 flex w-[90%] -translate-x-1/2 flex-row gap-3 rounded-xl bg-white p-5">
      <div className="card col-span-1 flex flex-col gap-3">
        <p className="text-xs font-bold text-gray-400">IP ADDRESS</p>
        <p className="text-2xl font-medium">{ipAddress}</p>
      </div>
      <div className="card-2 col-span-1 flex flex-col gap-3">
        <p className="text-xs font-bold text-gray-400">LOCATION</p>
        <div className="location-style">
          <p className="text-wrap text-2xl font-medium">{city},</p>
          <p className="text-wrap text-2xl font-medium">{country}</p>
        </div>
      </div>
      <div className="card col-span-1 flex flex-col gap-3">
        <p className="text-xs font-bold text-gray-400">TIMEZONE</p>
        <p className="text-2xl font-medium">{timezone}</p>
      </div>
      <div className="card col-span-1 flex flex-col gap-3 !border-r-0">
        <p className="text-xs font-bold text-gray-400">ISP</p>
        <p className="text-wrap text-2xl font-medium">{isp}</p>
      </div>
    </div>
  );
};

export default Display;

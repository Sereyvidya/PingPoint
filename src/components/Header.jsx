import React from "react";

const Header = ({ ipAddress, setIPAddress, setInfo }) => {
  const fetchIpDetails = async (ip) => {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();
    setInfo({
      ipAddress: ipAddress,
      city: data.city,
      country: data.country_name,
      timezone: "UTC" + data.utc_offset,
      isp: data.org,
      latitude: data.latitude,
      longitude: data.longitude,
    });
  };

  return (
    <div className="header-height flex w-full flex-col items-center gap-7 pt-7">
      <h1 className="text-2xl font-medium text-white">IP Address Tracker</h1>

      <div className="flex h-12 w-[90%] justify-center">
        <input
          className="search-layout cursor-pointer rounded-l-xl bg-white pl-4 text-gray-950 placeholder:text-gray-400 focus:outline-none"
          placeholder="Search for any IP address or domain"
          value={ipAddress}
          onChange={(e) => setIPAddress(e.target.value)}
        />
        <button
          className="w-12 cursor-pointer rounded-r-xl bg-black font-semibold text-white hover:bg-gray-950 focus:outline-none"
          onClick={() => fetchIpDetails(ipAddress)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Header;

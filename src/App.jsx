import React, { useState } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import Location from "./components/Location";

const App = () => {
  const [ipAddress, setIPAddress] = useState("");
  const [info, setInfo] = useState({
    ipAddress: "162.158.89.206",
    city: "Los Angeles",
    country: "United States",
    timezone: "UTC-0700",
    isp: "CLOUDFLARENET",
    latitude: "34.0544",
    longitude: "-118.244",
  });

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white text-black">
      <Header
        ipAddress={ipAddress}
        setIPAddress={setIPAddress}
        setInfo={setInfo}
      />
      <Display
        ipAddress={info.ipAddress}
        city={info.city}
        country={info.country}
        timezone={info.timezone}
        isp={info.isp}
      />
      <Location lat={info.latitude} lng={info.longitude} />
    </div>
  );
};

export default App;

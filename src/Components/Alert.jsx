import React from "react";
import useScreenSize from "../Hooks/useScreenSize";

const Alert = () => {
  const screenSize = useScreenSize();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center atkinson-hyperlegible-mono-regular text-m text-white text-center px-30">
      <p className="inline-block mb-4">
        🚨 Please open this website on a device with a screen width greater than
        <b> 1024px</b> 🚨
      </p>
      <p>
        Current device: <b>{screenSize.width}px</b>
      </p>
    </div>
  );
};

export default Alert;

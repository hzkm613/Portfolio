import React from "react";
import Spline from "@splinetool/react-spline";

const Scene = ({ setIsModelLoaded }) => {
  return (
    <div id="scene" className="absolute top-0 left-0 w-full h-full z-20">
      <Spline
        scene="https://prod.spline.design/tILLC5Ld1wEugdg6/scene.splinecode"
        onLoad={() => setIsModelLoaded(true)}
      />
    </div>
  );
};

export default Scene;

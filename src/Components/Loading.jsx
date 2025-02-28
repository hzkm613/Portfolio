import React, { useEffect } from "react";
import Hourglass from "../Assets/Images/hourglass.gif";
import gsap from "gsap";

const Loading = () => {
  // useLayoutEffect(() => {
  //   let context = gsap.context(() => {
  //     gsap.to("#hourglass", {
  //       rotation: 360,
  //       duration: 2,
  //       repeat: -1,
  //       ease: "linear",
  //     });
  //   });
  //   return () => context.revert();
  // }, []);

  // useLayoutEffect(() => {
  //   let loadingText = new SplitText('#loading')
  //     gsap.to("#loading", {
  //       y:0,
  //       stagger: 0.02,
  //       delay: 0.2,
  //       duration: 0.5,
  //     });
  //   });
  //   return () => context.revert();
  // }, []);

  return (
    <div className="absolute top-0 right-0 bg-[#414eff] w-full h-full flex flex-col items-center justify-center z-50 cursor-wait">
      <img src={Hourglass} alt="Hourglass icon" className="w-20 h-auto mb-4" />
      <p
        id="loading"
        className="atkinson-hyperlegible-mono-regular text-center text-white text-xl"
      >
        Loading...
      </p>
    </div>
  );
};

export default Loading;

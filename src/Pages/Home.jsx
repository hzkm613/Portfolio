import React, { useState, lazy, useLayoutEffect } from "react";
import Loading from "../Components/Loading";
import gsap from "gsap";
import useScreenSize from "../Hooks/useScreenSize";
import Alert from "../Components/Alert";
const Scene = lazy(() => import("../Components/Scene"));

const Home = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const handleModelLoad = () => {
    setTimeout(() => {
      setIsModelLoaded(true);
    }, 1800);
  };

  useLayoutEffect(() => {
    if (isModelLoaded) {
      let context = gsap.context(() => {
        const timeline = gsap.timeline();
        timeline
          .set(["#scene", "#intro"], { opacity: 0, y: "+=30" })
          .to(["#scene", "#intro"], {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            stagger: 0,
          });
      });
      return () => context.revert();
    }
  }, [isModelLoaded]);
  const screenSize = useScreenSize();
  return (
    <div className="relative w-screen h-screen bg-[#414eff] overflow-hidden">
      {/* loading screen*/}
      {!isModelLoaded && <Loading />}

      {/* 3D Model */}
      {/* <Scene id="scene" setIsModelLoaded={handleModelLoad} /> */}

      {/* Intro */}
      {isModelLoaded && screenSize.width < 768 ? (
        <Alert /> // Show Alert on screens smaller than 768px
      ) : (
        <>
          <Scene id="scene" setIsModelLoaded={handleModelLoad} />
          <div
            id="intro"
            className="absolute top-0 right-0 w-2/5 h-full flex items-center px-16"
          >
            <div className="text-white">
              <p className="atkinson-hyperlegible-mono-regular text-m leading-relaxed">
                <span className="chango-regular text-5xl font-bold mb-4">
                  Hi!👋
                </span>
                <br />
                I’m Hyunjin Kim, a front-end developer who loves design and
                creative work. I’m passionate about crafting engaging user
                experiences and bringing ideas to life through code. I focus on
                making digital interactions smooth, intuitive, and enjoyable for
                users.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

import React, { useLayoutEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);

  // Loading screen and intro animation
  useLayoutEffect(() => {
    if (!isLoading) {
      let animationContext = gsap.context(() => {
        const timeline = gsap.timeline();
        timeline.from(["#scene", "#intro"], {
          opacity: 0,
          y: "+=30",
          stagger: 0,
          duration: 1,
          ease: "power2.out",
        });
      }, ref);
      return () => animationContext.revert();
    }
  }, [isLoading]);

  return (
    <div
      className="relative w-screen h-screen flex items-center justify-center bg-[#414eff]"
      ref={ref}
    >
      {/* Loading screen */}
      {isLoading && (
        <p className="text-black text-3xl animate-pulse absolute">Loading...</p>
      )}
      {/* Spline scene */}
      <div id="scene" className="absolute top-0 left-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/tILLC5Ld1wEugdg6/scene.splinecode"
          onLoad={() => setIsLoading(false)} // Set isLoading to false after loading
        />
      </div>
      {/* Intro */}
      {!isLoading && (
        <div
          id="intro"
          className="absolute top-0 right-15 w-2/5 h-full flex items-center px-13"
        >
          <div className="text-white">
            <p className="rubik-regular text-lg leading-relaxed">
              <span className="racing-sans-one-regular text-7xl font-bold">
                Hi!
              </span>{" "}
              I’m Hyunjin Kim, a front-end developer who loves design and
              creative work. I’m passionate about crafting engaging user
              experiences and bringing ideas to life through code. I focus on
              making digital interactions smooth, intuitive, and enjoyable for
              users.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

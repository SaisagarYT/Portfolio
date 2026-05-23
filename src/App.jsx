import { useEffect } from "react";
import { useRef } from "react";
import { Hero } from "./screens/Hero"
import gsap from "gsap"

export const App = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 1,
        y: e.clientY - 20,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };

  }, []);
  return (
  <div className="w-full min-h-screen overflow-x-hidden flex flex-col relative">
    <div ref={cursorRef} className="w-8 h-8 rounded-full border-white border flex justify-center items-center absolute top-0 left-0 z-0">
      <div className="w-2 h-2 flex bg-white">
      </div>
    </div>
    <Hero cursorRef={cursorRef}/>
   </div>
  )
}

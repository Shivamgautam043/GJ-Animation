import { useEffect, useState } from "react";
import { Page } from "./page";
import { motion, useScroll, useTransform } from "framer-motion";

export function Test() {
  const [y, setY] = useState(0);
 
  const [redCoordinates, setRedCoordinates] = useState<{
    scrollStart: number;
    scrollEnd: number;
  } | null>(null);

  useEffect(() => {
      const redStart = document.getElementById("red").offsetTop;
      const redEnd = document.getElementById("red").offsetTop + document.getElementById("red").getBoundingClientRect().height;
      const screenHeight = window.innerHeight;
      

      setRedCoordinates({
        scrollStart: redStart,
        scrollEnd: redEnd - screenHeight,
      });
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      // const redStart = document.getElementById("red").offsetTop;
      // const redEnd = document.getElementById("red").offsetTop + document.getElementById("red").getBoundingClientRect().height;

      // const scrollStart = redStart;
      // const scrollEnd = redEnd - window.innerHeight;

      // const scroll = window.scrollY;
      const c=window.scrollY;
      const scroll=window.scrollY/window.innerHeight;
      setY(scroll);
      // const prog = (scroll - scrollStart) / (scrollEnd - scrollStart);
      // setY((scroll - scrollStart) / (scrollEnd - scrollStart));  
      // const video = document.getElementById("vid");
      // const duration = video.duration;
      // video.currentTime = duration * y;
    })
  });

  useEffect(() => {
    document.getElementById("hoverable")?.addEventListener("mouseenter")
  })

  const {scrollY} = useScroll();
  const z = useTransform(scrollY, (y) => redCoordinates == null ? -1 : (y - redCoordinates.scrollStart) / (redCoordinates.scrollEnd - redCoordinates.scrollStart));
  console.log(z);

  return (
    <div className="tw-w-[98vw] tw-h-[500vh]">
      <div className="tw-w-full tw-h-[100vh] tw-bg-green-500" />
      
      <div className="tw-w-full tw-h-[300vh] tw-bg-red-500" id="red" >
      
      {/* <video src="https://assets.codepen.io/39255/output_960.mp4" className="tw-w-full tw-h-[100vh] tw-sticky tw-top-0 tw-bg-black" id="vid" style={{opacity: y}} /> */}
        {/* <div className="tw-h-[100vh] tw-bg-yellow-500 tw-sticky tw-top-0" style={{width: `${y*100}%`}}>
        </div> */}
        <div className="tw-sticky tw-top-0"><Page Y={z}/></div>
        
        
        
        
      </div>
      <div className="tw-w-full tw-h-[100vh] tw-bg-blue-500" />
      <div className="tw-fixed tw-top-0 tw-right-0 tw-text-white">{z.get()}</div>
      
    </div>
  );
}

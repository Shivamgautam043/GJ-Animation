import { useEffect, useState } from "react";
import { Page } from "./page";

export function Test() {
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      const redStart = document.getElementById("red").offsetTop;
      const redEnd = document.getElementById("red").offsetTop + document.getElementById("red").getBoundingClientRect().height;

      const scrollStart = redStart;
      const scrollEnd = redEnd - window.innerHeight;

      // const scroll = window.scrollY;
      const scroll=window.scrollY/window.innerHeight;

      const prog = (scroll - scrollStart) / (scrollEnd - scrollStart);
      // setY((scroll - scrollStart) / (scrollEnd - scrollStart));
         setY(scroll);
      const video = document.getElementById("vid");
      const duration = video.duration;
      video.currentTime = duration * y;
    })
  });

  // useEffect(() => {
  //   document.getElementById("hoverable")?.addEventListener("mouseenter")
  // })

  return (
    <div className="tw-w-[98vw] tw-h-[300vh]">
      <div className="tw-w-full tw-h-[100vh] tw-bg-green-500" />
      <div className="tw-w-full tw-h-[100vh] tw-bg-red-500" id="red" >
      {/* <video src="https://assets.codepen.io/39255/output_960.mp4" className="tw-w-full tw-h-[100vh] tw-sticky tw-top-0 tw-bg-black" id="vid" style={{opacity: y}} /> */}
        {/* <div className="tw-h-[100vh] tw-bg-yellow-500 tw-sticky tw-top-0" style={{width: `${y*100}%`}}>
        </div> */} <Page Y={y}/>
        
        
      </div>
      <div className="tw-w-full tw-h-[100vh] tw-bg-blue-500" />
      <div className="tw-fixed tw-top-0 tw-right-0 tw-text-white">{y}</div>
      
    </div>
  );
}

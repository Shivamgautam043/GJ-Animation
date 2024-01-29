import { MotionValue, motion } from "framer-motion";
import Floater from "./float";
import Floater2 from "./float2";

type data = {
  Y: MotionValue<number>;
};
export function Page(ele: data) {
  function generateRandomAnimation() {
    const getRandomValue = () =>
      Math.random() * 9 * (Math.random() > 0.5 ? 1 : -1);
    const randomValue = getRandomValue();

    return {
      x: [randomValue, getRandomValue(), randomValue],
      y: [randomValue, getRandomValue(), randomValue],
    };
  }
  const obj = [
    {
      xIn: -100,
      yIn: -100,
      xFi: 200,
      yFi: 200,
      duration: 6,
      duration2: 5,
      image: "prime.png",
      image2: "/slack.png",
      animate1: generateRandomAnimation(),
      animate2: generateRandomAnimation(),
      myClass1: "",
      xDirection:1,
      yD:1,
    },
    {
      xIn: 600,
      yIn: -100,
      xFi: 600,
      yFi: 150,
      duration: 2,
      duration2: 4,
      image: "canva.png",
      image2: "/word.png",
      animate1: generateRandomAnimation(),
      animate2: generateRandomAnimation(),
      myClass1: "",
      xDirection:1,
      yD:1,
    },
    {
      xIn: 1280,
      yIn: -100,
      xFi: 1000,
      yFi: 200,
      duration: 5,
      duration2: 4,
      image: "zoom.png",
      image2: "/powerpoint.png",
      animate1: generateRandomAnimation(),
      animate2: generateRandomAnimation(),
      myClass1: "",
      xDirection:-1,
      yD:1,
    },
    {
      xIn: -100,
      yIn: 800,
      xFi: 200,
      yFi: 600,
      duration: 4,
      duration2: 3,
      image: "onenote.png",
      image2: "/photoshop.png",
      animate1: generateRandomAnimation(),
      animate2: generateRandomAnimation(),
      myClass1: "",
      xDirection:1,
      yD:-1,
    },
    {
      xIn: 1280,
      yIn: 800,
      xFi: 1000,
      yFi: 600,
      duration: 3,
      duration2: 8,
      image: "whatsapp.png",
      image2: "/note.png",
      animate1: generateRandomAnimation(),
      animate2: generateRandomAnimation(),
      myClass1: "",
      xDirection: -1,
      yD: -1,
    },
  ];

  return (
    <>
      <div className="tw-relative tw-h-[100vh] tw-bg-[url('/bg.png')]  tw-w-[100vw] tw-bg-cover tw-bg-center tw-overflow-hidden ">
        {/* {ele.Y} */}
        {obj.map((item, index) => (
          <Floater
            key={index}
            xIn={item.xIn}
            yIn={item.yIn}
            xFi={item.xFi}
            yFi={item.yFi}
            image={item.image}
            animate={item.animate1}
            durationA={item.duration}
            myClass={item.myClass1}
            Y={ele.Y}
            xD={item.xDirection}
            yD={item.yD}
          />
        ))}

        {/* {obj.map((item, index) => (
          <Floater2
            key={index}
            xIn={item.xIn}
            yIn={item.yIn}
            xFi={item.xFi + 100}
            yFi={item.yFi + 50}
            image2={item.image2}
            animate={item.animate2}
            durationB={item.duration2}
            Y={ele.Y}
          />
        ))} */}

        <div className="main tw-w-[100vw] tw-h-[100vh] tw-flex tw-flex-col tw-items-center tw-justify-center">
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 5,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="title tw-text-[48px] tw-leading-10 tw-pb-4 tw-font-semibold tw-text-[#FFFF] "
          >
            {/* Capable of Transforming your{" "}
              <span className="tw-text-12 tw-leading-10 tw-text-slate-400 tw-text-gradient tw-text-gradient-to-b tw-from-blue-500 tw-to-transparent tw-background-clip-text">
              unlock access to 100+ realms
              </span> */}
            <div className="tw-text-center">Create Playground</div>
            <div className="tw-text-xl tw-text-center tw-py-[20px]">
              unlock access to 100+ realms
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

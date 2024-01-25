import { motion } from "framer-motion";
import concatenateNonNullStringsWithSpaces from "./concat";
type data = {
  xIn: number;
  yIn: number;
  xFi: number;
  yFi: number;
  image:string;
  animate:{x:Array<number>,y:Array<number>};
  durationA:number;
  myClass:string;
  Y:number;
};
export default function Floater(ele:data) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: ele.yIn, x: ele.xIn }}
      animate={{ y: ele.yFi*Math.min(1,ele.Y), x: ele.xFi*Math.min(ele.Y,1), opacity:ele.Y }}
      transition={{ duration:0,type:"tween", ease: "linear", when: "beforeChildren",delay:0 }}
    >
      <motion.div
        initial={{ y: 0, x: 0 }}
        animate={{ y:ele.animate.y, x:ele.animate.x}}
        transition={{ repeat: Infinity, duration:ele.durationA, delay: 1 }}
        className={concatenateNonNullStringsWithSpaces("tw-absolute  tw-h-[60px] tw-w-[60px]",ele.myClass)}
      >
      <img src={ele.image} alt="" />
      </motion.div>
    </motion.div>
  );
}

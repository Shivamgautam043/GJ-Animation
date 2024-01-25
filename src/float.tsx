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
      animate={{ y: ele.yFi*ele.Y, x: ele.xFi*ele.Y, opacity: 1 }}
      transition={{ duration: 2, type: "tween", when: "beforeChildren" }}
    >
      <motion.div
        initial={{ y: 0, x: 0 }}
        animate={{ y:ele.animate.y, x:ele.animate.x}}
        transition={{ repeat: Infinity, duration:ele.durationA, delay: 2 }}
        className={concatenateNonNullStringsWithSpaces("tw-absolute  tw-h-[60px] tw-w-[60px]",ele.myClass)}
      >
      <img src={ele.image} alt="" />
      </motion.div>
    </motion.div>
  );
}

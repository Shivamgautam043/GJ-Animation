import { MotionValue, motion,useTransform } from "framer-motion";
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
  Y:MotionValue<number>;
  xD:number;
  yD:number;
};
export default function Floater(ele:data) {
  const  start  = 0.036;
  const  end = 1;
  const  middle  = 0.482;

  const tempx = useTransform(ele.Y,(z)=>(z<=middle ?z*1250/2:(1-z)*(1000)/2)*ele.xD);
  const tempy = useTransform(ele.Y,(z)=>(z<=middle ?z*1250/2:(1-z)*(1000)/2)*ele.yD);
  const temp2 = useTransform(ele.Y,(z)=>(z<=middle?(z- start)/(middle-start):(end-z)/(end-middle)));
  
  return (
    <motion.div
      initial={{ opacity: 0, y: ele.yIn, x: ele.xIn}}
      // animate={{ y: ele.yFi*Math.min(1,ele.Y), x: ele.xFi*Math.min(ele.Y,1), opacity:ele.Y }}
      // transition={{ duration:0,type:"tween", ease: "linear", when: "beforeChildren",delay:0 }}
      style = {{translateX : tempx, translateY: tempy , opacity: temp2}}
    >
      
      <motion.div
        initial={{ y: 0, x: 0 }}                                                                                
        // animate={{x:ele.animate.x , y:ele.animate.y}}
        animate={{ y:[-5,5,-5], x:[-5,5,-5]}}
        transition={{ repeat: Infinity, duration:ele.durationA, delay: 1 }}
        className={`tw-absolute tw-h-[60px] tw-w-[60px] ${ele.myClass || ''}`}
      >
      <img src={ele.image} alt="" />
      </motion.div>
    </motion.div>
  );
}

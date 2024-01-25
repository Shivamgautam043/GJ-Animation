import { motion } from "framer-motion"
type data={
    xIn:number,
    yIn:number,
    xFi:number,
    yFi:number,
    image2:string,
    animate:{x:Array<number>,y:Array<number>};
    durationB:number;
    Y:number;

}
export default function Floater2(ele:data){
    
    return (
        <motion.div 
            initial={{opacity:0,y:ele.yIn,x:ele.xIn}}
            animate={{ y: ele.yFi*Math.min(1,ele.Y), x: ele.xFi*Math.min(ele.Y,1), opacity:ele.Y*ele.Y }}
            transition={{ duration: 0,type:"tween", ease: "linear", when: "beforeChildren" }}
            >
                <motion.div 
                initial={{y:0,x:0}}
                animate={{x:ele.animate.x , y:ele.animate.y}}
                transition={{repeat:Infinity,duration:ele.durationB,delay:2}}
                className="ele big tw-absolute  tw-h-[40px] tw-w-[40px]">
                    <img src={ele.image2} alt="" />
                </motion.div>
                
            </motion.div>
    )
}
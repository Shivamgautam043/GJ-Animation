import { motion } from "framer-motion"
type data={
    xIn:number,
    yIn:number,
    xFi:number,
    yFi:number,
    image2:string,
    animate:{x:Array<number>,y:Array<number>};
    durationB:number;

}
export default function Floater2(ele:data){
    
    return (
        <motion.div 
            initial={{opacity:0,y:ele.yIn,x:ele.xIn}}
            animate={{y:ele.yFi,x:ele.xFi,opacity:1}}
            transition={{duration:2,type:"tween",when:"beforeChildren"}}
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
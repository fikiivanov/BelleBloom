import { motion} from "framer-motion";
import React from "react";

const PopEffectProvider = ({children,variant}) => {


  return (
    <motion.div
    whileInView="show"
      variants={variant}
      initial="hidden"
    >
      {children}
    </motion.div>
  );
};

export default PopEffectProvider;

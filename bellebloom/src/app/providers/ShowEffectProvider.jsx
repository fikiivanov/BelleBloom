import { motion } from "framer-motion";
import React from "react";

const ShowEffectProvider = ({ children, variant }) => {
  return (
    <motion.div initial="hidden" variants={variant}  whileInView="show"
     >
      {children}
    </motion.div>
  );
};

export default ShowEffectProvider;

"use client"
import { motion } from "motion/react";
import React from "react";

export default function TechButton() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 10 }} // small bounce distance
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" // goes up and down smoothly
      }}
      style={ball}
    />
  );
}

/**
 * ==============   Styles   ================
 */
const ball = {
  width: 100,
  height: 100,
  backgroundColor: "#dd00ee",
  borderRadius: "50%",
};

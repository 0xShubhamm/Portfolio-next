"use client";
import React from "react";
import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";

export default function TechIcons({ type }: { type: string }) {
  const iconStyleBase = {
    width: "35px",
  };

  const iconStyleBaseDark = {
    background: "black",
    width: "35px",
    borderRadius: "100%",
    padding: "4px",
  };

  const iconStyleBaseLight = {
    background: "white",
    width: "35px",
    borderRadius: "100%",
    padding: "4px",
  };

  const spanStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const hoverEffect = {
    whileHover: { scale: 1.2 },
    transition: { type: "spring", stiffness: 300, damping: 10 },
  };

  return (
    <div>
      {type === "work" ? (
        <div className="py-4 md:py-2 flex items-center gap-2 px-6 rounded-full backdrop-blur-lg bg-gray-300/50">
          <motion.span {...hoverEffect} style={spanStyle}>
            <StackIcon name="react" style={iconStyleBaseDark} />
          </motion.span>

          <motion.span {...hoverEffect} style={spanStyle}>
            <StackIcon name="nextjs" style={iconStyleBaseLight} />
          </motion.span>

          <motion.span {...hoverEffect} style={spanStyle}>
            <StackIcon
              name="typescript"
              style={{
                ...iconStyleBaseLight,
                background: "rgb(49, 120, 198)",
                overflow: "hidden",
              }}
            />
          </motion.span>

          <motion.span {...hoverEffect} style={spanStyle}>
            <StackIcon name="expressjs" style={iconStyleBaseLight} />
          </motion.span>

          <motion.span {...hoverEffect} style={spanStyle}>
            <StackIcon name="tailwindcss" style={iconStyleBaseDark} />
          </motion.span>

          <span>|</span>

          <motion.span {...hoverEffect} style={spanStyle}>
            <StackIcon name="docker" style={iconStyleBaseDark} />
          </motion.span>

          <motion.span {...hoverEffect} style={spanStyle}>
            <StackIcon name="github" style={iconStyleBase} />
          </motion.span>

          <motion.span {...hoverEffect} style={spanStyle}>
            <StackIcon name="postman" style={iconStyleBase} />
          </motion.span>
        </div>
      ) : (
        <div className="py-4 md:py-2 flex items-center gap-2 px-6 rounded-full backdrop-blur-lg bg-fuchsia-300/50">
          {[
            { src: "/headphones.svg", alt: "Headphones", size: "w-8" },
            { src: "/coding.svg", alt: "Coding", size: "w-8" },
            { divider: true },
            { src: "/cat.svg", alt: "Cat", size: "w-9" },
            { src: "/tulip.svg", alt: "Tulip", size: "w-8" },
            { src: "/waterfall.svg", alt: "Waterfall", size: "w-8" },
            { src: "/peace.svg", alt: "Peace", size: "w-8" },
          ].map((icon, idx) =>
            icon.divider ? (
              <span key={idx}>|</span>
            ) : (
              <motion.span {...hoverEffect} key={idx}>
                <span>
                  <img src={icon.src} alt={icon.alt} className={icon.size} />
                </span>
              </motion.span>
            )
          )}
        </div>
      )}
    </div>
  );
}

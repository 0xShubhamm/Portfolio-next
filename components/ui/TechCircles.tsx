
"use client"
import React, { forwardRef } from 'react'
import { cn } from "@/lib/utils";

import StackIcon from 'tech-stack-icons';
import { motion } from 'motion/react';
const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex md:size-20 size-14 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});
const techIcons = [
    { name: "react", position: "top-[-100px] left-[15%]" },
    { name: "tailwindcss", position: "bottom-20 left-[200px]" },
    { name: "mongodb", position: "bottom-[200px] left-20" },
    { name: "nextjs", position: "bottom-[120px] right-[250px]" },
    { name: "typescript", position: "top-[-110px] right-20 hidden md:block" },
    { name: "postgresql", position: "top-24 right-32" },
    { name: "docker", position: "left-12" }
];

Circle.displayName = "Circle";
export function TechCircles() {
    return (
        <>
            {techIcons.map((icon, index) => (
                <motion.div
                    key={index}
                    className={` md:absolute ${icon.position} z-[-10]`}
                    initial={{ y: 0 }}
                    animate={{ y: 10 }} // small bounce distance
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse", // goes up and down smoothly
                        delay: index * 0.2

                    }}
                >
                    <Circle>
                        <StackIcon name={icon.name} />
                    </Circle>
                </motion.div>
            ))}
        </>
    )
}





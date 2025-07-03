"use client"
import React from 'react'
import StackIcon from 'tech-stack-icons'
import { motion } from "framer-motion";
export default function TechIcons({ type }: { type: string }) {
    const iconStyleBase = {
        width: "35px"

    };
    const iconStyleBaseDark = {
        background: "Black",
        width: "35px",
        borderRadius: "100%",
        padding: "4px"
    };
    const iconStyleBaseLight = {
        background: "white",
        width: "35px",
        borderRadius: "100%",
        padding: "4px"
    };
    const spanStyle = {
        display: "flex",
        align: 'items-center',
        justiy: 'content-center'

    }

    const hoverEffect = {
        whileHover: { scale: 1.2 },
        transition: { type: "spring", stiffness: 300, damping: 10 },
    };
    return (
        <div >

            {type == "work" ? <div className='py-4 md:py-2 flex items-center gap-2  px-6 rounded-full backdrop-blur-lg bg-gray-300/50'>


                <motion.span {...hoverEffect} style={spanStyle} >
                    <StackIcon name="react" style={iconStyleBaseDark} />
                </motion.span>

                <motion.span {...hoverEffect} style={spanStyle}>
                    <StackIcon name="nextjs" style={iconStyleBaseLight} />
                </motion.span>

                <motion.span {...hoverEffect} style={spanStyle}>
                    <StackIcon name="typescript" style={{ ...iconStyleBaseLight, background: "rgb(49, 120, 198)", borderRadius: "100%", overflow: "hidden" }} />
                </motion.span>

                <motion.span {...hoverEffect} style={spanStyle}>
                    <StackIcon name="expressjs" style={iconStyleBaseLight} />
                </motion.span>
                <motion.span {...hoverEffect} style={spanStyle}>
                    <StackIcon name="tailwindcss" style={{ ...iconStyleBaseDark }} />
                </motion.span>
                <span>|</span>
                <motion.span {...hoverEffect} style={spanStyle}>
                    <StackIcon name="docker" style={iconStyleBaseDark} />
                </motion.span>


                <motion.span {...hoverEffect} style={spanStyle}>
                    <StackIcon name="github" style={iconStyleBase} />
                </motion.span>


                <motion.span {...hoverEffect} style={spanStyle}>
                    <StackIcon name="postman" style={{ ...iconStyleBase }} />
                </motion.span>
            </div> :
                <div className='py-4 md:py-2 flex items-center gap-2  px-6 rounded-full backdrop-blur-lg bg-fuchsia-300/50'>

                    <motion.span {...hoverEffect} >
                        <span   > <img src="/headphones.svg" alt="" className='w-8 ' /></span>
                    </motion.span>

                    <motion.span {...hoverEffect}>
                        <span   > <img src="/coding.svg" alt="" className='w-8 ' /></span>
                    </motion.span>
                    <span>|</span>
                    <motion.span {...hoverEffect}>
                        <span   > <img src="/cat.svg" alt="" className='w-9 ' /></span>
                    </motion.span>
                    <motion.span {...hoverEffect}>
                        <span   > <img src="/tulip.svg" alt="" className='w-8' /></span>
                    </motion.span>
                    <motion.span {...hoverEffect}>
                        <span   > <img src="/waterfall.svg" alt="" className='w-8' /></span>
                    </motion.span>
                    <motion.span {...hoverEffect}>
                        <span   > <img src="/peace.svg" alt="" className='w-8' /></span>
                    </motion.span>


                </div>
            }
        </div>
    )
}

import React from 'react'

export default function Bg() {
    return (
        <div>
            <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-40 blur-[100px] md:block hidden"></div>
            <div className="fixed top-0 -z-10 h-full w-full "><div className="absolute bottom-auto left-0 right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-fuchsia-300  opacity-35 blur-[120px]"></div></div>
        </div>
    )
}

import React from 'react'

function Appbar() {
    return (
        <header className='flex justify-between px-10 py-6  text-white w-full text-xl '>
            <div className=' flex items-center  px-10   rounded-full bg-violet-600  font-panchang font-bold border-4 border-black'>
                Shubham Lad :)
            </div>
            <nav className=' px-10 py-4  w-1/2 rounded-full bg-black border-4 border-purple-700  '>
                <ul className='flex justify-around '>
                    <li className='p-2'>Home</li>
                    <li className='p-2'>Projects</li>
                    <li className='p-2'>Contact</li>
                </ul>
            </nav>
            <div className='text-xl  flex items-center  px-10   rounded-full bg-black  border-4 border-purple-700'>
                SPOTIFY
            </div>
        </header>
    )
}

export default Appbar

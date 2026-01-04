import React from 'react'
import "./MrWhite.css"
import { Link } from 'react-router-dom'

function MainMenu() {
  return (
    <>
    <div className='min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center p-4 selection:bg-white selection:text-black'>

            <h1 className='text-white text-6xl'>flwo</h1>
            <p className='text-white brightness-60'>A retro style party game arcade </p>
        <div className="flex justify-center items-center border-white border-2  h-50 lg:w-2xl md:w-2xl sm:1xl sm:w-125 bg-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"  >
<Link to="Mrwhite">
            <div className=" border-white border-2 text-white flex justify-center items-center flex-col gap-3 lg:w-125 md:w-110 sm:w-99 hover:bg-gray-100 hover:text-black transition delay-17 ease-in-out" >
                <h1 className='lg:text-4xl md:text-3xl sm:text-2xl ' >Mr White</h1>
                <p className='opacity-65'>Catch the one with the Different word</p>
            </div>

    

</Link>
        </div>
    
            
    </div>
    </>
  )
}

export default MainMenu
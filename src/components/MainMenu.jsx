import React from 'react'
import "./MrWhite.css"
import { useNavigate } from 'react-router-dom' 
import mrwhiteCAS from "../assets/mrwhiteCAS.svg"
import tapeinSoundFile from "../assets/cassfx.mp3"

function MainMenu() {
  
  const navigate = useNavigate();

  const styles = {
    btn: "text-white flex justify-center items-center flex-col gap-3 lg:w-125 md:w-110 sm:w-99 delay-5 ease-in-out active:translate-x-3 cursor-pointer",
  }
  const handleCassetteClick = () => {
    new Audio(tapeinSoundFile).play();

    setTimeout(() => {
      navigate("Mrwhite");
    }, 300);
  }

  return (
    <>
      <div className='min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center p-4 selection:bg-white selection:text-black'>
        <header className="fixed top-0 w-full bg-black z-50 pt-6 pb-4 border-b border-white/30">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">flwo</h1>
            <p className="text-gray-500 text-sm md:text-base uppercase tracking-[0.2em] mt-1">
              retro style party arcade game
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-11 justify-center items-center border-white border-2 w-screen lg:w-200 bg-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]" style={{ padding: "20px" }} >
          <div className='font-mono opacity-75'>~ select your cassette ~</div>

          {/* Step 4: Remove <Link> tag and use onClick directly on button */}
          <button 
            className={styles.btn} 
            onClick={handleCassetteClick} 
            style={{ borderTopLeftRadius: "25px" }}
          >
            <img src={mrwhiteCAS} alt="Mr White Cassette" />
          </button>

        </div>
      </div>
    </>
  )
}

export default MainMenu
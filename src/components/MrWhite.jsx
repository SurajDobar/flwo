import React from 'react'
import './MrWhite.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'




const Defaultwords=[
  ["Pizza", "Burger"],
  ["Dog", "Cat"],
  ["Guitar", "Violin"],
  ["Beach", "Pool"],
  ["Coffee", "Tea"],
  ["Facebook", "Instagram"],
  ["Doctor", "Nurse"],
  ["Apple", "Android"],
  ["Netflix", "Youtube"],
  ["Gym", "Yoga"]
]

function MrWhite() {
  const [view, setView] = useState("Name")  
  const [players,setPlayers]=useState([])
  const[playerName,setPlayerName]=useState("")
  const styles = {
  container: "min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center p-4 selection:bg-white selection:text-black",
  card:'border-4 border-white p-8 w-full max-w-md text-center bg-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] ',
  // head:,
  }

  function addPlayers(){
   
   
   const input= document.getElementById('PlayerNames')
   const name=input.value.trim()
   if(name!==''){
setPlayers([...players,name])
   setPlayerName("")
     console.log(players)
   
     
    }
  }

  function startGame(){
    if(players.length < 3){
      alert("Need atelast 3 players to play")
      return
    }
    setView("Game")
  }

  return (
    <>
    

                      {/* Add players page */}



{view==="Name"&&(
    <div className={styles.container}>  
  <div className={styles.card}>
    <div className='flex items-center '>
        <Link to="/" ><button className="text-white hover:underline  border-2 border-gray-500 font-mono" onClick={()=>setView("Name")}>{"<"} Menu</button></Link>
    </div>
    
<div className='flex flex-col gap-12'>

      <h1 className='font-mono text-4xl underline block'>MR. WHITE</h1>

{players.length>=1 &&(<div className=' flex flex-wrap gap-4 p-10 justify-center'>{
  players.map((prev)=>(
    <div key={prev} className=' border-2 border-gray-800 p-20'>{prev}</div>))}
    
    </div>
  )}

  <div>
    <form className='flex flex-col gap-10 items-center ' onSubmit={(e)=>{e.preventDefault()
     }}>
      
     <div><input type="text" id="PlayerNames" autoComplete='off'  className='border-2 border-gray-500  ' value={playerName} onChange={(e)=>{setPlayerName(e.target.value)}} placeholder='Enter Name here'/></div>
     

     <button onClick={addPlayers} className="border-2 border-gray-500">Add Player</button>

{ players.length>=3 &&(
  <div >
  <button className='bg-orange-400 border-2 border-gray-100 text-black '  onClick={startGame}>Start Game</button>
  </div>
)}
  </form>

  




</div>

    </div>

</div>
  </div>


)}



              {/* The Maine game page */}





{view==="Game" && (
  <div>
    <h1 className="text-white">Hey this is the second Page</h1>
  </div>
)}

    
      
    
    

    </>
  )
}

export default MrWhite
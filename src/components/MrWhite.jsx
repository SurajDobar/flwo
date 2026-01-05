import React from 'react'
import './MrWhite.css'
import { useState ,useCallback} from 'react'
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
  // const [gamers,setGamers]=useState({})
  const [selectedvalue,setSelectedValue]=useState("Default")
  const [customwords,setCustomWords]=useState([])
  const [customWordsName1,setCustomWordsName1]=useState("")
  const [customWordsName2,setCustomWordsName2]=useState("")
  const [showPassPlayer,setShowPassPlayer]=useState(false)
  const [revealcards,setRevealCards]=useState([])
  const [buttonCount,setButtonCount]=useState(1)
  const [revealCardName,setRevealCardName]=useState("")
  const[revealCardWord,setRevealCardWord]=useState("")
  const[showVotingPage,setShowVotingPage]=useState(false)

  const styles = {
  container: "min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center p-4 selection:bg-white selection:text-black",
  card:'border-4 border-white p-8 w-full max-w-md text-center bg-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] ',
  // head:,
  }

  function addPlayers(){
    const gameData={}
   const input= document.getElementById('PlayerNames')
   const name=input.value.trim()
   if(name!==''){
setPlayers([...players,name])
   setPlayerName("")
     console.log(players)
   
     
    }
  }

  const customwordAdd=()=>{

    const cusword1= document.getElementById("customword1")
    const cusword2=document.getElementById("customword2")
    const ctm1=cusword1.value.trim()
    const ctm2=cusword2.value.trim() 
   if(ctm1==="" || ctm2===""){
    alert("enter both words No empty words")
    return
   }
   else{
    setCustomWords([...customwords,[ctm1,ctm2]])
    setCustomWordsName1("");
    setCustomWordsName2("");
    console.log(customwords)
    
   }}
  



function gaming(){
  
  const mr=Math.floor(Math.random()*players.length)
  const binary=Math.floor(Math.random()*2)
  const nobinary=binary===0 ? 1 : 0
  const gameData={}
  if(selectedvalue==="Default"){
    const word=Defaultwords[Math.floor(Math.random()*Defaultwords.length)]
    
    for (let i=0;i<players.length;i++){
    if(mr===i){
      gameData[players[i]]={
        
        name:players[i],word:word[binary],ismrwhite:"true"
      }
      
    }
    else{
      gameData[players[i]]={name:players[i],word:word[nobinary],ismrwhite:"false" }
    }
  }
  // setGamers(gameData)
  console.log(gameData)
  
  }
  
  if(selectedvalue==="Custom"){
 const word=customwords[Math.floor(Math.random()*customwords.length)]
    
    for (let i=0;i<players.length;i++){
    if(mr===i){
      gameData[players[i]]={
        
        name:players[i],word:word[binary],ismrwhite:"true"
      }
      
    }
    else{
      gameData[players[i]]={name:players[i],word:word[nobinary],ismrwhite:"false" }
    }
  }
  // setGamers(gameData)
  console.log(gameData)
  

  }

  if(selectedvalue==="Custom+default"){
    const customdefault=[...Defaultwords,...customwords]
    const word=customdefault[Math.floor(Math.random()*customdefault.length)]
    
    for (let i=0;i<players.length;i++){
    if(mr===i)  {
      gameData[players[i]]={
        
        name:players[i],word:word[binary],ismrwhite:"true"
      }
      
    }
    else{
      gameData[players[i]]={name:players[i],word:word[nobinary],ismrwhite:"false" }
    }
  }
  // setGamers(gameData)
  console.log(gameData)
    }

              // card logic in a list
    const liss=[]
    
    for(let key in gameData){
      liss.push(gameData[key])
    }
    setRevealCards(liss)
    console.log(liss)

    setRevealCardName(liss[0].name)
    setRevealCardWord(liss[0].word)
  }

  





function startGame(){
  if(players.length < 3){
    alert("Need atelast 3 players to play")
      return
    }
    else{
      setView("Game")  
      gaming()
    }
    
  }

function revealword(){
  
  if(showPassPlayer===false){
    setShowPassPlayer(true)
    return
  }

  if(showPassPlayer===true){
    setShowPassPlayer(false)
    
    if(buttonCount<revealcards.length){
      setRevealCardName(revealcards[buttonCount].name)
      setRevealCardWord(revealcards[buttonCount].word)
      console.log(revealcards[buttonCount].name)
    console.log(revealcards[buttonCount].word)
    const num=buttonCount
    setButtonCount(num+1)
    
  }
  if (buttonCount===revealcards.length-1){
    setShowVotingPage(true)
    setShowPassPlayer(false)
    
  }
  }

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
{players.length==0 &&(<div> No players yet here ....</div>)}
{players.length>=1 &&(<div className=' flex flex-wrap gap-4 p-10 justify-center'>{
  players.map((prev)=>(
    <div key={prev} className=' border-2 border-gray-800 ' style={{padding: '3.8px'}}>{prev}</div>))}
    
    </div>
  )}

  <div>
    <form className='flex flex-col gap-10 items-center ' onSubmit={(e)=>{e.preventDefault()
     }}>
      
     <div><input type="text" id="PlayerNames" autoComplete='off'  className='border-2 border-gray-500  ' value={playerName} onChange={(e)=>{setPlayerName(e.target.value)}} placeholder='Enter Name here'/></div>
     

     <button onClick={addPlayers} className="border-2 border-gray-500 hover:bg-[#1a1a1a] active:translate-y-1 active:shadow-none  " style={{marginBottom:"20px" ,padding:"5px 50px 5px 50px"}}>Add Player</button>

{ players.length>=3 &&(
  <div >
  
  <button  className='hover:bg-orange-500 hover:text-white transition delay-5 ease-in-out bg-orange-400 border-2 border-gray-100 text-black active:translate-y-1 active:shadow-none  'style={{ marginBottom:"20px" , padding:"5px 50px 5px 50px"}}  onClick={()=>setView("Customword")}>Select Words</button>
  </div>
)}
  </form>

</div>
    </div>
</div>
  </div>

)}






            {/* The add custom words option page */}



{view=="Customword"  &&(
  <div>
    
    <div className={styles.container}>
<div className={styles.card}>
  <div className='flex flex-col gap-10'>

<div className='text-5xl'> Choose words </div>
<select className='border-2 border-gray-600 bg-black' onChange={(e)=>setSelectedValue(e.target.value)} style={{padding:"20px" , margin:"10px"}}>
 
  <option value="Default">Default words</option>
  <option value="Custom">Custom words</option>
  <option value="Custom+default">Custom + default</option>
</select>


{
(selectedvalue=="Custom"|| selectedvalue== "Custom+default") &&(
  
  
  <div>
    
      <div className='flex flex-col items-center gap-1'>
        <div> Custom words.. {customwords.length} </div>
        <div>First word</div>
        <input type="text" autoComplete='off' value={customWordsName1} onChange={(e)=>{setCustomWordsName1(e.target.value)}} id="customword1" className='border-2 border-gray-700' ></input>
        <div>Second word</div>
        <input type="text" autoComplete='off' value={customWordsName2} onChange={(e)=>{setCustomWordsName2(e.target.value)}}   id="customword2" className='border-2 border-gray-700' ></input>
        <button className='border-gray-900 border-2 hover:bg-[#1a1a1a]  transition-all ease-in active:translate-y-2 active:shadow-none ' style={{padding:"15px 50px 15px 50px",margin:"10px 0px 1px 0px"}} onClick={customwordAdd}>Add Pair</button>
  


      </div>

  </div>
)}
{(selectedvalue==="Default" ||customwords.length>=1 ) &&(

  <button className='hover:bg-orange-500 hover:text-white  delay-5  bg-orange-400 border-2 border-gray-100 text-black transition-all ease-in active:translate-y-2 active:shadow-none'style={{ margin:"0px 50px 20px 50px" , padding:"5px 25px 5px 25px"} } onClick={startGame}   >Start Game</button>
)}
  </div>
</div>
    </div>
  </div>
)}







              {/* The Main game page */}





{view==="Game" && (
<div>
<div className={styles.container}>
  <div className={styles.card}>
<div className='flex flex-col items-center gap-3'>

<div className='text-2xl'>Agent: </div>
<h1 className='text-7xl text-orange-400'>{revealCardName}</h1>
<div>Your word is {">>>>"}</div>

{showPassPlayer===true &&(
  <div>{revealCardWord}</div>
)}

{showPassPlayer===false&&(

  <button className='border-2 border-gray-700 hover:bg-[#1a1a1a] transition-all ease-in active:translate-y-2 active:shadow-none' style={{padding:"10px"}} onClick={revealword} >Reveal Word</button>
)}
{showPassPlayer===true &&(
  
  <button className="border-2 border-gray-700" onClick={revealword}>Press to Hide & pass </button>
)}
{showVotingPage===true&&(
  <button className='border-2 border-gray-700' onClick={()=>setView("Voting")}> well lets go to voting now</button>
)}


</div>
  </div>
</div>

</div>

)}



    {/* after game the voting sesson and revealing who was the mrwhite */}


{view==="Voting"&&(
<div className={styles.container}>
  <div className={styles.card}>
    <div>hellowww</div>
  </div>
</div>
)}    
      
    
    

    </>
  )
}

export default MrWhite
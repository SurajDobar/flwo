import React from 'react'
import './MrWhite.css'
import { useState ,useRef} from 'react'
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


  const [offset, setOffset] = useState(100);
  const trackRef = React.useRef(null);
  const [x, setX] = useState(0);


React.useEffect(() => {
  let frame;
  let pos = 0;
  const speed = 1.9;

  const animate = () => {
    if (!trackRef.current) {
      frame = requestAnimationFrame(animate);
      return;
    }

    const width = trackRef.current.offsetWidth;
    pos = pos <= -width ? 0 : pos - speed;

    setX(pos);
    frame = requestAnimationFrame(animate);
  };

  frame = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(frame);
}, []);







  const styles = {
  container: "min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center p-4 selection:bg-white selection:text-black",
  card:'border-4 border-gray-700 p-8 w-full max-w-md text-center bg-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] ',
  // head:,
  btncvr:"shadow-[4px_4px_0px_0px_rgba(200,200,200,1)] w-full",
  btn:"border-2 w-full font-bold border-gray-700 hover:bg-[#1a1a1a]  active:translate-y-1 active:translate-x-1 active:shadow-none",
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
    <div className='flex items-center ' style={{padding:"10px 0px 20px 10px " ,margin:"0px"} }>
        <Link to="/" ><button className="text-white hover:underline  border-2 border-gray-500 font-mono" style={{padding:"6px 8px 6px 3px",margin:"0px"}} onClick={()=>setView("Name")}>{"<"} Menu</button></Link>
    </div>
    
<div className='flex flex-col gap-9 w-full' style={{padding:"0px 30px 0px 30px"}}>
<div className='w-full'><h1 className='font-mono font-bold text-4xl  w-full '>MR. WHITE</h1>
<hr className='border-2'/>
</div>
{players.length==0 &&(<div> No players yet here ....</div>)}
{players.length>=1 &&(<div className=' flex flex-wrap gap-4 p-10 justify-center'>{
  players.map((prev)=>(
    <div key={prev} className=' border-2 border-gray-800 ' style={{padding: '3.8px'}}>{prev}</div>))}
    
    </div>
  )}

  <div>
    <form className='flex flex-col gap-4 items-center ' onSubmit={(e)=>{e.preventDefault()
     }}>
      
     <div className='w-full'><input type="text" id="PlayerNames" autoComplete='off'  className='w-full border-2 border-gray-500 font-bold  text-center' style={{padding:"12px 20px 12px 20px",margin:"0px"} } value={playerName} onChange={(e)=>{setPlayerName(e.target.value)}} placeholder='ENTER NAME'/></div>
     
<div className={styles.btncvr} style={{marginBottom:"20px" }}>

     <button onClick={addPlayers} className={styles.btn } style={{padding:"12px 20px 12px 20px",margin:"0px"}}>+ Add Player</button>
</div>

{ players.length>=3 &&(
  <div className='w-full'>
  
  <button  className='w-full hover:bg-orange-500 hover:text-white transition delay-5 ease-in-out bg-orange-400 border-2 border-gray-100 text-black active:translate-y-1 active:shadow-none  'style={{ marginBottom:"20px" , padding:"5px 50px 5px 50px"}}  onClick={()=>setView("Customword")}>Select Words</button>
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
  <div className='flex flex-col gap-5 w-full' style={{padding:"20px"}}>

<div className='text-5xl font-bold'> CHOOSE WORDS </div>
<select className=' font-bold border-2 border-gray-600 bg-black' onChange={(e)=>setSelectedValue(e.target.value)} style={{padding:"20px" , margin:"10px"}}>
 
  <option value="Default">Default words</option>
  <option value="Custom">Custom words</option>
  <option value="Custom+default">Custom + default</option>
</select>


{
(selectedvalue=="Custom"|| selectedvalue== "Custom+default") &&(
  
  
  <div>
    
      <div className='flex flex-col items-center w-full gap-4'>
        <div className='font-bold'> Custom words.. {customwords.length} </div>
        
        <input type="text" autoComplete='off' value={customWordsName1} placeholder='FIRST WORD' onChange={(e)=>{setCustomWordsName1(e.target.value)}} id="customword1" className='border-2 border-gray-700 w-full' style={{padding:"15px 0px 15px 10px"}} ></input>
        
        <input type="text" autoComplete='off' value={customWordsName2} placeholder='SECOND WORD' onChange={(e)=>{setCustomWordsName2(e.target.value)}}   id="customword2" className='border-2 border-gray-700 w-full' style={{padding:"15px 0px 15px 10px"}} ></input>
        <button className='border-gray-900 border-2 hover:bg-[#1a1a1a] font-bold transition-all ease-in active:translate-y-2 active:shadow-none ' style={{padding:"15px 50px 15px 50px",margin:"10px 0px 1px 0px"}} onClick={customwordAdd}>+ ADD PAIR </button>
  


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
<div className='flex flex-col items-center gap-1 rounded-3xl ' style={{padding:"20px 0px 20px 0px",margin:"20px"}}>

<div className='text-2xl'>SPECIAL AGENT </div>
<h1 className='text-7xl text-orange-400 underline' style={{padding:"0px 0px 20px 0px"}}>{revealCardName.toLocaleUpperCase()}</h1>
<div>YOUR WORD IS...</div>

{showPassPlayer===true &&(
  
  
  <div className='animate-pulse w-full' style={{margin:"25px"}}>
    <hr className='w-full' />
    <div className='text-3xl ' style={{padding:"25px"}}>{revealCardWord}</div>
    <hr className='w-full' />
  </div>
)}

{showPassPlayer===false&&(
  
  /* <div>
  <div className='animate-pulse '>
  <hr/>
  <div className='text-4xl border-3 bg-yellow-400 border-yellow-800 text-black'>⚠️PASS TO PLAYER⚠️ </div>
  <hr/>
  </div>
  <button className='border-2 border-gray-700 hover:bg-[#1a1a1a] transition-all ease-in active:translate-y-2 active:shadow-none' style={{padding:"10px"}} onClick={revealword} >REVEAL WORD</button>
  </div> */

<>
<div className=" animate-pulse w-full overflow-hidden border-2 border-yellow-500 bg-yellow-900 text-yellow-300" style={{margin:"25px 0px 25px 0px"}}>
  <div
    ref={trackRef}
    className="whitespace-nowrap text-2xl font-semibold py-3 "
    style={{
      transform: `translateX(${x}px)`
    }}
  >
    ⚠ PASS TO THE PLAYER ⚠ PASS TO THE PLAYER ⚠ PASS TO THE PLAYER ⚠PASS TO THE PLAYER ⚠PASS TO THE PLAYER ⚠PASS TO THE PLAYER ⚠PASS TO THE PLAYER ⚠PASS TO THE PLAYER ⚠PASS TO THE PLAYER ⚠
  </div>

</div>
<div className={styles.btncvr}>

<button className={styles.btn} style={{padding:"10px"}} onClick={revealword} >REVEAL WORD</button><div></div>
</div>
      </>)}
{showPassPlayer===true &&(
  <div className='w-full'> 
    <div>PRESS BUTTON TO HIDE AND PASS</div>
  <button className="border-2 hover:bg-[#1a1a1a]  border-gray-700 bg-[#111010] w-full  active:translate-y-1 active:shadow-none" style={{padding:"8px",margin:"20px 0px 20px 0px"}} onClick={revealword}>HIDE & PASS </button>

  </div>
)}
{showVotingPage===true&&(
  
  <button className='bg-gray-100 border-dashed text-black w-full border-2 rounded-2xl border-gray-700 transition ease hover:bg-gray-300  active:translate-y-1 ' style={{margin:"20px 0px 0px 0px",padding:"10px"}} onClick={()=>setView("Voting")}> Voting </button>
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
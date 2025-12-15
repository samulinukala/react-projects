import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function RandomImage(num)
{
  console.log(num);
  if(num>=0)
  { 
  return <img src={`https://picsum.photos/200/200?random${num}`}></img>
  }
  else
  {
    return <img src={"https://picsum.photos/200/200"}></img>
  }
  
}
function RandomImageList(count)
{
  let images=[];
  for (let i=0; i<count;i++){
    images.push(i);
  }
  return 
  (
    <div>
    {images.map(numv=><RandomImage num={numv} />)}
    </div>
  )
}
function App() {



  return (

      <div>
      <h1>gallery</h1>
     <RandomImage />
    <RandomImageList count={100}/>

      </div>
    
   
  )
}

export default App

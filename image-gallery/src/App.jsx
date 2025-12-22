import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function RandomImage(props)
{
  const style={marginTop: "0.2%",marginLeft:"0.9%"}
  if(props.num??0)
  { 
    console.log(props.num);
  return <img style={style} src={`https://picsum.photos/200/200?random${props.num}`}></img>
  }
  else
  {
    return <img src={"https://picsum.photos/200/200"}></img>
  }
  
}
function SpecificImage(props)
{
  const style={marginTop: "0.2%",marginLeft:"0.9%", width:"300px", height:"378px"}
  
   return <img style={style} src={props.url}></img>
}
function DriveImage(props)
{
  const style={marginTop: "0.2%",marginLeft:"0.9%"}
  const PicStyle={width:"300px", height:"378px"}
  const shitUrl=props.url;
  console.log(shitUrl);
  const cleanerUrl=shitUrl.slice(32,65);
  console.log(cleanerUrl);
   return (
     <div style={style}>
     <img style={PicStyle} src={`https://lh3.googleusercontent.com/u/0/d/${cleanerUrl}`}></img>
     {props.title&& <p>{props.title} </p>}
     </div>
     )
}
function RandomImageList(props)
{
  let images=[];
  for (let i=0; i<props.count;i++){
    console.log("looping at "+i)
    images.push(i);
  
  }
  console.log(images.length);
  return (
    <div>
    {images.map((numv)=>(
      <RandomImage num={numv} />
      
      ))}
    </div>
  )
}
function DriveImageRenderList(props)
{
  
}

  <RandomImageList count={150}/>
function App() {



  return (

      <div>
      <h1>gallery</h1>
    
    <DriveImage url="https://drive.google.com/file/d/1fSnJgRD0h1XuJvjEXUfBa49lld31qkud/view?usp=sharing" title="zia simpson"/>

      </div>
    
   
  )
}

export default App

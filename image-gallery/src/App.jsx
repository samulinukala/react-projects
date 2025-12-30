import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useEffect} from 'react';
import './App.css'
function getData()
{
  const url = 'https://corsproxy.io/?gist.githubusercontent.com/samulinukala/63f55f2f4d784a9e3c0856bfd6c75a80.json';

return fetch(url
).then((response)=>response.json()
.then((data)=>{
  console.log(data);
  return data;
})
.catch((error)=> {
  console.error(error);
}
  )
  
   )
  }
  async function getDataE()
{
  const url = 'https://corsproxy.io/?https://gist.github.com/samulinukala/63f55f2f4d784a9e3c0856bfd6c75a80/raw/artDb.json';

const response= await fetch(url);
const data=await response.json();



return data;  
  
}

  
  
   
  


function RandomImage(props)
{
  const style={marginTop: "0.2%",marginLeft:"0.9%"}
  if(props.num??0)
  { 
  
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
  
    images.push(i);
  
  }
  
  return (
    <div>
    {images.map((numv)=>(
      <RandomImage num={numv} />
      
      ))}
    </div>
  )
}
function DriveImageRenderList()
{
  const [images,setImages]=useState([])
      useEffect(()=>{
       getDataE().then((result)=>{
      console.log(result);
      console.log(result.imageData);
     setImages( result.imageData);
     });
        
      },
      []);
  
     return (
       <div>
        { images.map
        ((work)=>
         (
          <DriveImage title={work.title} url={work.url}/>
         )
        )
        }
  </div>
  );
  
  
  
  


}

function App() {



  return (

      <div>
      <h1>gallery</h1>
    
   
    <DriveImageRenderList />
      </div>
    
   
  )
}


export default App

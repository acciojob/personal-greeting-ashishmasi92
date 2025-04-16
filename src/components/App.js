
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  
 
  const [name,setName]= useState("")
  let str = "Hello,"
  let x = "!"
  if(name){
   

  }
 
  return (
    <div>
        <input type="text" name="name" onChange={(e)=>{
          
          setName(e.target.value)
          
          }}/>
        
        {name && <p>{`${str} ${name}${x}`}</p>}
    </div>
  )
}

export default App

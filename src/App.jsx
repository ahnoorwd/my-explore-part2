import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './countari';
import Users from './users';
import Friends from './Friends';


function App() {
  
 function handleClick(){
  alert('the button is clicked');
 }
 function addFive(num){
   alert(num+5);
 }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React core concept </h1>

      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button  onClick={handleClick}>click me </button>
      <button onClick={()=>{alert("button 2 is clicked")}}>click2</button>
      <button onClick={()=>{addFive(3)}}>click 3</button>
     
      
    </>
  )
}

export default App

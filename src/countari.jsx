import { useState } from "react"

export default function Counter(){
    const counterStyle ={
        border:'2px solid blue',
        margin:'15px',
        padding:'5px'
    }
    const [count,setcount]=useState(0);
    const handleAdd =()=>{
      const newCount=count+1;
      setcount(newCount);
    }
    const handleremove =()=>{
      const newCount=count-1;
      setcount(newCount);
    }
    return (
        <div style={counterStyle}>
            <h3>Counter:{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleremove}>Remove</button>
        </div>
    )
}
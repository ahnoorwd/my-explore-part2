import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends (){
    const FriendStyle ={
        border:'2px solid red',
        margin:'15px',
        padding:'5px'
    }
    const [friends,setfriend]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setfriend(data))
    },[])
    return(
        <div style={FriendStyle}>
            <h3>Friends:{friends.length}</h3>
           {
            friends.map(frind=><Friend friend={frind}></Friend>)
           }
        </div>
    )
}
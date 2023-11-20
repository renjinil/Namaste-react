import { useState } from "react";

const User =({name})=>{
    const [count]= useState(0)
    return(
        <div className="user-card">
            <h1>count:{count}</h1>
            <h1>Name: {name}</h1>
            <h2>Location:Kottayam</h2>
        </div>
    )
}

export default User;
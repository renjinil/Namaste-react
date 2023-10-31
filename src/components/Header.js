import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    const [btnReactName, setBtnReactName]= useState("Login")
    return <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Cart</li>
                <button className="login" onClick={()=>{btnReactName.toLowerCase()==='login'?setBtnReactName('Log out'):setBtnReactName('Login')}}>{btnReactName}</button>
            </ul>
        </div>
    </div>
}

export default Header;
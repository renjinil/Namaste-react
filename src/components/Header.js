import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [btnReactName, setBtnReactName]= useState("Login")
    const onlineStatus = useOnlineStatus()
    const {loggedInUser}= useContext(UserContext)
    const {items} = useSelector(store=>store.cart)
 
    return <div className="flex justify-between bg-blue-50">
        <div className="logo-container">
            <img className="w-28" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li  className="px-4">Online Status: {onlineStatus?"🟢":"🔴"}</li>
                <li  className="px-4"><Link to="/">Home</Link></li>
                <li  className="px-4"><Link to="/about">About</Link></li>
                <li  className="px-4"><Link to="/contact">Contact us</Link></li>
                <li  className="px-4 font-bold"><Link to="/cart">Cart {items?.length} items</Link></li>
                <button className="login" onClick={()=>{btnReactName.toLowerCase()==='login'?setBtnReactName('Log out'):setBtnReactName('Login')}}>{btnReactName}</button>
                <li className="px-4">{loggedInUser}</li>
            </ul>
        </div>
    </div>
}

export default Header;
import React, { Suspense, lazy, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import {UserContext} from "./utils/UserContext.js"
// import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenuCard from "./components/RestaurantMenuCard"


const About = lazy(()=>import("./components/About"))

const AppLayout=()=>{
    const [userName, setUserName] =useState("dummy")
    useEffect(()=>{
        setUserName("Renjini")
    },[])
    return (
        <UserContext.Provider value={{
            loggedInUser: userName,
            setUserName:setUserName
        }}>
    <div className="app">
        <Header/>
       <Outlet/>
    </div>
    </UserContext.Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
        {
            path:"/",
            element:<Body/>
        },   
        {
            path:'/about',
            element:<Suspense fallback={<div>Loading......</div>}><About/></Suspense>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/restaurant/:id',
            element:<RestaurantMenuCard/>
        }
    ],
        errorElement:<Error/>
}

])
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
import { useEffect, useState } from "react"

const useRestaurantMenu = (id)=>{
    const [resInfo,setRestInfo]=useState(null)
    useEffect(()=>{
        fetchResMenu()
    },[])
   
    const fetchResMenu = async ()=>{
        const datares= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.442430023570761&lng=76.5352849289775&restaurantId="+id)
        const datajson = await datares.json()
        
        setRestInfo(datajson)
    }

    return resInfo;

}

export default useRestaurantMenu
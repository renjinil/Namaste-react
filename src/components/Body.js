import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/UserContext";
import ResturantCards, { withPromotioCard } from "./ResturantCards";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// import Shimmer from "./Shimmer.js";



const Body =()=>{
    
    const [listOfRestaurants, setListOfRestaurants]=useState([])
    const [searchText, setSearchText] =useState("")
    const onlineStatus = useOnlineStatus()
    const PromotedRestaurantard= withPromotioCard(ResturantCards)
    const {loggedInUser,setUserName} = useContext(UserContext)
const [initialData, setInitialData]=useState([])
    useEffect(()=>{
       
     fetchData();
    },[])
const fetchData =async ()=>{
    const fetchData= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.442430023570761&lng=76.5352849289775&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const swiggyJsonData = await fetchData.json();
   
    const restaurant_list = "restaurant_grid_listing";
          const resturantData = swiggyJsonData.data?.cards?.find((card)=>{
            return card.card?.card?.id===restaurant_list;
          })
       
          const resturantList = resturantData.card.card.gridElements.infoWithStyle.restaurants.map(res=>(
            res.info
          ));
     
          setInitialData(resturantList)
          setListOfRestaurants(resturantList) ;


    }
 if(!onlineStatus) return <h1>System not co-operating, Please check your internet connection.</h1>
    return listOfRestaurants.length=== 0 ?  <div>test</div> :(
        <div className="body" >
             <div className="filter_sectiom flex items-center">
              <div className="Search-box p-4 m-4">
                <input type="text" data-testid="input" className="border border-solid border-black mx-4" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="px-4 bg-green-100 rounded-sm" onClick={()=>{
      
              const filteredList = initialData.filter(res=>res.name.toLowerCase().includes(searchText.toLowerCase()))
              setListOfRestaurants(filteredList)
              }}>Search</button>
              </div>
            
              <div>
              <button className="filter-btn p-4 bg-gray-100 rounded-md"
                onClick={()=>{
                  const filteredList = listOfRestaurants.filter(resturant=>{
                      return resturant.avgRating>4;
                  })
                  setListOfRestaurants(filteredList);
                }}
            >Top rated resturants</button>
              </div>
              <div className="p-4 flex items-center">
               <label>Username</label>
               <input type="text" className="p-2 m-2 border border-black" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
              </div>
             </div>
             <div className='flex flex-wrap'>
               
                 {
               listOfRestaurants.map((resturant)=>
               <Link to={"/restaurant/"+resturant.id} data-testid="rescard">
               
                {!!resturant.promoted?<PromotedRestaurantard  key={resturant.id}
               resData = {resturant}/>:
               <ResturantCards 
               key={resturant.id}
               resData = {resturant}
               />}
               </Link>)
               }
             </div>
        </div>
    )
}
export default Body;
import { useEffect, useState } from "react";
import ResturantCards from "./ResturantCards";
import Loader from "react-js-loader";
import Shimmer from "./Shimmer";



const Body =()=>{
    
    const [listOfRestaurants, setListOfRestaurants]=useState([])
    const [searchText, setSearchText] =useState("")
const [initialData, setInitialData]=useState([])
    useEffect(()=>{
        console.log('UseEffect called');
     fetchData();
    },[])
const fetchData =async ()=>{
    const fetchData= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.442430023570761&lng=76.5352849289775&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const swiggyJsonData = await fetchData.json();
   
    const restaurant_list = "restaurant_grid_listing";
          const resturantData = swiggyJsonData.data?.cards?.find((card)=>{
            return card.card?.card?.id===restaurant_list;
          })
          console.log(resturantData)
          const resturantList = resturantData.card.card.gridElements.infoWithStyle.restaurants.map(res=>(
            res.info
          ));
          console.log(resturantList)
          setInitialData(resturantList)
          setListOfRestaurants(resturantList) ;


    }
 
    return listOfRestaurants.length=== 0 ?  <Shimmer/> :(
        <div className="body">
             <div className="filter_sectiom">
              <div className="Search-box">
                <input type="text" className="input-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button onClick={()=>{
                  console.log({initialData},"##")
              const filteredList = initialData.filter(res=>res.name.toLowerCase().includes(searchText.toLowerCase()))
              setListOfRestaurants(filteredList)
              }}>Search</button>
              </div>
             <button className="filter-btn"
                onClick={()=>{
                  filteredList = listOfRestaurants.filter(resturant=>{
                      return resturant.avgRating>4;
                  })
                  setListOfRestaurants(filteredList);
                }}
            >Top rated resturants</button>
             </div>
             <div className='res-container'>
               
                 {
               listOfRestaurants.map((resturant)=><ResturantCards 
               key={resturant.id}
               resData = {resturant}
               />)
               }
             </div>
        </div>
    )
}
export default Body;
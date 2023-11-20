import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenuCard =()=>{
  const [showItemIndex, setShowItemIndex] =useState(null)
  
    const {id} =useParams()
   const resInfo = useRestaurantMenu(id)

    const {name="",cuisines=[],costForTwoMessage='' }= resInfo?.data?.cards[0]?.card?.card?.info||{}
   
    const {itemCards=[]}=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || []
    const categories=resInfo?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return resInfo==null?<Shimmer/>:(
        <div className="text-center">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p>{cuisines?.join(",")}:{costForTwoMessage}</p>
   
        {categories?.map((cate,index)=> (<RestaurantCategory
         key={cate?.card?.card?.title} 
          data={cate?.card?.card} 
          showItems={index==showItemIndex?true: false} 
        setShowItemIndex={()=>index!==showItemIndex?setShowItemIndex(index) :setShowItemIndex(null)}/>))}
        
        </div>
    )
}
export default RestaurantMenuCard;
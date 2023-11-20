
import ItemList from "./ItemList";



const RestaurantCategory =({data,showItems,setShowItemIndex})=>{
  
    const handleClick =()=>{
        // setShowAccordion(!showAccordion)
        setShowItemIndex()
    }
    return(
        <div className="w-6/12 shadow-lg mx-auto my-4 py-4 bg-gray-50 ">
         <div className="flex justify-between cursor-pointer" onClick={handleClick}>
         <span className="font-bold text-lg">{data?.title}({data?.itemCards.length})</span>
         {!showItems?<span >🔽</span>:<span>🔼</span>}
         </div>
       {showItems &&  <ItemList item={data?.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;
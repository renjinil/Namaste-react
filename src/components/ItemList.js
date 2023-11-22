import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";



const ItemList = ({item})=>{
    const dispatch = useDispatch()
   const handleAddItem =(item)=>{
    dispatch(addItem(item))
   }
    return (<div>
        {item?.map(item=>(
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.price/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12">
                     <button className="absolute bg-black text-green-500 mx-5 shadow-lg font-medium" onClick={()=>handleAddItem(item)}>Add +</button>
                     <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId }/>
                     
                     </div>
            </div>
        ))}
    </div>)
}

export default ItemList;
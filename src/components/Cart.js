import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart =()=>{
    const {items}=useSelector(store=>store.cart)
    const dispatch =useDispatch()
    const handleClearcart =()=>{
        dispatch(clearCart())

    }
    return <div className="text-center">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button className="bg-black text-white p-2 m-3" onClick={handleClearcart}>Clear Cart</button>
        {items?.length===0&&<h1> Your cart is empty now !!!! .add new items to the cart.</h1>}
        <div className="w-6/12 m-auto">
            <ItemList item={items}/>
        </div>
    </div>
}

export default Cart
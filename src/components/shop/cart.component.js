import { useEffect, useState } from "react"

const Cart = ({cartData}) =>{
    const [cart,setCart] = useState(cartData)
     useEffect (()=>{
        setCart(cartData)
     },[cartData])


      const delItrem  = (key)=>{
        const updaytedCartData = [...cart]
        updaytedCartData.splice(key,1)
        localStorage.setItem('cart', JSON.stringify(updaytedCartData))
        setCart(updaytedCartData)
      }
 const calculatedTotal = () =>{
    return cart.reduce((total,item)=> total + item.price, 0)
 }



    return(
        <>
       <div className="cart_section">
        <h1>Your List</h1>
        <div>
            {
                cart.map((item,index)=>(
                    <div key={index} className="cart_item">
                       <span>{item.title}</span>
                       <span>{item.price}</span>
                       <span>
                        <button onClick={()=>delItrem (index)}>Remove</button>
                       </span>
                        </div>
                ))
            }
        </div>
        <p>Total Price : {calculatedTotal()}</p>
       </div>
        </>
    )
}
export default Cart;
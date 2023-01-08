import React, { useContext } from 'react'
import cartContext from "../shopping/Shopping"
const Cart = () => {
 
  const getData = useContext(cartContext);
   console.log(getData);
  return (
    <div>
 
     {/* <img src={} alt="" /> */}
    </div>
  )
}

export default Cart

import React from 'react'
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";
function Checkout() {

    const [{basket}]= useStateValue();
    return (
        <div className="checkout">
        <div className="checkout_left">
        <img className="checkout__ad" src=" https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=" "/>


         {basket?.length ===0 ? (
             <div>
                 <h2>Your Shopping Basket is empty</h2>
                 <p>
                     You have no items in your basket.To Buy click on 
                     "Add to basket" next to item"
                 </p>
             </div>
         ) :(
             <div>
                 <h2 className="checkout__title">Your Shopping Basket</h2>
                
                {basket?.map((item)=>(
                     <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />

                ))}
               

             </div>
         )} 
         </div> 
         {basket.length>0 &&(
             <div className="checkout__right">
             
             <Subtotal/>
             </div>
         )} 
        </div>
    );
}

export default Checkout

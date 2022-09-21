import { Link } from "react-router-dom";
import badge from "react-bootstrap"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

  const test = useContext(CartContext);

  return (    
    <>
    
    <h3>
      <badge pill bg="secondary" text="dark">{test.calcItemsQty()}
      </badge>
    </h3>
      
      
   <a href="logo">
   <Link to={"/cart"}><img class="cart"src="https://res.cloudinary.com/claudioluxt/image/upload/v1662643912/imagen/cartwidget-1_ggi0gd.png" alt="carto4"></img></Link>

   </a>
   
    
    
    
    </>
  );
}

export default CartWidget;

  
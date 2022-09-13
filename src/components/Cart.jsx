import { useContext } from "react";
import {CartContext} from "../context/CartContext"


const Cart = () => {

    const test = useContext(CartContext);

    return (
        <>

         <>
         <div className="containerDetail2">      
            
            <button className="btn btn-outline-danger btn-sm" onClick={test.clear}>Quitar todos</button>

            <div className="cardDetail2">

                <div className="flex-item">
                {            
                test.cartList.map (item =>
                <>
                <h2>{item.brand}</h2>
                <img className="cart2" src={item.image} alt="" />
                <span className="name2">  
                <span className="precio3">Modelo:</span> {item.nombre} 
                <span className="precio3">/ Cantidad:</span> {item.quantity} 
                <span className="precio3">/ Precio x Unidad = </span> {item.precio} pesos </span>                 
                
                <buttom className="btn btn-outline-danger btn-sm" 
                onClick={() => test.removeItem(item.id)}>
                    Quitar producto
                </buttom>
                </>
                
                )
            
                }
            </div>
                <div className="flex-item">
                <img className="logoCarro" src="https://res.cloudinary.com/claudioluxt/image/upload/v1662643912/imagen/cartwidget-1_ggi0gd.png" alt="carro"></img>
                 <h2>Proximamente estaremos funcionando</h2>       
               </div>
        </div>
               
    
        </div>
        
          
        </>
        </>

        
        
    
    )
}

export default Cart;
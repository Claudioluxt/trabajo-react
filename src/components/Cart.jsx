import { useContext } from "react";
import {CartContext} from "../context/CartContext"


const Cart = () => {

    const test = useContext(CartContext);

    return (
        <>

         
         <div className="containerDetail2">      
            
            <button className="btn btn-outline-danger btn-sm" onClick={test.clear}>Quitar todos</button>

            <div className="cardDetail2">

                <div className="flex-item">
                {            
                test.cartList.map (item =>
                    <>
                    <h2>{item.brand}</h2>
                    <img class="cart2" src={item.image} alt="" />
                    <span class="name2">  <span class="precio3">Modelo:</span> {item.nombre} <span class="precio3">/ Cantidad:</span> {item.quantity} <span class="precio3">/ Precio x Unidad =</span> {item.precio} pesos  <span class="precio3"> Subtotal: </span> {item.quantity * item.precio}</span>           
                    
                    <buttom class="btn btn-outline-primary btn-lg" onClick={() => test.removeItem(item.id)}>Quitar producto</buttom>
                    <div><hr/></div>
                    </>
                    
                    )
                
                    }</div>
                    <div class="flex-item">
    
            
            <hr />
            
            </div>
            </div>
                    
            <div class="flex-item"><h1>Total Compra = {test.calcTotalCompra()} pesos . </h1> </div>
            <div class="flex-item"><buttom class="btn btn-secondary btn-lg"> Realizar Compra</buttom></div>
            <div class="flex-item"><button class="btn btn-outline-danger btn-lg" onClick={test.clear}>Quitar todos</button></div>
            
            </div>
            
            </>
        )
    }

        
    
export default Cart;
import { useContext } from "react";
import { db } from "../utils/firebaseConfig"
import { serverTimestamp, doc, collection, setDoc, increment, updateDoc } from "firebase/firestore";
import {CartContext} from "../context/CartContext"
import Swal from 'sweetalert2'
import {Link} from "react-router-dom"  

const Cart = () => {

    const test = useContext(CartContext);

    const createOrder = () => {
        let itemsForDB = test.cartList.map(item => ({
            id: item.id,
            title: item.brand,
            model: item.nombre,
            price: item.precio,
            quantity: item.quantity

                }))
        let order = {
            comprador:{
                name: "claudio gabriel",
                email: "luxengabriel@gmail.com",
                phone: "11 31423387"
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: test.calcTotalCompra()           
        }        
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
            .then(result => {
                Swal.fire("Su orden numero " + result.id + " ha sido creada!")
                test.cartList.forEach(async(item) => {
                const itemRef = doc(db, "products", item.id);
                await updateDoc(itemRef, {
                stock: increment(-item.quantity)
                });
            })
            test.clear()
            })
            .catch(err => console.log(err))


    }


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
                    <Link to='/Item/:id'><button className="btn btn-outline-primary btn-sm">seguir comprando</button></Link>
                    <div><hr/></div>
                    </>
                    
                    )
                
                    }</div>
                    <div class="flex-item">
    
            
            <hr />
            
            </div>
            </div>
                    
            <div class="flex-item"><h1>Total Compra = {test.calcTotalCompra()} pesos . </h1> </div>

            <div class="flex-item"><buttom class="btn btn-secondary btn-lg" onClick={createOrder}> Realizar Compra</buttom></div>

            <div class="flex-item"><button class=" btn-lg" onClick={test.clear}>Quitar todos</button></div>
            </div>
            
            </>
        )
    }

        
    
export default Cart;
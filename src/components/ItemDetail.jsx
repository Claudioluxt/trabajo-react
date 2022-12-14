import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2' 

const ItemDetail = ({ item }) => {

  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext );

    const onAdd = (qty) => {
      Swal.fire ("You have selected " + qty + " items.");
      setItemCount(qty);
      test.addItem (item,qty);
}

    return (
      <> 
      {
      item && item.image 
      ?
      <main className="containerDetail">
        <div className="cardDetail">
          
                <div className="flex-item">
                  <p className="name2"> Modelo:</p>
                  <p className="name"> {item.nombre}</p>
                  <img className="detail" src={item.image} alt="" />
                </div>
                  
                <div className="flex-item">
                  <hr />
                  <h2>Marca: {item.brand}</h2>
                  <p className="desc">Categoría : {item.category}</p>
                  <p className="desc">Descripción : {item.descripcion}</p>
                  <p className="desc">ID del Producto = {item.id}</p>
                  <p className="desc">Stock Disponible = {item.stock}</p>
                  <p className="precio">Precio = {item.precio} pesos</p> 
                  <hr />                
                  
                  {
                        itemCount === 0
                      
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart'><button className="btn btn-outline-primary btn-sm">CheckOut</button></Link>
                    }
                    <hr />
                </div>
        </div>
      </main>
                   
      


   : <p>Cargando...</p>
       }
      </>
      )
    
  }

  export default ItemDetail;
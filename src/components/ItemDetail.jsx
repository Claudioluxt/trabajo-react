import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({ item }) => {

  const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
      alert ("You have selected " + qty + " items.");
      setItemCount(qty);
}

    return (
      <> 
      <main class="containerDetail">
        <div class="cardDetail">
          
                <div class="flex-item">
                  <p class="name2"> Modelo:</p>
                  <p class="name"> {item.nombre}</p>
                  <img class="detail" src={item.image} alt="" />
                </div>
                  
                <div class="flex-item">
                  <hr />
                  <h2>Marca: {item.brand}</h2>
                  <p class="desc">Categoría : {item.category}</p>
                  <p class="desc">Descripción : {item.descripcion}</p>
                  <p class="desc">ID del Producto = {item.id}</p>
                  <p class="desc">Stock Disponible = {item.stock}</p>
                  <p class="precio">Precio = {item.precio} pesos</p> 
                  <hr />                
                  
                  {
                        itemCount === 0
                      
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart'><button class="btn btn-outline-primary btn-sm">CheckOut</button></Link>
                    }
                    <hr />
                </div>
        </div>
      </main>
                   
      




      </>
      )
    
  }

  export default ItemDetail;
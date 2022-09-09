import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item =({id, brand, nombre, precio, image, stock}) => { 
  return (
    <div class="cards">
      <div><h3 class="marca">{brand}</h3>
      <h4 class="ProductsName">{nombre}</h4>

      <Link to={`/item/${id}`}><img class="imgCatalog" src={image} alt="" /></Link>
      
      <p class="precio">Precio: {precio}</p> 
    </div>
    
    </div>
  );
}

export default Item;
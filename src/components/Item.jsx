import React from "react";
import { Link } from "react-router-dom";
import '../styted/Item.css'

const Item =({id, brand, nombre, precio, image, stock}) => { 
  return (
    <div className="cards">
      <div><h3 className="marca">{brand}</h3>
      <h4 className="ProductsName">{nombre}</h4>

      <Link to={`/item/${id}`}><img className="imgCatalog" src={image} alt="" />
      </Link>
      
      <p className="precio">Precio: {precio}</p> 
    </div>
    
    </div>
  );
}

export default Item;
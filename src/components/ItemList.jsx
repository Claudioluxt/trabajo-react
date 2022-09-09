
import React from "react";
import Item from "./Item";

export default function ItemList(props) {

  let items = props.items;

  return(
  
  
    <div class="containerCards">
      <div>
        
        <div>
          {items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              imageAlt={item.imageAlt}
              categoryId={item.categoryId}
              category={item.category}
              nombre={item.nombre}
              brand={item.brand}
              precio={item.precio}
              stock={item.stock}
            />
            
          ))}
        </div>
      </div>
    </div>
  
  );
}
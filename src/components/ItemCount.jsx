import { useEffect, useState } from "react";



const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [count, setCount] =useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            
            <div className="agregar">
                <button className="btn btn-secondary btn-sm" onClick={decrement}>-</button>
                {" Cant: "}{count}{"  Unid. "}
                <button className="btn btn-secondary btn-sm" onClick={increment}>+</button>
            <br /><br />
                {
                    count
                    ? <button className="btn btn-outline-dark btn-sm" onClick={() => onAdd(count)}>Agregar al Carrito</button>
                    : <button className="btn btn-outline-dark btn-sm" disabled>Agregar al Carrito</button>
                    
                }
            </div>

        </div>
    )
}
export default ItemCount;
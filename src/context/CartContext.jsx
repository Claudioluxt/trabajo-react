import { createContext, useState } from "react";

export const CartContext =createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        const newProduct = {
            ...item,
            quantity: quantity
        }

        if(!isInCart(item.id)) {
            setCartList([...cartList, newProduct])
        } else {
            const newProducts = cartList.map(prod => {
                
                 
                 if(prod.id === item.id) {
                    const newProduct = {
                        ...prod,
                        quantity: quantity + prod.quantity};

                    if(newProduct.quantity > item.stock) {
                        newProduct.quantity = item.stock
                 };

                return newProduct
                  
                } 
            else {
                    
                    return prod
                }
            })
            setCartList(newProducts)
        }
    }

    const isInCart = (id) => {
        return cartList.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        let newCartList = cartList.filter(item => item.id !== id)
        setCartList(newCartList)
    }

    const clear = () => {
        setCartList([])
    }
    const calcTotalCompra = () => {
        let total = 0
        cartList.forEach(prod => {
            total = total + prod.precio * prod.quantity
        })
        return total
    }

    
    
    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.quantity);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }


    return(
        <CartContext.Provider value={{cartList, addItem, removeItem, calcItemsQty, calcTotalCompra, clear}}>
        {children}
    </CartContext.Provider>
        );
}
export default CartContextProvider;
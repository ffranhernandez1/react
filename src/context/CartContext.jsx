import { createContext, useContext, useState } from "react";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";


const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const agregarAlCarrito = (productoNuevo) =>{

        const indexProduct = cartList.findIndex(product => product.id === productoNuevo.id)

        if (indexProduct === -1 ) {
            setCartList([
                ...cartList,
                productoNuevo
            ])
        } else {
            cartList[indexProduct].quantity += productoNuevo.quantity
            setCartList( [ ...cartList ] )
        }
    }

    const calcularTotal = () => {
        return cartList.reduce((precioTotal, objProducto) => precioTotal = precioTotal + (objProducto.precio * objProducto.quantity), 0)
    }

    const eliminarItemCarrito = (pid) => {
        setCartList(cartList.filter(product => product.id != pid))
    }

    const calcularCantidad = () => cartList.reduce( (calcularCantidad, objProducto) => calcularCantidad += objProducto.quantity, 0)

    const vaciarCarrito = () => {
        setCartList([])
    }


    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            calcularTotal,
            eliminarItemCarrito,
            calcularCantidad,
        }}>
        {children}
        </CartContext.Provider>
    )
}
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import { addDoc, collection, getFirestore, } from "firebase/firestore";


const CartContainer = () => {

    const [datosFormulario, setearDatosFormulario] = useState({
        nombre:'',
        apellido:'',
        mail:''
    })
    const {cartList, vaciarCarrito, calcularTotal, eliminarItemCarrito, } = useCartContext()

    const handleOnChange = (event)=> {
        setearDatosFormulario({
            ...datosFormulario,
            [event.target.name]: event.target.value
        })
    }

    const finalizarCompra = (event) => {
        event.preventDefault()

        const compra={comprador: datosFormulario, items: cartList.map(({id, nombre, precio})=>({id, nombre, precio})), precio: calcularTotal()}
    
        const db = getFirestore()

        const queryCollection = collection(db, 'compras')

        addDoc(queryCollection, compra)
        .then(resp => console.log(resp.id))
        .catch(err => console.log(err))
        .finally(()=> {console.log('termino la compra')
                    vaciarCarrito()})
    }

    return (
        cartList.length === 0 ?
        <div>
            <h2>El carrito esta vacio</h2>
            <Link to='/'> Ir a ver productos </Link>
        </div>
        :
        <div className="conjunto-carrito">
            { cartList.map(product => (

                <li key= {product.id} className="item-carrito">
                    <div className="contenedor-imagen-carrito"><img src={product.foto} className="imagenes-carrito"/></div>
                    <div className="contenedor-info-carrito">
                        <ul>
                        <li>nombre: {product.nombre}</li>
                        <li>precio: {product.precio}</li>
                        <li>cantidad: {product.quantity}</li>
                        </ul>
                    </div>
                <button onClick={()=> eliminarItemCarrito(product.id)} className="boton-eliminar">Eliminar item</button>
                </li>
            ))}
            <button onClick={vaciarCarrito} className="boton-vaciar">vaciar el carrito</button>
            <form onSubmit={finalizarCompra}>
                <input type="text" name="nombre" placeholder="" onChange={handleOnChange} value={datosFormulario.nombre}/>
                <input type="text" name="apellido" placeholder="" onChange={handleOnChange} value={datosFormulario.apellido}/>
                <input type="text" name="mail" placeholder="" onChange={handleOnChange} value={datosFormulario.mail}/>
                <button type='submit' className="boton-vaciar">finalizar la compra</button>
            </form>
            <h4 className="precio-total">El total de los productos es de :  {calcularTotal()}</h4>
        </div>
    )
}

export default CartContainer
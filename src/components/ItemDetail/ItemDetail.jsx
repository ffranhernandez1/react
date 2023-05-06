import { ItemCount } from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext"

const ItemDetail = ({product}) => {
    
    const { agregarAlCarrito,} = useCartContext()

    const onAdd = (cantidad) => {
        console.log(cantidad)
        agregarAlCarrito({ ...product, quantity: cantidad })
    }
    return (
        <div className="container-detalle">
            <div className="div-detalle-producto">
                <div className="div-img-detalle"><img src={product.foto} className="img-detalle"/></div>
                <div className="div-info-detalle">
                <h3>nombre: {product.nombre}</h3>
                <h4>precio: {product.precio}</h4>
                <h4>categoria: {product.tipo}</h4>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                </div>
            </div>  
        </div>
    )
}

export default ItemDetail

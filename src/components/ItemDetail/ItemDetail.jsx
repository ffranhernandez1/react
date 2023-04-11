import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {
    
    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return (
        <div className="row">
            <div className="col">
                <img src={product.foto} />
                <h3>nombre: {product.nombre}</h3>
                <h4>precio: {product.precio}</h4>
                <h4>categoria: {product.tipo}</h4>
            </div>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail

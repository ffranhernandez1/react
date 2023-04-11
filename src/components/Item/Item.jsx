import { Link } from "react-router-dom"


const Item = ({producto}) => {
    return (
        <div key={producto.id} className="contenedor-cards">
                                            <div className="info-card">
                                                <h3>Nombre: {producto.nombre}</h3>
                                                <h4>Precio: {producto.precio}</h4>
                                            </div>
                                            <img src={producto.foto} className="foto-producto" alt="imagen"/>
                                            <div className="div-detalle">
                                                <Link to={ `/detail/${producto.id} `}>
                                                <button className="boton-detalle">Detalle</button>
                                                </Link>
                                            </div>
                                    </div>
    )
}

export default Item
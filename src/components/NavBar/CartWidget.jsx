import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"


const CartWidget = () => {
    const {calcularCantidad} = useCartContext()
    return      <Link to={'/cart'} className="link">
                    {calcularCantidad()}
                    <i className="fa-solid fa-cart-shopping"></i>       
                </Link>
                        
}

export default CartWidget


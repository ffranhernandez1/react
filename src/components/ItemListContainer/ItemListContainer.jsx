

import { useEffect, useState } from "react"
import { mockFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {cid} = useParams()

    useEffect(()=>{

        if (cid) {
            mockFetch()
                .then(resp => setProductos(resp.filter(prod => prod.tipo === cid)))
                .catch(err => console.log(err))
                .finally(()=> console.log('siempre y a lo ultimo')) 
        }   else {
            mockFetch()
                .then(resp => setProductos(resp))
                .catch(err => console.log(err))
                .finally(()=> console.log('siempre y a lo ultimo'))   
        }

        
    }, [cid])

    return (
        <div className="contenedor-productos">
            <ItemList productos={productos}/>
        </div>
    )
}

export default  ItemListContainer


import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {cid} = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        if (cid) {
            
            const queryFilter = query(
                queryCollection,
                where('tipo', '==', cid)
            )

            getDocs(queryFilter)
                .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }) ) ))
                .catch(err => console.log(err))

        }   else {  
        
                getDocs(queryCollection)
                .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }) ) ))
                .catch(err => console.log(err))      
        }

        
    }, [cid])

    return (
        <div className="contenedor-productos">
            <ItemList productos={productos}/>
        </div>
    )
}

export default  ItemListContainer
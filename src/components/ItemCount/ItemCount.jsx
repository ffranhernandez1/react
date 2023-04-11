import { useEffect, useRef, useState } from "react"
import useCount from "../hooks/useCount"

export const ItemCount = ({initial=0, stock=5, min=1 }) => {

    const onAdd = (cantidad) => {
        console.log(cantidad)
    }
    
    const { contador, handleAdd, handleRemove, reset } = useCount(1, stock, initial )

    function handleOnAdd() {
        onAdd(contador)
    }

return (
    <div>
        <h3>Contador: {contador}</h3>
        <button onClick={handleAdd}> + </button>
        <button onClick={handleRemove}> - </button>
        <button onClick={handleOnAdd}> Agregar </button>
    </div>
)}
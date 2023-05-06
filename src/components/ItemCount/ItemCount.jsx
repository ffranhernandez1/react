import { useEffect, useRef, useState } from "react"
import useCount from "../hooks/useCount"

export const ItemCount = ({initial=1, stock=5, min=1, onAdd }) => {
    
    const { contador, handleAdd, handleRemove, reset } = useCount(initial, stock, initial )

    function handleOnAdd() {
        onAdd(contador)
    }

return (
    <div>
        <h3>Cantidad de productos: {contador}</h3>
        <button onClick={handleAdd} className="boton-contador"> + </button>
        <button onClick={handleRemove} className="boton-contador"> - </button>
        <button onClick={handleOnAdd} className="boton-contador"> Agregar </button>
    </div>
)}
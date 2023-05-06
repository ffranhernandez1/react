import { useState } from "react"

const useCount = (initial=1, stock=5, min=1 ) => {
    if(initial < min || initial > stock) initial = min
    const [contador, setContador] = useState (0)

    const handleAdd = () => {
        if (contador < stock) 
        setContador(contador + 1)
    }
    
    const handleRemove = () => {
        if (contador > min) 
        setContador(contador - 1)
    }
    
    const reset = () =>{
        setContador(initial)
    }
    
    return { contador, handleAdd, handleRemove, reset }
}


export default useCount

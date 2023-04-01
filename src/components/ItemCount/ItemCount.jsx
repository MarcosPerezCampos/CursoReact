import { useState } from "react";
// PRIMER HOOK
export const ItemCount = () => {
    //   nombVariab  FunModicarVar   Valor Inicial
    const [contador, serContador] = useState(1) //Definir el estado de mi funcion
    const sum = () => serContador(contador + 1) //Aumentar en uno a contador
    const res = () => serContador(contador - 1) //restar en uno a contador
    return (
        <div>
            <button onClick={() => res()}>-</button>
                 {contador}
            <button onClick={() => sum()}>+</button>
        </div>
    );
}



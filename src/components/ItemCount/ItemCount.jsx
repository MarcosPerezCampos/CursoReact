// ItemCount es para aumentar o disminuir el contador

import { useState } from "react";
// PRIMER HOOK
export const ItemCount = ({ ValInicial, stock }) => {
    //   nombVariab  FunModicarVar   Valor Inicial
    const [contador, setContador] = useState(ValInicial) //Defino un estado con valor inicial 1

  const sumar = () => contador < stock && setContador(contador + 1)
  const restar = () => contador > ValInicial && setContador(contador - 1)
  return (
    <div>
      <button className="btn btn-dark" onClick={() => restar()}>-</button>
      {contador}
      <button className="btn btn-dark" onClick={() => sumar()}>+</button>
      <button className="btn btn-light">Agregar al Carrito</button>
    </div>
  )
}



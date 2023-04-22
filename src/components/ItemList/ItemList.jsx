// Recibe un producto como parametro y lo agrega a un plantilla , espera un array

import { Item } from "../Item/Item";

// Recibir un array de productos y a cada uno de esos productos los voy a transformar en un componente dada una plantilla
export  const ItemList = ({ productos }) => {
    return (
        <>
        {productos.map(producto => <Item key={producto.id}
         item={producto}/>)}
        </>
    );
}



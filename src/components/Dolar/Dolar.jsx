// Ejemplo de useEffect para tener control del bucle

// import { useState, useEffect} from "react";
// export const Dolar = () => {
//     const [dolar, setDolar] = useState([]) //Sin valor inicial

// useEffect(() => { //Dentrod ee sta funcion establezco un control de mi
//     setInterval(() => {
//           fetch ("https://criptoya.com/api/dolar")
//             .then(response => response.json()) //Cuando me conecte correctamente
//             .then (dolar => {
//                 console.log (dolar)
//                 setDolar (dolar) //Definir que el state sea igual a dolar
//             })
//     },50000)
    
//  }, [])

    

 
// [] cuando se modifique el contenido de mi estado, actualizo [prop] cuando se modifique el contenido dentro de mi estado, actualizo 
 
    

//     return (
//         <div>
//             <p>Solidario: {dolar.solidario} </p>
//             <p>Blue: {dolar.blue}</p>
//         </div>
//     );
// }



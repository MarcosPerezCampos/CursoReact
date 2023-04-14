// Consulto a mis productos de mi base de datos y se los envio a ItemList 
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList"

const BDD = [
    {
        "id": 1,
        "idCategoria": 1,
        "nombre": "Notebook",
        "marca": "ASUS",
        "modelo": "X515EA 15.6",
        "precio": 60000,
        "stock": 30,
        "img": "img/pr"
    },
    {
        "id": 2,
        "idCategoria": 2,
        "nombre": "Celular",
        "marca": "Xiomi",
        "modelo": "Mi-9",
        "precio": 35000,
        "stock": 20,
        "img": "img/xiaomi-mi-9.jpg"
    },
    {
        "id": 3,
        "idCategoria": 3,
        "nombre": "Smart Tv",
        "marca": "Novatech",
        "modelo": "50D1U",
        "precio": 57000,
        "stock": 15,
        "img": "img/smart-tv-novatech.jpg"
    },
    {
        "id": 4,
        "idCategoria": 4,
        "nombre": "Camara ",
        "marca": "iQual",
        "modelo": "C40",
        "precio": 8000,
        "stock": 30,
        "img": "img/camara-iqual.jpg"
    },
    {
        "id": 5,
        "idCategoria": 4,
        "nombre": "Mouse",
        "marca": "Logitech",
        "modelo": "G502",
        "precio": 1400,
        "stock": 7,
        "img": "img/mouse-logitech.jpg"
    },
    {
        "id": 6,
        "idCategoria": 4,
        "nombre": "Auriculares",
        "marca": "Motorola",
        "modelo": "Pulse",
        "precio": 4000,
        "stock": 20,
        "img": "img/motorola-pulse.jpg"
    },
    {
        "id": 7,
        "idCategoria": 2,
        "nombre": "Celular",
        "marca": "Apple",
        "modelo": "Iphone X Silver",
        "precio": 250000,
        "stock": 10,
        "img": "img/iphone-x.jpg"
    },
    {
        "id": 8,
        "idCategoria": 3,
        "nombre": "Apple TV",
        "marca": "Apple ",
        "modelo": "32 Gb",
        "precio": 45000,
        "stock": 30,
        "img": "img/apple-tv.jpg"
    },
    {
        "id": 9,
        "idCategoria": 4,
        "nombre": "Parlante",
        "marca": "Kalley",
        "modelo": "SPK200",
        "precio": 34000,
        "stock": 21,
        "img": "img/parlante-kalley.png"
    },
    {
        "id": 10,
        "idCategoria": 1,
        "nombre": "Mac Air",
        "marca": "Apple",
        "modelo": "M1 2020",
        "precio": 13000,
        "stock": 25,
        "img": "img/mac-air.jpg"
    },
    {
        "id": 11,
        "idCategoria": 2,
        "nombre": "Celular",
        "marca": "Samsung",
        "modelo": "S20",
        "precio": 85000,
        "stock": 30,
        "img": "img/samsung-s20.jpg"
    },
    {
        "id": 12,
        "idCategoria": 1,
        "nombre": "Notebook",
        "marca": "HP",
        "modelo": "Pavilion 15",
        "precio": 120000,
        "stock": 20,
        "img": "img/hp-pavilion.jpg"
    }
]

// Aca lo guarda como useState

export const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])

    useEffect(() => {
        fetch('./json/productos.json')
          .then(response => response.json())
          .then(productos => {
            const productosFiltrados = productos.filter(prod => prod.stock > 0)
            setProductos(productosFiltrados)
    
          })
    
      }, [])
    
      return (
        <div className="row">
          {<ItemList productos={productos} />}
        </div>
      )
    }


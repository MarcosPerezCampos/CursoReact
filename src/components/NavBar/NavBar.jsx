
import { CartWidget } from "../CartWidget/CartWidget";
import { Categorias } from "./Categorias/Categorias";
import Logo from '../Imagenes/BackGraund/Logo.png'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <img className="Logo" src={Logo} alt="Descripcion" /> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
            <div>
            <Categorias />
            </div>
          </div>
          <CartWidget cantCarrito={0}/>
        </div>
      </nav>
    );
}

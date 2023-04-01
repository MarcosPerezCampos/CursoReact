import { CartWidget } from "../CartWidget/CartWidget";


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a><img className="Logo" src="../src/components/Imagenes/BackGraund/Logo.png"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="">Contacto</a>
              </li>
            </ul>
          </div>
          <CartWidget cantCarrito={0}/>
        </div>
      </nav>
    );
}
<img src="../src/components/Imagenes/BackGraund/Logo.png" alt=""></img>
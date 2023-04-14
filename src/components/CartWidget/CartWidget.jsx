export const CartWidget = ({cantCarrito}) => {
    return (
        <div>
            <button className="btn btn-dark"><i className="fas fa-shopping-cart fa-lg"></i></button>
            <p>{cantCarrito}</p>
        </div>
    );
}



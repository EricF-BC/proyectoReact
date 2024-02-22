import "react-rater/lib/react-rater.css";
import "./productDetail.css";

const ProductDetail = ({product}) => {
    
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="columns">
              <div className="column is-one-fifth"></div>
              <div className="column">
                <figure className="image is-3by2">
                  <img className="custom-size-image" src={product.image} alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="block">
              <div className="box">
                <div className="field">
                  <div className="control">
                    <span className="is-size-7 has-text-centered">
                      Producto Nuevo | sin ventas
                    </span>
                  </div>
                </div>
                <h1 className="title is-3 has-text-weight-bold">{product.title}</h1>
                <div className="block">
                  <span className="is-size-3 ">{product.price}</span>
                </div>
                <div className="block">
                  <span className="is-size-6">Color: {product.color} </span>
                </div>
                <div className="block">
                  <span className="is-size-6 has-text-weight-bold">
                    {" "}
                    Stock: Disponible{" "}
                  </span>
                </div>
                <div className="block">
                  <span className="is-size-6 "> Cantidad: {product.lot} </span>
                </div>
                <div className="block">
                  <span className="is-size-6 "> {product.description} </span>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-fullwidth is-dark">
                      Comprar
                    </button>
                  </div>
                </div>
                <div className="control">
                  <button className="button is-fullwidth">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

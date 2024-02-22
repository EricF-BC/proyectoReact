import "./CardContainer.css";
import { useNavigate } from "react-router-dom";
import productList from "../../datatest";
import testimg from "../../img/fototest.avif"

function CardContainer({}) {
  const navigate = useNavigate();

  return (
    <div className="columns is-multiline is-desktop is-mobile" >
      {productList.map((product) => (
        <div className="column is-one-third"> 
        <div className="card has-background-light"> 
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={product.image} ></img>
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{product.title}</p>
              </div>
              <br />
            </div>
            <div className="content has-text-weight-bold">{product.price}</div>
            <div className="content"> {product.description}</div>
            <div className="content has-text-weight-bold"> Stock: {product.lot}</div>
          </div>
          <footer className="card-footer has-background-dark ">

            
            <a key={product.id}
          onClick={() => navigate(`/producto/${product.id}`)}  className="card-footer-item has-text-white">
              Detalles
            </a>
            <a className="card-footer-item has-text-white">
              Agregar al carrito
            </a>
          </footer>
          </div>
          </div>

      ))}
      </div>
  );
}

export default CardContainer;

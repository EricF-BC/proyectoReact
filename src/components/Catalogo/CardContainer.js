import { useCart } from "../../hooks/useCart";
import { AddToCartIcon } from "../../img/icons";
import { Link } from "react-router-dom";
import addToCart from "../../pages/cart.jsx"

function CardContainer({ product }) {

  const { addToCart, cart } = useCart()

  return (
    <div className="column is-one-third">
      <div className="card has-background-light">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={product.image}></img>
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
          <div className="content has-text-weight-bold">
            {" "}
            Stock: {product.lot}
          </div>
        </div>
        <footer className="card-footer has-background-dark ">
          <Link
            to={`/producto/${product.id}`}
            className="card-footer-item has-text-white"
          >
            Detalles
          </Link>
          <button onClick={() => addToCart(product)}>
            <AddToCartIcon />
          </button>
        </footer>
      </div>
    </div>
  );
}

export default CardContainer;

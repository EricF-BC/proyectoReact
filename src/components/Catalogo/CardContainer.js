import ImageList from "./Images";
import "./CardContainer.css";
import { useNavigate } from "react-router-dom";
import products from "../../datatest";

function CardContainer({}) {
  const navigate = useNavigate();

  return (
    <div className="card">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`)}
          className=""
        >
          <div className="card-image">
            <figure className="image is-4by3">
              {/* <ImageList images = {images}/> */}
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{product.title}</p>
              </div>
              <br />
            </div>

            <div className="content">{product.description}</div>
            <div className="content">{product.lot}</div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Save
            </a>
            <a href="#" className="card-footer-item">
              Edit
            </a>
          </footer>
        </div>
      ))}
    </div>
  );
}

export default CardContainer;

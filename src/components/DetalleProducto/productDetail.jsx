import "react-rater/lib/react-rater.css";
import "./productDetail.css";
import addToCart from "../../pages/cart.jsx"
import { useCart } from "../../hooks/useCart";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = ({ product }) => {
  const { addToCart} = useCart()
  const [inputValue, setInputValue] = useState('1');
  const [cart, setCart] = useState({});

  const handleChange = (event) => {
    setInputValue(event.target.value);
    let productQuantity = { ...product, quantity: parseInt(inputValue) };
    setCart(productQuantity)
  };
  
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <div className="columns">
              <div className="column is-one-fifth"></div>
              <div className="column">
                <figure className="image is-3by2">
                  <img
                    className="custom-size-image"
                    src={product.image}
                    alt=""
                  />
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
                <h1 className="title is-3 has-text-weight-bold">
                  {product.title}
                </h1>
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
                  <span className="is-size-6 ">
                    {" "}
                    Cantidad Disponible: {product.lot}{" "}
                  </span>
                </div>
                <div className="block">
                  <span className="is-size-6 "> {product.description} </span>
                </div>

                  <div className="block">
                  <div className="column is-paddingless is-one-quarter">
                    <div className="control ">
                      <input
                        className="input"
                        value = {inputValue}
                        type="number"
                        min = "1"
                        max={product.lot}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-fullwidth is-dark">
                      Comprar
                    </button>
                  </div>
                </div>
                <div className="control">
                  <button className="button is-fullwidth" onClick={() => addToCart(product)}>
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
};

export default ProductDetail;

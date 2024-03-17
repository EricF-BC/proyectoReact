import React from "react";
import "bulma/css/bulma.min.css"; 
import CheckoutProduct from "./checkoutProduct";

function CheckoutView(cart) {
    console.log(cart)
    const obtenerTotalCompra = () => {
    let preciosMultiplicados = 0;
    let total = 0;

    for (let arrayKey in cart) {
      if (cart.hasOwnProperty(arrayKey)) {
        const arrayProducto = cart[arrayKey];
        console.log(arrayProducto);
        arrayProducto.forEach((producto) => {
          preciosMultiplicados = producto.price * producto.quantity;
          total = total + preciosMultiplicados;
        });
      }
    }
    return total;
  };

  const total = obtenerTotalCompra();
  const totalRedondeado = total.toFixed(2);

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          <h2 className="title is-4">Resumen de la Compra</h2>
          {cart.cart.map((item) => (
            <CheckoutProduct key={item.key} product={item} />
          ))}

          <div className="box">
            <h2 className="title is-5">Total a pagar: ${totalRedondeado}</h2>
          </div>
          <div className="has-text-centered">
            <button className="button is-primary">Pagar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutView;

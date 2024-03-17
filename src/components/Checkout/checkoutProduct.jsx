import React from "react";
import "bulma/css/bulma.min.css"; // Importar el CSS de Bulma

function CheckoutProduct(product) {
   const producto = product.product;
   return (   
  <div className="box">
    <div className="columns is-vcentered">
      <div className="column is-narrow">
        <img
          src={producto.image}
          alt={producto.title}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div className="column">
        <p>
          <strong>Nombre:</strong> {producto.title}
        </p>
        <p>
          <strong>Precio:</strong> ${producto.price}
        </p>
        <p>
          <strong>Cantidad:</strong> {producto.quantity}
        </p>
        <p>
          <strong>Total Producto:</strong> {producto.quantity * producto.price}
        </p>
      </div>
    </div>
 
  </div>
  );

}

export default CheckoutProduct;

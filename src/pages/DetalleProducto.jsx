
import "react-rater/lib/react-rater.css";
import  ProductDetail from "../components/DetalleProducto/productDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productList from "../datatest";

const DetailPage = ({}) => {
    const { productoId } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
      const productObject = productList.find((producto) => producto.id === parseInt(productoId));
      setProduct(productObject);
      
    }, [productoId]);   
    
    return (
        <div>
        {product ? (
          <ProductDetail product={product} />
        ) : (
          <p>Cargando producto...</p>
        )}
      </div>
    )
}

export default DetailPage;

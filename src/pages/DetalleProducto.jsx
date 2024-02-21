
import "react-rater/lib/react-rater.css";
import  ProductDetail from "../components/DetalleProducto/productDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../datatest";


const DetailPage = ({}) => {
    let { productId } = useParams();
    const [product, setProduct] = useState(null);
    console.log(product);
    useEffect(() => {
      const productData = products.find((p) => p.id === parseInt(productId));
      setProduct(productData);
    }, [productId]);   
    
    
    return (
        <div>
        {product ? (
          <ProductDetail
            product={product}
            onAddToCart={() => {
              /* Funcion Futura */
            }}
          />
        ) : (
          <p>Cargando producto...</p>
        )}
      </div>
    )
}

export default DetailPage;

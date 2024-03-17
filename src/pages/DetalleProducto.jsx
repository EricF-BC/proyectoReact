import "react-rater/lib/react-rater.css";
import ProductDetail from "../components/DetalleProducto/productDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { getDoc, doc } from "firebase/firestore";

const DetailPage = ({}) => {
  const { productoId } = useParams();
  const [productFinal, setProduct] = useState(null);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const getProduct = async (productoId) => {
      try {
        const itemsCollectionRef = doc(db, "Items", productoId);
        const data = await getDoc(itemsCollectionRef);
        if (data.exists()) {
          setProduct({ id: data.id, ...data.data() });
        } else {
          console.log("No se encontró el producto!");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setFlag(false);
      }
    };

    getProduct(productoId);
  }, [productoId]);

  return (
    <div>
      {flag ? (
        <p>Cargando producto...</p>
      ) : productFinal ? (
        <ProductDetail product={productFinal} />
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default DetailPage;

import "react-rater/lib/react-rater.css";
import ProductDetail from "../components/DetalleProducto/productDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const DetailPage = ({}) => {
  const { productoId } = useParams();
  const [itemList, setItemList] = useState([]);
  const itemsCollectionRef = collection(db, "Items");
  const [productFinal, setProduct] = useState(null);

  const getItemList = async () => {
    const data = await getDocs(itemsCollectionRef);

    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),  
      id: doc.id,
    }));

    setItemList(filteredData);
  }; 

  const getItemObject = async () => {
    const productObject = itemList.find(
      (pr) => pr.id === productoId
    );
    setProduct(productObject);
  };

  useEffect(() => {
    getItemList();
  }, [productoId]);


  useEffect(() => {
    if (itemList.length > 0) {
      getItemObject();
    }
  }, [itemList]);



  return (
    <div>
      {productFinal ? (
        <ProductDetail product={productFinal} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default DetailPage;

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import CardContainer from "./CardContainer";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [itemList, setItemList] = useState([]);

  const getItemList = async (itemsCollectionRef) => {
    const data = await getDocs(itemsCollectionRef);

    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setItemList(filteredData);
  };

  const getItemCategory = async (category, itemsCollectionRef) => {
    const data = await getDocs(
      query(itemsCollectionRef, where("category", "==", category))
    );

    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setItemList(filteredData);
  };

  useEffect(() => {
    const itemsCollectionRef = collection(db, "Items");
    if (categoryId) {
      getItemCategory(categoryId, itemsCollectionRef);
    } else {
      getItemList(itemsCollectionRef);
    }
  }, [[categoryId]]);

  return (
    <div className="container">
      <div className="columns is-multiline is-desktop is-mobile">
        {itemList.map((item) => (
          <CardContainer key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

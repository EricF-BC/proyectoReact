import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {db} from "../../config/firebase";
import {collection, getDocs } from "firebase/firestore";
import CardContainer from "./CardContainer";


const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [itemList , setItemList ] = useState([]);

  const itemsCollectionRef = collection(db, "Items");

  const getItemList = async ()=>{

    const data = await getDocs(itemsCollectionRef);

    const filteredData = data.docs.map( (doc)=>({
        ...doc.data(),
        id:doc.id
    }))
   
    setItemList(filteredData);
}


const getItemCategory = async (category)=>{

  const data = await getDocs(itemsCollectionRef);

  const filteredData = data.docs.map( (doc)=>({
      ...doc.data(),
      id:doc.id
  }))
  .filter((item) => item.category === category);

  setItemList(filteredData);
}

useEffect(()=>{
  if (categoryId){
    getItemCategory(categoryId);
  }else{
    getItemList();
  }
}, [[categoryId]])


    return (
      <div className="container">
        <div className="columns is-multiline is-desktop is-mobile">
        {itemList.map((item) => (
            <CardContainer key ={item.id} product={item} />
          ))}

        </div>
      </div>
    );
  };
  
  export default ItemListContainer;
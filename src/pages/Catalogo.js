import CardContainer from "../components/Catalogo/CardContainer";
import { useEffect, useState } from "react";
import {db} from "../config/firebase";
import {collection, getDocs } from "firebase/firestore";



function Catalogo() {
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

  useEffect(()=>{   

      getItemList();
  }, [])

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-multiline is-desktop is-mobile">

          {itemList.map((item) => (
            <CardContainer key ={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogo;

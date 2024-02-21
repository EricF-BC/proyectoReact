import CardContainer from "../components/Catalogo/CardContainer";
import searchImages from "./../api";
import { useState } from "react";
import React, { useEffect } from "react";

function Catalogo() {
  // const [images, setImages] = useState([]);

  // useEffect = async () => {
  //   let resultado = await searchImages("furniture");
  //   setImages(resultado);
  // }



  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <CardContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogo;

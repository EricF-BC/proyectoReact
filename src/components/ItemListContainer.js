import React from 'react';

const ItemListContainer = (props) => {
  const colorPrincipal = 'purple';

  const estilo = {
    color: colorPrincipal,
    fontSize: '20px',
    fontWeight: 'bold'
  };

    return (
      <div style={estilo}>
        <p>{props.greeting}</p>
      </div>
    );
  };
  
  export default ItemListContainer;
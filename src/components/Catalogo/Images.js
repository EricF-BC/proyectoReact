//LISTING -->
function ImageList({images}){
		// Crea un arreglo de las imagenes renderizadas.
		// la funcion map funcionara como un recorredor del arreglo 
    const renderedImages = images.map((image) => {
				// retorna un image show con cada una de las imagenes obtenidas
        return <img src ={image.id.urls.small} image={image.alt_description} />;
    });

        return(
            <div>{renderedImages}</div>
        )
}

export default ImageList;
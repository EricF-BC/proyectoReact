import axios from "axios";

                // (term)  "Termino" o mejor dicho
                // variable que contiene la palabra clave
                // que se buscara en la api.				
const searchImages = async (term)=>{
		//await para "esperar el proceso" y que no se llegue al return antes
		//de obtener una respuesta por parte de la url.
		//Es necesario que la funcion tenga el "async" para poder utilizar el await.
                                    // LINK DE LA PAGINA DEL API
    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
                            // AQUI INGRESAR TU ACCESS-KEY
            Authorization:"Client-ID nX6PTbq8Uj1vzLxD_j9DRJKqew52QpePKugL_315tDA"
        },
        params:{
            // Lo que se va a buscar EJ: "Dogs" (en ingles funca mas)
            query: term
        }
    })
	//No es necesario traer todo el resultado, mejor traer directamente
	//En este caso data.results trae el array de imagenes.
    console.log(response.data.results)
    return response.data.results;
    
}

export default searchImages;
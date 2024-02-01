import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bulma/css/bulma.css";
import logorec from "./img/logorec.png"

function App(){
    const msj= "Hola, Esto sirve?"
    return (
        <div>
        <NavBar img = {logorec}/>

        <ItemListContainer greeting={msj}/>

        </div>
    )
}



export default App;
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Catalogo from "./pages/Catalogo";
import "bulma/css/bulma.css";
import DetailPage from "./pages/DetalleProducto";


function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Catalogo />} />
                    <Route path="/:categoryId" element={<Catalogo/>}/>
                    <Route path="producto/:productoId" element={<DetailPage />}/>
                </Route>
                <Route path="*" element={<h1>404 no encontrado</h1>} />
            </Routes>
        </BrowserRouter>
    )
}



export default App;
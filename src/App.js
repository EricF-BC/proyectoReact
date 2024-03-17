import { BrowserRouter, Route , Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Catalogo from "./pages/Catalogo";
import "bulma/css/bulma.css";
import { CartProvider } from "./pages/cart";
import DetailPage from "./pages/DetalleProducto";
import Checkout from "./pages/Checkout";

function App(){
    return (
        <BrowserRouter>
        <CartProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Catalogo />} />
                    <Route path="/:categoryId" element={<Catalogo/>}/>
                    <Route path="producto/:productoId" element={<DetailPage />}/>
                    <Route path="checkout" element={<Checkout/>}/>
                </Route>
                <Route path="*" element={<h1>404 no encontrado</h1>} />
            </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}



export default App;
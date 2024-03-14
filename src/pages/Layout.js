import { Outlet } from "react-router-dom";
import  NavBar from "../components/Nav/NavBar";
import logorec from "../img/logorec.png"


function Layout(){
    return (
        <div>    
            <NavBar img = {logorec}/>
            <Outlet/>
        </div>
        
    )
}

export default Layout;
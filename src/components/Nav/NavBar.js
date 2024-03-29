import { Cart } from "../Cart/Cart";
import {Link} from "react-router-dom";

function NavBar({ img }) {
  return (
    <div>
      <nav
        className="navbar is-black has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/">
            <img src={img} width="180" alt="Logo" style={{ height: "100%"}} />
          </Link>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">

            <Link to="/Mesa" className="navbar-item">Mesa</Link>

            <Link to="/Sofa" className="navbar-item">Sofa</Link>

            <Link to="/Muebles" className="navbar-item">Muebles</Link>
          </div>

          <div className="navbar-end ">
          <Cart/>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default NavBar;

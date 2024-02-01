import CartWidget from "./CartWidget";

function NavBar({ img }) {
  return (
    <div>
      <nav
        className="navbar is-black has-shadow "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a>
            <img src={img} width="180" alt="Logo" style={{ height: "100%"}} />
          </a>
          <a
            role="button"
            class="navbar-burger"
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

            <a className="navbar-item">Catalogo Muebles</a>

            <a className="navbar-item">Hogar</a>

            <a className="navbar-item">Oficinas</a>

          </div>

          <div className="navbar-end ">
          <CartWidget/>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default NavBar;

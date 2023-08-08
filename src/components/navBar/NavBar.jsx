import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <h3>Julietta Beauty</h3>
          <div className="container-fluid"> 
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-2">
                <il>
                <button className="btn" type="submit">Perfumes</button>
                </il>
                <li className="nav-item">
                <button className="btn" type="submit">Herramientas</button>
                </li>
                <li className="nav-item">
                <button className="btn" type="submit">Cosmetica</button>
                </li>
            </ul>
          </div>
         </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar



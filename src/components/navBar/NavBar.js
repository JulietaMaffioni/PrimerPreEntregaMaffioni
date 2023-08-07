import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <h3>Julietta Beauty</h3>
          <div class="container-fluid"> 
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-2">
                <il>
                <button class="btn" type="submit">Sobre nosotros</button>
                </il>
                <li class="nav-item">
                <button class="btn" type="submit">Productos</button>
                </li>
                <li class="nav-item">
                <button class="btn" type="submit">Contacto</button>
                </li>
            </ul>
          </div>
         </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar



import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <img src="" alt="logo" />
          <h3>LO SCUGNIZO NAPOLETANO</h3>
        </div>
        <div className="header-right">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/aboutus">AboutUs</NavLink>
                <NavLink to="/Contatti">Contatti</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;

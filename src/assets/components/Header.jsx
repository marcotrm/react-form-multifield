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
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contatti"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Contatti
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;

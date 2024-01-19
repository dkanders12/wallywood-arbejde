import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <nav>
      <h1>WALLYWOOD</h1>
      <ul className="list">
        <li className="listOrder">
          <NavLink className="fix" to="/">
            Home
          </NavLink>
        </li>
        <li className="listOrder">
          <NavLink className="fix" to="Plakater">
            Plakater
          </NavLink>
        </li>
        <li className="listOrder">
          <NavLink className="fix" to="OmOs">
            Om Os
          </NavLink>
        </li>
        <li className="listOrder">
          <NavLink className="fix" to="Kontakt">
            Kontakt
          </NavLink>
        </li>
        <li className="listOrder">
          <NavLink className="fix" to="Login">
            Login
          </NavLink>
        </li>
      </ul>
      <i className="fa-solid fa-cart-shopping"></i>
    </nav>
  );
};

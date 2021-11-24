import React from "react";
import logo from "../../images/logos/logo.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import './style.css';

// Components
import Auth from '../../utils/auth'
import Cart from '../Cart/index'

function ShopNav() {
  const navigate = useNavigate();
  console.log(window.location.pathname )
  const userNav = () => {
    if (Auth.loggedIn()) {
      return (
          <ul>
            <li>
              <Link
                onClick={() => navigate("/orderhistory")}
                className="center"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                onClick={()=> Auth.logout()}
                className="center"
              >
                Log out
              </Link>
            </li>
          </ul>
      )
    } else {
      return (
        <ul>
          <li>
            <Link
              onClick={() => navigate("/login")}
              to="our-story"
              className="center"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              onClick={() => navigate("/signup")}
              className="center"
              to="contact"
            >
              Signup
            </Link>
          </li>
        </ul>
      )
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-wrap">
        <div className="logo">
          <Link onClick={() => navigate("/")}>
            <img src={logo} className="imglogo linkto" alt="logo" />
          </Link>
          <Link className="linkto" onClick={() => navigate("/")}>
            <p>
              Newna <span>Bros.</span>
            </p>
          </Link>
        </div>
      <div className="shop-link-wrap">
      {userNav()}
      <Cart/>
      </div>
      </div>
    </nav>
  );
}

export default ShopNav;

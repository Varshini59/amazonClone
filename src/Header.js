import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import userEvent from "@testing-library/user-event";
import { auth } from "./firebase";

function Header() {
  const [state, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (state.user) auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXas4ns1Hq7mz7IiXAdjMmrFyPvO42Bs0_tyYfbffJoS2WLP3r3ICpcpX0eWh4yGxLaGQ&usqp=CAU"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!state.user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {state.user.email}
            </span>
            <Link to="/login">
              <span className="header__optionLineTwo">
                {state.user ? "Sign Out" : "Sign In"}
              </span>
            </Link>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__basketOption">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

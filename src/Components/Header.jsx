import React, { useState } from "react";
import Logo from "../Images/Logo.png";
import icon from "../Images/icon.png";
import { Link } from "react-router-dom";
import "../../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const changeCred = () => {
    //  if(login==="Login"){
    //   setLogin("Logout");
    //  }else{
    //   setLogin("Login");
    //  }
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };

  /**
   * ! SUBSCRIBING TO THE STORE BY USING useSelector hook...
   * !we are subscribing because we want to read data from cartSlice and want to show that data in header i.e we want to show the length of items   which is  present in cartSlice at icon section of header...
   */
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="links">
          {/* <a href="">Home</a> */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/grocery">Grocery</Link>
          <h4>Online Status : {onlineStatus ? "✅" : "🔴"}</h4>
          {/* <a href="">About</a>
          <a href="">Contact</a> */}
        </div>
        <div className="cartIcon">
          <Link to="/cart"><img src={icon} /></Link>
          <span>{cartItems.length}</span>
        </div>
        <div className="loginSection">
          <button className="searchButton" onClick={changeCred}>
            {login}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

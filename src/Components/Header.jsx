import React, {useState}from "react";
import Logo from "../Images/Logo.png";
import icon from "../Images/icon.png";
import {Link} from 'react-router-dom';
import "../../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [login,setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const changeCred = () => {
    //  if(login==="Login"){
    //   setLogin("Logout");
    //  }else{
    //   setLogin("Login");
    //  }
    login==="Login" ? setLogin("Logout") :setLogin("Login");
  }
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
          <h4>Online Status : {onlineStatus?"✅": "🔴"}</h4>
          {/* <a href="">About</a>
          <a href="">Contact</a> */}
        </div>
        <div className="cartIcon">
          <img src={icon} />
        </div>
        <div className="loginSection">
          <button className="searchButton" onClick={changeCred}>{login}</button>
        </div>
      </div>
    </>
  );
};

export default Header;

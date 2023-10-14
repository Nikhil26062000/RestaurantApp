import React, { useState } from "react";
import Logo2 from "../Images/Logo2.png";
// import icon from "../Images/icon.png";
import { Link } from "react-router-dom";
import "../../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import HelpIcon from '@mui/icons-material/Help';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

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
  // console.log(cartItems);

  return (
    <>
    
      <div className="flex justify-between p-4 shadow-xl">
  
        <div className="headerLogo">  
          <img className="w-16" src={Logo2} />
        </div>

        {/* //links */}
        <div className="headerRight">
          
          <Link className="links" to="/"><HomeIcon />Home</Link>
          <Link className="links" to="/search"><SearchOutlinedIcon />Search</Link>
          <Link className="links" to="/offer"> <LocalOfferIcon /> Offers</Link>
          {/* <Link className="links" to="/contact"> <HelpIcon /> Help</Link> */}
          {/* <Link to="/grocery">Grocery</Link> */}
          
       
            <Link className="links" to="/cart"><ShoppingCartIcon/>{cartItems.length} items </Link>
           
         
          {/* <h4>Online Status : {onlineStatus ? "✅" : "🔴"}</h4> */}
          {/* <button  >
            {login}
          </button> */}
          {/* <Button className="bg-yellow-500" onClick={changeCred}>{login}</Button> */}
          <Button className="btnnew" variant="contained" onClick={changeCred}>{login}</Button>
         
        </div>

        
       

      
        
      </div>
    </>
  );
};

export default Header;

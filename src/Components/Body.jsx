import React, { useEffect, useState } from "react";
import Card, { withOpenLabel } from "./Card";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import Contact from "./Contact";
import Banner from "./Banner";
import Button from '@mui/material/Button';
import DishTypes from './DishTypes';
import RoomIcon from '@mui/icons-material/Room';
import Shimmer from './Shimmer';






const Body = () => {
  const [list, setList] = useState([]);
  const [templist, setTempList] = useState([]);
  const [banner, setBanner] = useState([]);
  const [banner2 , setBanner2] = useState([]);
  const [search,setSearch] = useState("");

  const CardOpen = withOpenLabel(Card);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    // );

    const data = await fetch(
     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING"
    );


    const json = await data.json();
    // console.log(json);
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
    // );
    setList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
    );
    // console.log(list);
    setTempList( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(templist);
    setBanner(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    setBanner2(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);
    // console.log(banner2); 
  };
 
  const filterOut = () => {
      const temp = list.filter((eleVal) => {
      return eleVal.info.avgRating > 4;
    });
  //  console.log(temp);
   setTempList(temp);
  };

  const searchItem = (event) => {
    // console.log(event.target.value);
      setSearch(event.target.value);
      setTempList(list);
  }
  
  const searchItems =()=>{
      const filterItem = list.filter((eleVal) => {
      return eleVal.info.name.toLowerCase().includes(search.toLowerCase());
    })
    setTempList(filterItem);
    // setList(filterItem);
    console.log(templist);
    
    // setList(templist);
    // console.log("Below is main list item");
    // console.log(list);
    
    
  }

  //Getting onlineStatus of browser----------------------------------------------------------------
  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false){
    return <h1>Oppps..!!!! 😠 Your browser is not online</h1>
  }
  

  //setting functionality of All button...
  const showAllItems=()=>{
    setTempList(list);
    console.log(templist);
  }
 
  const showPureVeg=()=>{
    const temp = list.filter((eleVal) => {
      return eleVal.info.veg ==true;
    });
    // console.log("Pure veg");
    setTempList(temp);
    // console.log(templist);
  }

  const showPureNonVeg=()=>{
    const temp = list.filter((eleVal) => {
      return eleVal.info.veg !=true;
    });
    // console.log("Pure veg");
    setTempList(temp);
    console.log(templist);
  }

  const rangeFirst = () =>{
    const temp = list.filter((eleVal) => {
      const cost = eleVal.info.costForTwo
      return cost.slice(1,4) > 300 && cost.slice(1,4) < 600
    });
    setTempList(temp);
  }

  const lessThanSix=()=>{
    const temp = list.filter((eleVal) => {
      const cost = eleVal.info.costForTwo
      return cost.slice(1,4) < 600
    });
    setTempList(temp);
  }

  
 if(templist && templist.length==0){
   return <Shimmer />
 }
 
  return (
    <div>
    <div className="bodyCont">
      <div className="container">
        <input type="text" placeholder="Search Your Food" onChange={searchItem}/>
        <Button variant="contained"  type="submit" className="searchButton" onClick={searchItems}>
          Search
        </Button>

        <Button variant="contained" type="submit" className="searchButton2" onClick={filterOut}>
          TOP RATED RESTORANT
        </Button>
      </div>

      
      <h2 className="BannerTop">Best Offers for You 💯</h2>
      <Banner data={banner} />

      <h2 className="BannerTop">What's on your mind ❓</h2>
      <DishTypes data={banner2} />

      <h2 className="BannerTop">Top restaurant chains Near You <RoomIcon className="marklogo"/></h2>

      <div className="category-buttons">
        <Button className="btncat" variant="outlined" onClick={showAllItems}>ALL</Button>
        <Button className="btncat"  variant="outlined" onClick={showPureVeg}>PURE VEG 💚</Button>
        <Button className="btncat"  variant="outlined" onClick={showPureNonVeg}>Non-Veg 🔴</Button>
        <Button className="btncat"  variant="outlined" onClick={rangeFirst}>💰 Rs.300 - Rs.600</Button>
        <Button className="btncat" variant="outlined" onClick={lessThanSix}>💰 Less than 600</Button>
      </div>
  
      <div className="cardContaineer">
        {templist && templist.map((ele) => {
          return <Link to={"/restaurant/"+ele.info.id} key={ele.info.id}>
          <Card resData={ele} />
          {/* {
            ele.info.isOpen ? <CardOpen resData={ele}/> : <Card resData={ele} />
          } */}
          </Link>;
        })}
      </div> 

      
    </div>

    {/* <Footer /> */}
    </div>
  );
};

export default Body;

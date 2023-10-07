import React, { useEffect, useState } from "react";
import Card, { withOpenLabel } from "./Card";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import Contact from "./Contact";
import Banner from "./Banner";



const Body = () => {
  const [list, setList] = useState([]);
  const [templist, setTempList] = useState([]);
  const [banner, setBanner] = useState([]);
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
    console.log(json);
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(list);
    setTempList( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(templist);
    setBanner(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
  };
 
  const filterOut = () => {
      const temp = list.filter((eleVal) => {
      return eleVal.info.avgRating > 4;
    });
   console.log(temp);
   setTempList(temp);
  };

  const searchItem = (event) => {
    // console.log(event.target.value);
      setSearch(event.target.value);
  }
  
  const searchItems =()=>{
      const filterItem = list.filter((eleVal) => {
      return eleVal.info.toLowerCase().includes(search.toLowerCase());
    })
    setTempList(filterItem);
    // setList(filterItem);
    // console.log(templist);
    
    // setList(templist);
    // console.log("Below is main list item");
    // console.log(list);
    
    
  }

  //Getting onlineStatus of browser----------------------------------------------------------------
  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false){
    return <h1>Oppps..!!!! 😠 Your browser is not online</h1>
  }
  
 
  
// if(templist===null) return <Contact />
 
  return (
    <div className="w-11/12 m-auto">
      <div className="container">
        <input type="text" placeholder="Search Your Food" onChange={searchItem}/>
        <button type="submit" className="searchButton" onClick={searchItems}>
          Search
        </button>

        <button className="searchButton2" onClick={filterOut}>
          TOP RATED RESTORANT
        </button>
      </div>

      
      
      <Banner data={banner} />
  
      <div className="cardContaineer">
        {templist && templist.map((ele) => {
          return <Link to={"/restaurant/"+ele.info.id} key={ele.info.id}>
          {/* <Card resData={ele} /> */}
          {
            ele.info.isOpen ? <CardOpen resData={ele}/> : <Card resData={ele} />
          }
          </Link>;
        })}
      </div> 
    </div>
  );
};

export default Body;

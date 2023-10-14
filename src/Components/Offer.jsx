import React, { useState, useEffect } from "react";
import Card, { withOpenLabel } from "./Card";
import { Link } from 'react-router-dom';
import Shimmer from "./Shimmer";

const Offer = () => {
  // const [list3, setList3] = useState([]);
  const [templist3, setTempList3] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // setList3(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // console.log(list);
    setTempList3(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(templist3);

    // console.log(banner2);
  };

  const CardOpen = withOpenLabel(Card);

  if(templist3 && templist3.length==0){
    return <Shimmer />
  }
  return (
    <div className="offers">
      <div className="cardContaineer">
        {templist3 &&
          templist3.map((ele) => {
            return (
              <Link to={"/restaurant/" + ele.info.id} key={ele.info.id}>
                {/* <Card resData={ele} /> */}
                {
            ele.info.aggregatedDiscountInfoV3 ? <CardOpen resData={ele} lableName={ele.info.aggregatedDiscountInfoV3.header}/> : <CardOpen resData={ele} lableName="NO OFFERS AVAILABLE"/>
          }
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Offer;

import React, { useState } from "react";

import { useParams } from "react-router-dom";
import OffersCard from "./OffersCard";
import LongListsCards from "./LongListsCards";
import useMenuList from "../utils/useMenuList";

const DetailedCard = () => {
  const { resid } = useParams();

  // const [istrue, setIsTrue] = useState(true);
  const [showIndex, setShowIndex] = useState();

  const showChanges = (id) => {
    setShowIndex(id);
  };

  //Getting data from custom hook useMenuList in which data has been fetched by real API
  const resInfo = useMenuList(resid);

  // if (resInfo === null) return <About />;
  if (resInfo === null) return <h1>Loading Keep paitence 😄</h1>;

  const { name, cuisines, avgRating, areaName, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const offerCard =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  const longList = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div>
      <div className="cardCont1">
        <div className="boxLeft">
          <h1>{name}</h1>
          <h5>{cuisines}</h5>
          <h3>{areaName}</h3>
        </div>
        <div className="boxRight">
          <h3>{"⭐" + avgRating}</h3>
          <h6>500k+</h6>
        </div>
      </div>

      <div className="cardCont2">
        <div className="info">
          <h4>🕥 25min</h4>
          <h3>💰 {costForTwoMessage}</h3>
        </div>

        <div className="offerCards">
          {offerCard &&
            offerCard.map((ele, index) => {
              return (
                <OffersCard
                  key={index}
                  header={ele.info.header}
                  description={ele.info.description}
                  couponcode={ele.info.couponCode}
                />
              );
            })}
        </div>
      </div>

      <div className="cardCont3">
        {longList &&
          longList.map((ele, index) => {
            if (index === 0) {
              return null;
            } else {
              return (
                <LongListsCards
                  key={index}
                  totalData={ele}
                  id={index}
                  istrue={index == showIndex ? false : true}
                  icon={index == showIndex ? "⏫" : "🔽"}
                  accordionFunction={() => showChanges(index)}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default DetailedCard;

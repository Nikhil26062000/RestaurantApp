import React, { useState } from "react";
import InnerItem from "./InnerItem";
// import { useDispatch } from "react-redux";

const LongListsCards = ({ totalData, accordionFunction, istrue, icon }) => {
  const [innerItemArray, setInnerItemArray] = useState(
    totalData?.card?.card?.itemCards
  );

  const { title, type, name } = totalData?.card?.card;

  return (
    <div className="m-2 text-center">
      <div className="mx-52 flex justify-evenly border border-b-4 border-t-0 border-l-0 border-r-0 p-2 text-left place-items-center">
        <div className="w-96">
          <h3>{title || name || type}</h3>
        </div>
        <div className="w-auto">
          <button
            className="p-2 border border-black shadow-orange-200"
            onClick={accordionFunction}
          >
            {icon}
          </button>
        </div>
      </div>

      {innerItemArray &&
        innerItemArray.map((ele, index) => {
          if (istrue === true) {
            return "";
          } else {
            return <InnerItem key={index} id={index} allData={ele} />;
          }
        })}
    </div>
  );
};

export default LongListsCards;

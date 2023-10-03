import React, { useState } from "react";
import InnerItem from "./InnerItem";

const LongListsCards = ({ totalData ,accordionFunction , istrue , icon}) => {
  const [innerItemArray, setInnerItemArray] = useState(totalData?.card?.card?.itemCards);
  
  
  const { title, type, name } = totalData?.card?.card;

 
  return (
    <div>
      <div className="cardDesign">
        <h3>{title || name || type}</h3>
        <button onClick={accordionFunction}>{icon}</button>
      </div>
      
     {innerItemArray && innerItemArray.map((ele,index)=>{
       if(istrue===true){
        return "";
       }else{
        return <InnerItem key={index} id={index} allData={ele}/>
       }
        
     })}
      
    </div>
  );
};

export default LongListsCards;

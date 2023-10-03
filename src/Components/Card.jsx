import React from "react";


const Card = ({resData}) => {
  
  const {name,cuisines,avgRating,cloudinaryImageId} = resData.info;


  
  return (
    <div className="card">
      <img
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + cloudinaryImageId}
        alt=""
      />

      <h4 className="name">{name}</h4>
      <h5>{cuisines.join(", ")} </h5>
      <h5 className="rating">{"⭐"+avgRating}</h5>
      <button className="orderButton">Order Now</button>
      
     
    </div>
  );
};

export default Card;

//Higher order Component-----
//A higher order component is a javascript function which takes a component as a parameter and returns a component...
// Below this i m gonna create  a higher order component named withOpenedLabel...

export const withOpenLabel = () =>{
  return ({resData})=>{
    return (
      <div className="mt-10">
        <label className="absolute">
          <h4 className="w-20 rounded-lg px-1 py-2 text-center mt-2 relative bottom-8 left-3 bg-black text-white shadow-sm shadow-slate-700">OPENED</h4>
        </label> 
        <Card resData={resData}/>
      </div>
    )
  }  
}

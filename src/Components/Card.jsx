import React from "react";



const Card = ({resData}) => {
  // console.log(resData);

 
  
  const {name,cuisines,avgRating,cloudinaryImageId,costForTwo} = resData.info;

  // cuisines = cuisines.slice(0,3);


  
  return (
    <div className="card">
      <img
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + cloudinaryImageId}
        alt=""
      />

      <h4 className="name">{name.length < 15 ?name : name.slice(0,15) + "..."}</h4>
      <h5 className="cuisines">{cuisines.slice(0,4).join(", ")} </h5>
      <h6 className={resData.info.veg ? "text-green-600" : "text-red-600"}> {resData.info.veg ? "💚 VEG" : "🔴 Non Veg"}</h6>
      <h4>⭐⭐⭐⭐ {avgRating}</h4>
      
     
      <div className="priceBox">
          
          
          <h4 className="price">{costForTwo} </h4>
          <button className="orderButton">Order Now</button>
          
      </div>

      
      
      
     
    </div>
  );
};

export default Card;

//Higher order Component-----
//A higher order component is a javascript function which takes a component as a parameter and returns a component...
// Below this i m gonna create  a higher order component named withOpenedLabel...

export const withOpenLabel = () =>{
  return ({resData,lableName})=>{

   return lableName === "NO OFFERS AVAILABLE" ? 
      <div className="mt-10 opacity-50">
        <label className="absolute">
          <h4 className="w-full rounded-lg px-1 py-2 text-center mt-2 relative bottom-8 left-3 bg-green-800 text-white shadow-sm shadow-slate-700">{lableName}</h4>
        </label> 
        <Card resData={resData}/>
      </div> :  <div className="mt-10">
        <label className="absolute">
          <h4 className="w-full rounded-lg px-1 py-2 text-center mt-2 relative bottom-8 left-3 bg-green-800 text-white shadow-lg shadow-slate-700 ">{lableName}</h4>
        </label> 
        <Card resData={resData}/>
      </div>
    
  }  
}

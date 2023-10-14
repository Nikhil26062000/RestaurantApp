
import { useDispatch } from 'react-redux';
import React from 'react';
import Logo from "../Images/Logo.png";

import { addItem } from '../utils/cartSlice';


const InnerItem = ({allData}) => {
    // console.log(allData);

    const {imageId,name,price,defaultPrice} = allData?.card?.info;

    const tempItem = {imageId,name,price,defaultPrice} 

    const dispatch = useDispatch();
    
   /**
    * ! BELOW IS THE FUNCTION WHICH WILL DISPATCH AN ACTION WHICH CALL A FUNCTION AND THAT FUNCTION UPDATES OUR cartSlice...
    * 
    * !Here we are not subscribed to cartSlice because here we dont want to read data from store ...
    * 
    * ! Here we want to write data in store we want to call an action to the store so that's y we are using useDispatch() hook...
    * 
    */

  
   const handleAddItem = (item) => {
      //dispatching an action
      dispatch(addItem(item));
    }
  return (
    <div className='w-3/5 ml-72 mt-6 p-2 border border-black flex justify-between place-items-center shadow-lg rounded-md'>
        <div className=" mx-5 p-2 text-left ">
        <h4>🥘 {name}</h4>
        <h4>💰 {price/100 ? price/100 : defaultPrice/100}</h4>
        </div>

        <div className='mr-20 hover:border border-black shadow-lg rounded-lg'>
          <img className="w-32 p-2 m-2" src={imageId ? "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + imageId : Logo}  />
          <button className="w-20 border rounded-md bg-yellow-400 text-white" onClick={()=>handleAddItem(tempItem)}>Add</button>
        </div>
      
    </div>
  )
}

export default InnerItem
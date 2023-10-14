import React,{useEffect, useState} from 'react'
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Logo from "../Images/Logo.png";
import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';
import { removeItem,increaseQuantity,decreaseQuantity,deductPrice,addingPrice } from '../utils/cartSlice';

const CartItemList = ({ele}) => {

  const {name,imageId,price,defaultPrice,quantity} =ele;

   const dispatch = useDispatch();

   const addQuantity =(name,price)=>{
    dispatch(increaseQuantity(name))
    dispatch(addingPrice(price))
    
   }

   const deleteQuantity = (name,price) =>{
    dispatch(decreaseQuantity(name))
    dispatch(deductPrice(price))
   }

   const cancelItem = (name,price)=>{
    dispatch(removeItem(name))
    dispatch(deductPrice(price))
    
   
   }
    
  

  return (
    <div className="fetchOrderList">
                  <div className="fetchOrderSec1">
                    <img
                      className="w-16 rounded-lg"
                      src={
                        imageId
                          ? "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" +
                            imageId
                          : Logo
                      }
                    />
                  </div>

                  <div className="fetchOrderSec2">
                    <h2 className="text-lg font-bold">
                     
                      {name.slice(0, 20)}...
                    </h2>
                    <h4 className="text-green-800">
                      Rs.
                      {price / 100 ||
                        defaultPrice / 100}
                    </h4>
                  </div>

                  <div className="fetchOrderIncDec">
                    <Button className="dltBtn" onClick={()=>deleteQuantity(name,price||defaultPrice)}>
                      <DeleteIcon />
                    </Button>
                    <input
                      className="w-20 mr-1 text-center outline-none"
                      type="number"
                      placeholder="1"
                      value={quantity}
                     
                    
                      
                    
                      readOnly
                      />
                    <Button className="addBtn" onClick={()=>addQuantity(name,price||defaultPrice)}>
                      <AddIcon />
                    </Button>
                  </div>

                  <div className="fetchOrderDltbutton">
                    <Button
                      variant="outlined"
                      type="submit"
                      className="btnDelete"
                      onClick = {()=>cancelItem(name,price*quantity||defaultPrice*quantity)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
  )
}

export default CartItemList
import React from 'react'
import {Logo2} from '../Images/Logo2.png'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {clearCart} from '../utils/cartSlice'

const OrderPlaced = () => {
    

    const dispatch = useDispatch();


    const clearWholeCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="w-full lg:w-5/12 h-screen m-auto flex flex-col mt-28 place-items-center">
         
            {/* <img src={Logo2} alt="emptycart" className="w-[320px]" /> */}
          
        
          <p className="text-2xl font-bold text-yellow-500 mt-8">THANKS FOR CHOOSING US</p>
          <p className="text-base mt-2 w-7/12 text-center text-black">PLEASE vISIT AGAIN</p>
          <Link to="/">
            <button className="px-5 py-2 rounded-sm text-white font-semibold bg-yellow-400 mt-8" onClick={clearWholeCart} >
              SHOP MORE
            </button>
          </Link>
        </div>
      );
}

export default OrderPlaced
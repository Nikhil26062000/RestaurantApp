import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const item = useSelector((store) => store.cart.items);
  console.log(item);

  let sum = 0;

  item.map((ele) => {
    // sum = sum + ele?.card?.info?.price ? ele?.card?.info?.price : ele?.card?.info?.defaultPrice ;
    if (ele.card.info.price) {
      sum = sum + ele?.card?.info?.price;
    } else {
      sum = sum + ele?.card?.info?.defaultPrice;
    }
  });

  
  return (
    <div>
      <div className="w-3/4 ml-48  bg-slate-200 flex justify-between rounded-lg shadow-sm ">
        <div className="ml-16 mt-5 mb-5">
          <h3 className="p-2 capitalize">Total Items : {item.length}</h3>
          <h3 className="p-2 text-green-800 capitalize">
            total Price : 💰 {sum / 100}
          </h3>
        </div>

        <div>
          <button className="mr-16  mt-6 mb-5 p-4 place-items-center border border-black rounded-md  bg-green-600 text-white hover:bg-green-800">
            Place Order
          </button>
        </div>
      </div>

      <hr className="m-2 p-1  bg-black" />

      <div>
        <h2 className="text-center capitalize text-lg">Your Items</h2>
        {item.map((ele, index) => {
          return (
            <div
              key={index}
              id={index}
              className="w-3/5 bg-slate-200 border shadow-sm border-black rounded-lg ml-72 flex justify-between mt-2"
            >
              <div className="m-4">
                <h2>🥘 {ele?.card?.info?.name}</h2>
                <h4 className="text-green-800 px-3 pt-1">
                  {" "}
                  Rs.{" "}
                  {ele?.card?.info?.price / 100 ||
                    ele?.card?.info?.defaultPrice / 100}
                </h4>
              </div>

              <button className="m-6 place-items-center border border-black rounded-md px-4 bg-red-400 text-white hover: shadow-2xl hover:bg-red-500">
                Cancel
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;

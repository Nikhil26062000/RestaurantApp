import { useState,useEffect } from "react";

const useMenuList = (resid) => {
    
  const [resInfo, setResInfo] = useState(null);
  // const [arrayOfferCard, setArrayOfferCard] = useState(null);
  // const [longList, setLongList] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=" +
        resid
    );

    const json = await data.json();
    // console.log(json);
    setResInfo(json?.data);
    // setArrayOfferCard(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    // );
    // setLongList(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log(longList);
    // console.log(arrayOfferCard);
  };
    return resInfo;
}

export default useMenuList;
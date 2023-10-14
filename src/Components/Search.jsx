import React , {useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import DishTypes from  './DishTypes'
import Card from './Card'
import {Link} from 'react-router-dom'
import ShimmerSmall from './ShimmerSmall';

const Search = () => {

  const [list2, setList2] = useState([]);
  const [templist2, setTempList2] = useState([]);
  const [bannerNew2 , setBannerNew2] = useState([]);
  const [search2,setSearch2] = useState("");

  useEffect(() => {
    fetchData2();
  }, []);

  const fetchData2 = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    // );

    const data = await fetch(
     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
   
    setList2(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
    );

    setBannerNew2(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);

  };
 

  const searchItem2 = (event) => {
  
      setSearch2(event.target.value);
      // setTempList2(list2);
  }



  const searchItems =()=>{
    const filterItem = list2.filter((eleVal) => {
    return eleVal.info.name.toLowerCase().includes(search2.toLowerCase());
  })
  setTempList2(filterItem);

  console.log(templist2);
  

  
  
}

if(bannerNew2.length==0){
  return <ShimmerSmall />
}

  return (
    <div className="w-11/12 m-auto mt-4   ">
         <input className='mt-4 mb-4 ml-2' type="text" placeholder="Search Your Food" onChange={searchItem2}/>
          <Button variant="contained"  type="submit" className="searchButton" onClick={searchItems}>
          Search
         </Button>

         <h2 className="BannerTop">POPULAR CUISINESS</h2>
         <DishTypes data={bannerNew2} />

         <div className="cardContaineer">
          {templist2 && templist2.map((ele) => {
          return <Link to={"/restaurant/"+ele.info.id} key={ele.info.id}>
          <Card resData={ele} />
          {/* {
            ele.info.isOpen ? <CardOpen resData={ele}/> : <Card resData={ele} />
          } */}
          </Link>;
        })}
      </div> 
    </div>
  )
}

export default Search
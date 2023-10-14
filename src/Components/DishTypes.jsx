import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Banner({data}) {
    // console.log(data);
  var settings = {
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 1
  };
  return (
    <div>
    <Slider {...settings}>
    {data && data.map((ele)=> {
       return(
        <div key={ele.id} className="pt-6 px-2 outline-none rounded-full">
            <img className="w-28" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + ele.imageId} />
        </div>
       ) 
    })}
    </Slider>
    </div>
  );
}


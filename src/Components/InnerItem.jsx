import React from 'react'

const InnerItem = ({allData}) => {
    // console.log(allData?.card?.info?.name);

    // const {name ,price} = allData?.card?.info?.name;
  return (
    <div>
        <div className="innDiv">
        <h4>{allData?.card?.info?.name}</h4>
        <h4>{allData?.card?.info?.price}</h4>
        </div>
      
    </div>
  )
}

export default InnerItem
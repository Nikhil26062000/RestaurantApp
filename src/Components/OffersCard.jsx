import React from 'react'

const OffersCard = (props) => {
  return (
    <div className='offCard'>
       
        <h4>{props.header}</h4>
        <span className='price'>{props.description}</span>
        <h5 className='text-red-600 font-extrabold'>{props.couponcode}</h5>
       
        
    </div>
  )
}

export default OffersCard
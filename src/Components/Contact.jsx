import React from 'react'

const Contact = () => {
  return (
    <div className="mx-56 mt-5 px-10 pt-5 pb-5 flex justify-center  bg-blue-300">

      <h1>Contact Page</h1>

      <input className='m-2 p-2 w-64 border border-blue-500' type="text" placeholder="Name" />

      <input className='m-2 p-2 w-64 border border-blue-500' type="text" placeholder="Message" />

      <button type='submit' className='m-2 p-2 border border-blue-500 rounded-md w-20'>Submit</button>
    </div>
  )
}

export default Contact
import React from 'react'

const Button = (props) => {
  return (
    <button className='gradiant md:mt-0 mt-[186px] text-black 
    border-2 border-range3
    rounded-md md:px-4 px-4 md:ml-0 ml-2 py-2 lg:px-4 rounded  
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button
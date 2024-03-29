import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = () => {
  let navigate = useNavigate();
  const clicked = () => (
    navigate(`/contactus`)
  )
  return (
    <div className='w-full h-[20vh] flex justify-center items-center' id='contactus'>
      <button onClick={clicked} className='px-4 flex items-center glow-on-hover text-md sm:text-lg md:text-xl h-[70px] w-[200px] text-center justify-center'>Contact Us &nbsp;→</button>
    </div>
  )
}

export default Button
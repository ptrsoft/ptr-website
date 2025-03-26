import React from 'react'
import { useNavigate } from 'react-router-dom'

const GetStartedBtn = (prop) => {
  
  return (
    <button onClick={prop.onClick}  className="Rectangle8 relative cursor-pointer flex justify-start pl-6 items-center w-[190px] h-14 bg-neutral-800 rounded-full">
    <div className="GetStarted text-neutral-100 text-base font-semibold font-['Poppins'] uppercase leading-3">
       {prop.label}
        </div>
    <div className="absolute right-0 w-14 h-14 flex justify-center items-center bg-indigo-500 rounded-full">
        <img alt='arrow' src='Images/arrow.png'/>
    </div>
    </button>
  )
}

export default GetStartedBtn
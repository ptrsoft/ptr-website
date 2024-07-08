import React from 'react'

const TextBox = (prop) => {
  return (
    <div className=" px-[18px] flex flex-col gap-[0.4rem] py-[10px] bg-amber-100 rounded-lg">
    <div className="text-neutral-800 text-[1.3rem] font-semibold font-['Poppins'] capitalize leading-normal">{prop.h}</div>
    <div className="text-zinc-800 text-[0.8rem] font-medium font-['Poppins'] capitalize leading-normal">{prop.d}</div>
    </div>
  )
}

export default TextBox
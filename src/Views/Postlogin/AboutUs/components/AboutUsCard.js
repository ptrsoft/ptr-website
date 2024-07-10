import React from 'react'

const AboutUsCard = (prop) => {
  return (
   <>
   <div className="Group48097150 w-[23%] gap-5 flex flex-col items-center relative">
    <div className="Group141859 w-20 h-24">
        <img src={prop.image}/>
    </div>
    <div className="OurMission  text-black text-[1.2rem] font-bold font-['Poppins'] uppercase leading-none">{prop.label}</div>
    <div className="   text-center text-zinc-800 text-[0.8rem] font-normal font-['Poppins'] capitalize leading-normal">
       {prop.content} </div>
</div>
   </>
  )
}

export default AboutUsCard
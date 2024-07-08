import React from 'react'

const AboutUsCard = (prop) => {
  return (
   <>
   <div className="Group48097150 w-80 h-80 relative">
    <div className="Group141859 w-24 h-24 left-[111px] top-0 absolute">
        <img src={prop.image}/>
    </div>
    <div className="OurMission left-[75px] top-[132px] absolute text-black text-2xl font-bold font-['Poppins'] uppercase leading-none">{prop.label}</div>
    <div className=" w-80 h-36 left-0 top-[177px] absolute text-center text-zinc-800 text-base font-normal font-['Poppins'] capitalize leading-normal">
       {prop.content} </div>
</div>
   </>
  )
}

export default AboutUsCard
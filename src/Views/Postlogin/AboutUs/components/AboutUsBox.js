import React from 'react'

const AboutUsBox = (prop) => {
  return (
    <div class="w-[24%] gap-4 h-[6.91125rem] flex-shrink-0 rounded-[0.625rem] flex justify-start pl-[1rem] items-center border border-gray-400 bg-white">
  
  <img src={prop.icon}/>
  <div className='flex  flex-col'>
    <span className='text-[#202020] font-poppins text-[1.375rem] font-semibold leading-normal'>{prop.label}</span>
    <span className='text-[#3D3D3D] font-poppins text-[0.75rem] font-medium leading-[1.5625rem]'>{prop.para}</span>
  </div>
</div>

  )
}

export default AboutUsBox
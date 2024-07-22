import React from 'react'
import TextBox from './TextBox'

const WhyChooseUse = () => {
  return (
   
<section className='flex flex-col md:flex-row justify-between'>

<div className='w-full md:w-1/2 flex gap-6 p-6 flex-col bg-white md:pl-[10%] md:pr-[110px]'>
  <div>
    <span className="text-indigo-500 text-4xl font-bold capitalize leading-10">Why</span> <span className="text-stone-900 text-4xl font-bold capitalize leading-10">Choose Us?</span>
  </div>

  <div className='w-full gap-6 flex flex-col'>
    <TextBox h="Complete Flexibility" d="Our open applications and on-demand engineering teams provide unparalleled flexibility."/>
    <TextBox h="Highest Quality" d="Built upon most modern cloud native architecture, delivering highest level of reliability and security and changeability."/>
    <TextBox h="Own Application Space" d="Our Apps are single tenant ensuring that your Apps and Data is always private."/>
    <TextBox h="Certified Resources" d="Hire from a pool of certified professionals, ensuring you get top-quality talent."/>
    <TextBox h="Instant Availability" d="Scale your team instantly to meet project demands without lengthy hiring processes."/>
    <TextBox h="Outcome-Driven Billing" d="Enjoy a predictable and transparent billing model focused on delivering value."/>
  </div>

  {/* <button className="text-neutral-100 text-lg font-bold uppercase w-60 h-14 bg-indigo-500 rounded-full">get more details</button> */}
</div>

<div className='w-full md:w-1/2 flex justify-center items-center p-6 bg-[#D4FADA] md:pr-[10%]'>
  <img alt='Choose Us' className='max-w-full h-auto' src='Images/homechooseus.png'/>
</div>

</section>
  )
}

export default WhyChooseUse
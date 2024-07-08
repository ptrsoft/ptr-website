import React from 'react'

const Process = () => {
  return (
    <>
  <section className='pad-container pt-[143px] pb-[57px] flex flex-col items-center gap-[20px] bg-[#FEF4F9]'>

<div className="TheIntelligenceRevolution"><span className="text-indigo-500 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Our Software Development </span><span className="text-neutral-800 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Process</span></div>

<div className="text-center text-neutral-900 text-2xl font-medium font-['Poppins'] capitalize leading-loose">At PTR Technology, for every use case that we develop,we follow a robust and efficient software development process designed to deliver high-quality solutions tailored to meet our clients' unique needs. Our approach combines industry best practices with innovative techniques to ensure that every usecases are reliable, scalable, and secure.Here follows a typical UseCase cycle.</div>

<img src='Images/process.png'/>
  </section>


<section className='bg-[#8ECAE6] flex flex-col pb-[39px] justify-center items-center gap-[40px] pt-[80px] pad-container'>
    <div className='flex  flex-col items-center gap-2'>
<div ><span className="text-indigo-500 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Comprehensive Operations </span><span className="text-neutral-800 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Management</span></div>
<div className=" text-center text-neutral-900 text-2xl font-medium font-['Poppins'] capitalize leading-10">Our platform includes a full operations management suite, streamlining maintenance and updates.</div>
</div>
<img src='Images/Operations.png'/>
</section>

<section className='pad-container flex flex-col items-center gap-[40px] pt-[80px] pb-[80px]'>
    <div className='flex flex-col items-center gap-[3px]'>
<div className="TheIntelligenceRevolution"><span className="text-indigo-500 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Cutting-Edge </span><span className="text-neutral-800 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Technology</span></div>
<div className=" text-center text-neutral-900 text-2xl font-medium font-['Poppins'] capitalize leading-10">Built on the latest technologies, our backend platform ensures robust performance and security.<br/>Explore few simple and some robust architecture that we follow to develop a simple App or a complete cloudnative enterprise product.</div>
</div>

<button className=" w-36 h-11 bg-indigo-500 rounded-full text-neutral-100 text-base font-bold font-['Poppins'] uppercase leading-3">Read More</button>
</section>
</>
  )
}

export default Process
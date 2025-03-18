import React from 'react'
import TextBox from './TextBox'

const WhyChooseUse = () => {
  return (
   
<section className='flex flex-col md:flex-row justify-between' style={{minHeight:"100vh", }}>

<div className='w-full md:w-1/2 flex gap-6 p-6 flex-col justify-center bg-white md:pl-[10%] md:pr-[110px]'>
  <div>
    <span className="text-indigo-500 text-4xl font-bold capitalize leading-10">Why</span> <span className="text-stone-900 text-4xl font-bold capitalize leading-10">Choose Us?</span>
  </div>

  <div className='w-full gap-6 flex flex-col'>
    <TextBox h="Proven Expertise" d="Experience in production ready AI-native applications, agri-tech, and supply chain innovation."/>
    <TextBox h="End-to-End Support" d="From development to deployment, we provide comprehensive technical assistance and continuous optimization."/>
    <TextBox h="Scalable Solutions" d=" Our AI-driven platform adapts to your business needs, ensuring long-term growth and efficiency."/>
    <TextBox h="Uncompromising Quality" d=" Rigorous testing and validation processes guarantee exceptional product reliability and performance."/>
     
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
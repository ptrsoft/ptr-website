import React from 'react'

import image1 from "../../../../Assets/Images/AIEngeneer.png"
import image2 from "../../../../Assets/Images/MLEngeneer.png"

import { useNavigate } from 'react-router-dom'
const AINativecapabilities = () => {
  return (
    <div id='AI-Native-Capabilities' className='space-container global_padding'>
<h2 className='font-[poppins] text-center font-bold text-[48px] leading-[70px] tracking-normal capitalize'>
    AI-Native  <span style={{color:"#666AE5"}}>Capabilities</span></h2>



<div  className='grid mt-10 items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6'>

<div>
    <img src={image1} alt="" />
</div>

<ServiceCard bg="#ABCBCD"  Navigate="/AI-powered-automation" icon="icons/buttonone.svg" title={"AI-Powered Automation"} subtitle={"Automate complex workflows & decision-making processes with cutting-edge AI systems that streamline operations and enhance business intelligence."} />
<ServiceCard bg="#D1D6E8" Navigate="/real-time-insights" icon="icons/buttontwo.svg" title={"AI-Driven Analytics"} subtitle={"Transform raw data into actionable insights with our machine learning solutions designed for real-world applications and predictive analytics."} />
<ServiceCard bg="#D1D6E8" Navigate="/AI-integrations" icon="icons/buttonthree.svg" title={"AI Integrations"} subtitle={"Connect AI capabilities with your current infrastructure for improved efficiency without disruptive changes to your existing systems."} />
<ServiceCard bg="#EABFD4" Navigate="/custom-AI-models" icon="icons/buttonfour.svg" title={"Custom AI Models"} subtitle={"Custom AI and ML models built to address your specific business challenges and opportunities with tailored solutions for your industry."} />
   <div>
    <img src={image2} alt="" />
</div>



</div>



    </div>
  )
}

export default AINativecapabilities



 

const ServiceCard = ({ icon, title, subtitle ,bg , Navigate }) => {
    const navigate = useNavigate()
    return (
      <div className={`bg-[${bg}] rounded-xl p-6  text-center max-w-sm mx-auto shadow-md transition-all duration-300 hover:-translate-y-2`}>
      {/* Icon */}
      <div className="flex bg-white w-[75px] h-[70px] items-center rounded-md m-auto justify-center mb-4">
      <img src={icon} alt="" />
      </div>
  
  
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#000000] mb-2">{title}</h2>
  
      {/* Subtitle */}
      <p className="text-base text-[#414141] mb-6">
      {subtitle}
      </p>
 
        <button onClick={()=> navigate(Navigate)}  className="read_more_btn accordian_read_more_btn">
              Read More
            </button>
    </div>
    );
  };
  
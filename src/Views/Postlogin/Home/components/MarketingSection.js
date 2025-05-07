import React from 'react'
import { ArrowDown , Sparkles} from 'lucide-react'
import { useNavigate } from 'react-router-dom';

import marketingGirlImage from "../../../../Assets/Images/marketing.png"
import leftImg from "../../../../Assets/Images/Supply chain svg image.svg"




const ServiceCard = ({ icon, title, subtitle ,bg , navigateTo }) => {
  return (
   <div style={{background:bg}} className={`rounded-xl p-4 lg:p-6 text-center max-w-sm mx-auto hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}>
   {/* Icon */}
   <div className="flex bg-white w-[60px] h-[55px] lg:w-[75px] lg:h-[70px] items-center rounded-md m-auto justify-center mb-4">
   <img src={icon} alt="" className="w-[30px] lg:w-[40px]" />
   </div>

   {/* Title */}
   <h2 className="text-xl lg:text-2xl font-bold text-[#000000] mb-2">{title}</h2>

   {/* Subtitle */}
   <p className="text-sm lg:text-base text-[#414141] mb-4 lg:mb-6 flex-grow">
   {subtitle}
   </p>

   {/* Button */}
   <div className="flex justify-center mt-auto">
     <button onClick={() => window.open(navigateTo, "_blank")} className="bg-[#666AE5] text-white font-medium py-1 lg:py-2 px-4 lg:px-6 rounded-lg shadow hover:bg-gray-100 text-sm lg:text-base">
       Visit App
     </button>
   </div>
 </div>
 );
};

const MarketingSection = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <div id='AI-Native' className='space-container global_padding bg-[#FFFFFF]'>

<div className='min-h-[90vh] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0'>
{/* left  */}
<div className='w-full lg:w-[50%] relative flex-col flex justify-center items-center lg:items-start'> 

<img className='mb-3 w-full lg:w-[430px] mx-auto' src={leftImg} alt="" />

  <div className='bg-[#674FA31A] flex items-center gap-2 pl-4 pr-4 pt-2 pb-2 rounded-2xl mb-3'>
    <Sparkles className='text-[#666AE5] w-5 h-5'/>
    <span className='text-[#666AE5] font-bold text-[14px] lg:text-[24px] leading-[18px] lg:leading-[30px] whitespace-nowrap'>Revolutionizing Supply Chain Management</span>
  </div>
  <h2 className='mb-3 font-[poppins] font-bold text-[2rem] lg:text-[2.7rem] leading-[40px] lg:leading-[70px] tracking-normal capitalize text-center lg:text-left'>Our <span style={{color:"#666AE5"}}>AI-Native Ecommerce</span> & <span style={{color:"#666AE5"}}>Supply Chain</span> Platform</h2>

  <div onClick={() => handleScroll('ai-native-products')} className="bg-[#666AE51A] animate-bounce rounded-full flex items-center justify-center w-[50px] h-[50px] absolute cursor-pointer bottom-[-50px] lg:bottom-0 left-1/2 transform -translate-x-1/2">
    <ArrowDown className="w-9 h-9 text-[#666AE5]" />
  </div>
</div>

{/* right  */}
<div className='w-full lg:w-[50%] flex justify-center lg:justify-end items-center'>
<img className='w-full lg:w-[90%] mt-8 lg:mt-0' src={marketingGirlImage} alt="" />
</div>
</div>

{/* products */}
<div id='ai-native-products' className='grid pt-[70px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>  
  <ServiceCard bg="#B0C3C4" navigateTo="/" icon="Images/Procurement.png" title={"Procurement"} subtitle={"Streamlining procurement processes to ensure timely and cost-effective sourcing."} />
  <ServiceCard bg="#D1D6E8" navigateTo="https://inventory.promodeagro.com" icon="Images/Inventry.png" title={"Inventory"} subtitle={"Optimizing inventory management for accuracy, efficiency, and real-time control"} />
  <ServiceCard bg="#EABFD4" navigateTo="https://www.promodeagro.com" icon="Images/ecommerce.png" title={"Ecommerce"} subtitle={"Empowering ecommerce operations with seamless integration and customer-focused solutions."} />
  <ServiceCard bg="#A7D6EB" navigateTo="/" icon="Images/Logistics.png" title={"Logistics"} subtitle={"Enhancing logistics operations for faster delivery, better tracking, and end-to-end visibility."} />
  <ServiceCard bg="#C0E8F3" navigateTo="/" icon="Images/CRM.png" title={"CRM"} subtitle={"Driving customer relationships with smart CRM solutions that boost engagement and retention."} />
  <ServiceCard bg="#EABFD4" navigateTo="/" icon="Images/POS.png" title={"POS"} subtitle={"Streamlining transactions with advanced POS systems to boost sales and service."} />
</div>
</div>
     </>
  )
}

export default MarketingSection


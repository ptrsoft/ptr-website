import React from 'react'

// styling
import "../../../Assets/Styles/pages/AboutUs/index.css"

// importing images
import aboutUsBanner from "../../../Assets/Images/AboutBanner.png"
import MissionIcon from "../../../Assets/Images/MissionIcon.svg"
import VissionIcon from "../../../Assets/Images/VissionIcon.svg"
import CostumberIcon from "../../../Assets/Images/CostumberIcon.svg"
import Integrity from "../../../Assets/Images/IntegrityIcon.svg"
import paperPlane from "../../../Assets/Images/paperPlane.png"
import aboutUsAside from "../../../Assets/Images/aboutUsAside.png" 

import OurTeam from "../../../Assets/Images/OurTeam.png"
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import {Helmet} from "react-helmet-async"

import SpecializationIcon from "../../../Assets/Images/SpecializationIcon.svg"
import inovationIcon from "../../../Assets/Images/inovationIcon.svg"
import ExecellenceIcon from "../../../Assets/Images/Execellence.svg"

const AboutUs = () => {
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate('/contact-us')
  }
  return (
    <>
     <Helmet>
<title>About Us</title>
<meta name='description' content='we offer a suite of software solutions designed to meet the diverse needs of modern businesses'/>
<link rel="canonical" href="/about-us" />
    </Helmet>
    <section className='space-container global_padding'>

<div className="about_us_banner">
  <img src={aboutUsBanner} alt="unable to load image check your internet connection" />
</div>

<p className="about_us_para"> 
Welcome to PTR Technologies, where innovation meets simplicity. As a forward-thinking AI company, we transform businesses through AI solutions that streamline processes, boost productivity, and drive growth.
</p>

<Grid className='about_us_card_grid'  rowGap={4}   container >
  <Grid xs={12} md={6} lg={3}>
    <div className='about_us_card'>
   <img className='about_us_card_icon' src={MissionIcon} alt="unable to load image check your internet connection" />
   <h2 className='about_us_card_heading'>Our Mission</h2>
   <p className='about_us_card_para'>Empowering businesses through intelligent, AI-first solutions </p>
   </div>
  
  </Grid>
  <Grid xs={12} md={6} lg={3}>
  <div className='about_us_card'>
   <img className='about_us_card_icon' src={VissionIcon} alt="unable to load image check your internet connection" />
   <h2 className='about_us_card_heading'>Our Vision</h2>
   <p className='about_us_card_para'> Our AI-first solutions powers every business decision and unlocks limitless possibilities. </p>
   </div>
  </Grid>
  <Grid xs={12} md={6} lg={3}>
  <div className='about_us_card'>
   <img className='about_us_card_icon' src={CostumberIcon} alt="unable to load image check your internet connection" />
   <h2 className='about_us_card_heading'>What we do</h2>
   <p className='about_us_card_para '> We create AI-native apps that learn and adapt, delivering automation, integration, and real-time insights for businesses.</p>
   </div>
  </Grid>
  <Grid xs={12} md={6} lg={3}>
  <div className='about_us_card'>
   <img className='about_us_card_icon' src={Integrity} alt="unable to load image check your internet connection" />
   <h2 className='about_us_card_heading'>Integrity</h2>
   <p className='about_us_card_para'>We believe in doing business the right way. Honesty, transparency, and ethical practices guide all our actions.</p>
   </div>
  </Grid>
</Grid>
</section>

<div className="space-container global_padding technologies_sec">
      <div className="technologies_sec_content">
        <h1 className='technologies_sec_content_heading'>PTR Technologies</h1>

<div className='flex items-center mt-4 mb-2 gap-4'>
   <img className='w-[70px]' src={SpecializationIcon} alt="" />  <span className='text-[22px] font-[700] uppercase'>Specialization</span>
</div>

         <p className='technologies_sec_content_para'>
         We specialize in developing AI-native solutions that harness the power of Large Language Models, Machine Learning, and Cloud technologies to transform business operations. Our innovative products feature state-of-the-art natural language processing, automated decision-making systems, and intelligent workflow optimization. With a foundation built on cutting-edge AI research and enterprise-grade engineering, we deliver scalable, secure, and customizable solutions that provide immediate business value while adapting to evolving market demands.
        </p>

        <div className='flex items-center mt-4 mb-2 gap-4'>
   <img className='w-[70px]' src={inovationIcon} alt="" />  <span className='text-[22px] font-[700] uppercase'>Innovation</span>
</div>

         <p className='technologies_sec_content_para'>
         We maintain an unwavering focus on innovation through dedicated research and development, keeping our products at the forefront of technology.
        </p>

        <div className='flex items-center mt-4 mb-2 gap-4'>
   <img className='w-[70px]' src={ExecellenceIcon} alt="" />  <span className='text-[22px] font-[700] uppercase'>Excellence</span>
</div>

         <p className='technologies_sec_content_para'>
         We pursue excellence across all areas of our business—from creating innovative products to delivering outstanding customer support.
        </p>
      </div>
      <div className="technologies_sec_content_img">
        <img className='womenImg' src={aboutUsAside} alt="unable to load image check your internet connection" />
      </div>
    </div>

<section style={{background:"#FFF"}} className="space-container global_padding our_projects_sec">
<h2 className='our_projects_sec_heading'>Our Products At <span style={{color:"#666AE5"}}>PTR Technologies</span>, we offer a suite of software solutions designed to meet the diverse needs of modern businesses :
</h2>

<div id='ai-native-products' className='grid pt-[70px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6'>  
             <ServiceCard bg="#ABCBCD" navigateTo="/" icon="Images/Procurement.png" title={"Procurement"} subtitle={"Streamlining procurement processes to ensure timely and cost-effective sourcing."} />
             <ServiceCard bg="#D1D6E8" navigateTo="https://inventory.promodeagro.com" icon="Images/Inventry.png" title={"Inventory"} subtitle={"Optimizing inventory management for accuracy, efficiency, and real-time control"} />
             <ServiceCard bg="#EABFD4" navigateTo="https://www.promodeagro.com" icon="Images/ecommerce.png" title={"Ecommerce"} subtitle={"Empowering ecommerce operations with seamless integration and customer-focused solutions."} />
             <ServiceCard bg="#A7D6EB" navigateTo="/" icon="Images/Logistics.png" title={"Logistics"} subtitle={"Enhancing logistics operations for faster delivery, better tracking, and end-to-end visibility."} />
             <ServiceCard bg="#C0E8F3" navigateTo="/" icon="Images/CRM.png" title={"CRM"} subtitle={"Driving customer relationships with smart CRM solutions that boost engagement and retention."} />
             <ServiceCard bg="#EABFD4" navigateTo="/" icon="Images/POS.png" title={"POS"} subtitle={"Streamlining transactions with advanced POS systems to boost sales and service."} />
</div>

</section>

<section className="space-container global_padding growth_section">
  <img className='growth_section_img' src={paperPlane} alt="" />
  <h2 className='growth_section_heading'>Accelerate your growth with PTR Technologies</h2>
  <button onClick={handleNavigate} className="growth_section_btn">
  get started now
  </button>
</section>  

<section style={{background:"#FFF"}} className='space-container global_padding ourteam_sec'>

<div className="ourteam_sec_left">
  <h2 className='ourteam_sec_left_heading'>Our Team</h2>

  <p className='ourteam_sec_left_para'>Our team is composed of passionate professionals who are experts in their respective fields. From software engineers and designers to customer support specialists, each member of our team plays a crucial role in our success. We foster a collaborative and inclusive work environment where creativity and innovation thrive.
<br /> <br />
We are always looking for talented individuals who share our passion for technology and innovation. If you're looking to make an impact and be part of a dynamic team, check out our career opportunities here.
<br /><br />
We'd love to hear from you! Whether you have a question about our products, need support, or just want to say hello, feel free to reach out to us.</p>

<button onClick={handleNavigate} className='ourteam_sec_left_btn'>
  Get started now
</button>
</div>
<div className="ourTeam_devider"></div>
<div className="ourteam_sec_right">
  <img src={OurTeam} alt="unable to load image" />
</div>

</section>

    </>
  )
}

export default AboutUs

const ServiceCard = ({ icon, title, subtitle, bg, navigateTo }) => {
  return (
   <div style={{background:bg}} className={`rounded-xl p-6 text-center max-w-sm mx-auto hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col h-full`}>
   <div className="flex bg-white w-[75px] h-[70px] items-center rounded-md m-auto justify-center mb-4">
   <img src={icon} alt="" />
   </div>

   <h2 className="text-2xl font-bold text-[#000000] mb-2">{title}</h2>

   <p className="text-base text-[#414141] mb-6 flex-grow">
   {subtitle}
   </p>

   <div className="flex justify-center mt-auto">
     <button onClick={() => window.open(navigateTo, "_blank")}
className="bg-[#666AE5] text-white font-medium py-2 px-6 rounded-lg shadowhover:bg-gray-100">
       Visit App
     </button>
   </div>
 </div>
 );
};


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
import Procurement from "../../../Assets/Images/Procurement.png"

import OurTeam from "../../../Assets/Images/OurTeam.png"
import { Grid  } from '@mui/material'
import AboutUsCard from './components/AboutUsCard'
import AboutUsBox from './components/AboutUsBox'
import { useNavigate } from 'react-router-dom'

import {Helmet} from "react-helmet-async"
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

   
{/* <h2 className='about_us_bread'>About Us</h2> */}

{/* banner */}

<div className="about_us_banner">
  <img src={aboutUsBanner} alt="unable to load image check your internet connection" />
</div>

{/* about us para */}
<p className="about_us_para"> 
Welcome to PTR Technologies, where innovation meets simplicity. As a forward-thinking AI company, we transform businesses through AI solutions that streamline processes, boost productivity, and drive growth.
</p>

{/* abot us cards */}

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

{/* second section start */}
<div className="space-container global_padding technologies_sec">
      <div className="technologies_sec_content">
        <h1 className='technologies_sec_content_heading'>PTR Technologies</h1>
        <h2 className='technologies_sec_content_min_heading'>started with a simple yet powerful idea:</h2>
        <p className='technologies_sec_content_para'>
        to provide businesses with user-friendly software that simplifies their workflow and cater business changes rapidly. It emerged from a passion for technology and a deep understanding of the cloud native SAAS ecosystem. Our journey is driven by a commitment to excellence and a relentless pursuit of customer satisfaction.
        </p>

        <h3 className='technologies_sec_content_min_heading'>Our Values Innovation: </h3>
        <p className='technologies_sec_content_para'>
        We are committed to continuous improvement and innovation. We invest in research and development to ensure our products are always ahead of the curve.
        </p>
        <h3 className='technologies_sec_content_min_heading'>Excellence: </h3>
        <p className='technologies_sec_content_para'>
          
We strive for excellence in every aspect of our business, from product development to customer support.
        </p>
      </div>
      <div className="technologies_sec_content_img">
        <img className='womenImg' src={aboutUsAside} alt="unable to load image check your internet connection" />
      </div>
    </div>
{/* second section endz */}


{/* our projects sec start */}
<section style={{background:"#FFF"}} className="space-container global_padding our_projects_sec">
<h2 className='our_projects_sec_heading'>Our Products At <span style={{color:"#666AE5"}}>PTR Technologies</span>, we offer a suite of software solutions designed to meet the diverse needs of modern businesses :
</h2>

{/* projects cards grid */}


{/* products */}
<div id='ai-native-products' className='grid pt-[70px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6'>  
             <ServiceCard bg="#ABCBCD" icon="Images/Procurement.png" title={"Procurement"} subtitle={"Streamlining procurement processes to ensure timely and cost-effective sourcing."} />
             <ServiceCard bg="#D1D6E8" icon="Images/Inventry.png" title={"Inventory"} subtitle={"Optimizing inventory management for accuracy, efficiency, and real-time control"} />
             <ServiceCard bg="#EABFD4" icon="Images/ecommerce.png" title={"Ecommerce"} subtitle={"Empowering ecommerce operations with seamless integration and customer-focused solutions."} />
             <ServiceCard bg="#A7D6EB" icon="Images/Logistics.png" title={"Logistics"} subtitle={"Enhancing logistics operations for faster delivery, better tracking, and end-to-end visibility."} />
             <ServiceCard bg="#C0E8F3" icon="Images/CRM.png" title={"CRM"} subtitle={"Driving customer relationships with smart CRM solutions that boost engagement and retention."} />
             <ServiceCard bg="#A7D6EB" icon="Images/accounting.png" title={"Accounting"} subtitle={"Simplifying accounting processes with accurate, automated, and compliant financial management."} />
             <ServiceCard bg="#EABFD4" icon="Images/POS.png" title={"POS"} subtitle={"Streamlining transactions with advanced POS systems to boost sales and service."} />
             <ServiceCard bg="#D1D6E8" icon="Images/WhatsappEcommerce.png" title={"Whatsapp Commerce"} subtitle={"Driving sales and customer engagement through seamless WhatsApp Commerce solutions."} />
             <ServiceCard bg="#ABCBCD" icon="Images/SubscriptionManagement.png" title={"Subscriptions"} subtitle={"Simplifying customer subscriptions for seamless recurring services and billing."} />
             <ServiceCard bg="#ABCBCD" icon="Images/AssetManagement.png" title={"Asset Management"} subtitle={"Managing assets efficiently to maximize value, performance, and lifecycle control."} />
             <ServiceCard bg="#D1D6E8"  icon="Images/HRandPayroll.png" title={"HR & Payroll"} subtitle={"Streamlining workflows to boost productivity, collaboration, and efficiency."} />
             <ServiceCard bg="#EABFD4"  icon="Images/Workflow.png" title={"Workflow"} subtitle={"Simplifying HR and payroll processes with accurate, automated, and compliant solutions."} />
             </div>



</section>
{/* our projects sec ends */}


{/* Growth sec start */}
<section className="space-container global_padding growth_section">
  <img className='growth_section_img' src={paperPlane} alt="" />
  <h2 className='growth_section_heading'>Accelerate your growth with PTR Technologies</h2>
  <button onClick={handleNavigate} className="growth_section_btn">
  get started now
  </button>
</section>  
{/* Growth sec ends */}



{/* our team sec start */}
<section style={{background:"#FFF"}} className='space-container global_padding ourteam_sec'>

{/* left */}
<div className="ourteam_sec_left">
  <h2 className='ourteam_sec_left_heading'>Our Team</h2>

  <p className='ourteam_sec_left_para'>Our team is composed of passionate professionals who are experts in their respective fields. From software engineers and designers to customer support specialists, each member of our team plays a crucial role in our success. We foster a collaborative and inclusive work environment where creativity and innovation thrive.
<br /> <br />
We are always looking for talented individuals who share our passion for technology and innovation. If you’re looking to make an impact and be part of a dynamic team, check out our career opportunities here.
<br /><br />
We’d love to hear from you! Whether you have a question about our products, need support, or just want to say hello, feel free to reach out to us.</p>

<button onClick={handleNavigate} className='ourteam_sec_left_btn'>
  Get started now
  </button>
</div>
<div className="ourTeam_devider"></div>
{/* right */}
<div className="ourteam_sec_right">
  <img src={OurTeam} alt="unable to load image" />
</div>

</section>
{/* our team sec ends */}

    </>
  )
}

export default AboutUs




const ServiceCard = ({ icon, title, subtitle ,bg }) => {
  return (
    <div className={`bg-[${bg}] rounded-xl p-6 text-center max-w-sm mx-auto hover:shadow-lg`}>
    {/* Icon */}
    <div className="flex bg-white w-[75px] h-[70px] items-center rounded-md m-auto justify-center mb-4 ">
    <img src={icon} alt="" />
    </div>


    {/* Title */}
    <h2 className="text-2xl font-bold text-[#000000] mb-2">{title}</h2>

    {/* Subtitle */}
    <p className="text-base text-[#414141] mb-6">
    {subtitle}
    </p>

    {/* Buttons */}
    <div className="flex justify-center gap-4">
      <button className="bg-white text-gray-800 font-medium py-2 px-6 rounded-lg shadow hover:bg-gray-100">
        Preview
      </button>
      <button className="bg-[#666AE5] text-white font-medium py-2 px-6 rounded-lg shadow hover:bg-purple-800">
        Visit App
      </button>
    </div>
  </div>
  );
};


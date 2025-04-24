import React, { useRef, useState } from 'react'

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
import { Grid, Modal ,Box } from '@mui/material'
import AboutUsCard from './components/AboutUsCard'
import AboutUsBox from './components/AboutUsBox'
import { useNavigate } from 'react-router-dom'

import {Helmet} from "react-helmet-async"
import Slider from 'react-slick'

import SpecializationIcon from "../../../Assets/Images/SpecializationIcon.svg"
import inovationIcon from "../../../Assets/Images/inovationIcon.svg"
import ExecellenceIcon from "../../../Assets/Images/Execellence.svg"

import pos1 from "../../../Assets/Images/Pos Svg/01.svg"
import pos2 from "../../../Assets/Images/Pos Svg/02.svg"
import pos3 from "../../../Assets/Images/Pos Svg/03.svg"
import pos4 from "../../../Assets/Images/Pos Svg/04.svg"
import pos5 from "../../../Assets/Images/Pos Svg/05..svg"
import pos6 from "../../../Assets/Images/Pos Svg/06.svg"
import pos7 from "../../../Assets/Images/Pos Svg/07.svg"
import pos8 from "../../../Assets/Images/Pos Svg/08.svg"
import pos9 from "../../../Assets/Images/Pos Svg/09.svg"
import pos10 from "../../../Assets/Images/Pos Svg/10.svg"
import pos11 from "../../../Assets/Images/Pos Svg/11.svg"
import pos12 from "../../../Assets/Images/Pos Svg/12.svg"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{ ...style, display: "flex",color:"red", justifyContent:"center",alignItems:"center", width:"40px",height:"40px",borderRadius:"50%", background: "#666AE5" }}
    onClick={onClick}
  />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex",color:"red", justifyContent:"center",alignItems:"center", width:"40px",height:"40px",borderRadius:"50%", background: "#666AE5" }}
      onClick={onClick}
    />
  );
}



// The modal styles can be customized using the Box component
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  // height:"80%",
  bgcolor: 'white',
   boxShadow: 24,borderRadius:2,
  p: 4,
};

const AboutUs = () => {


    const sliderRef = useRef(null); // Use ref to access the slider instance
  
   const [procurement,setProcurement] = useState(false)
    const [accounting,setAccounting] = useState(false)
    const [inventory,setInventory] = useState(false)
   const [ecom,setEcom] = useState(false)
    const [pos,setPos] = useState(false)
  
    const settings = {
          dots: true, // Show dots below the slider
          infinite: true, // Infinite looping of images
          speed: 500, // Transition speed
          slidesToShow: 1, // Number of slides to show at once
          slidesToScroll: 1, // Number of slides to scroll at once
          autoplay: false, // Enable autoplay
          autoplaySpeed: 2000, // Time between each slide change
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          
        }
      
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
{/* second section endz */}


{/* our projects sec start */}
<section style={{background:"#FFF"}} className="space-container global_padding our_projects_sec">
<h2 className='our_projects_sec_heading'>Our Products At <span style={{color:"#666AE5"}}>PTR Technologies</span>, we offer a suite of software solutions designed to meet the diverse needs of modern businesses :
</h2>

{/* projects cards grid */}


{/* products */}
<div id='ai-native-products' className='grid pt-[70px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6'>  
             {/* <ServiceCard bg="#ABCBCD" icon="Images/Procurement.png" title={"Procurement"} subtitle={"Streamlining procurement processes to ensure timely and cost-effective sourcing."} />
             <ServiceCard bg="#D1D6E8" icon="Images/Inventry.png" title={"Inventory"} subtitle={"Optimizing inventory management for accuracy, efficiency, and real-time control"} />
             <ServiceCard bg="#EABFD4" icon="Images/ecommerce.png" title={"Ecommerce"} subtitle={"Empowering ecommerce operations with seamless integration and customer-focused solutions."} />
             <ServiceCard bg="#A7D6EB" icon="Images/Logistics.png" title={"Logistics"} subtitle={"Enhancing logistics operations for faster delivery, better tracking, and end-to-end visibility."} />
             <ServiceCard bg="#C0E8F3" icon="Images/CRM.png" title={"CRM"} subtitle={"Driving customer relationships with smart CRM solutions that boost engagement and retention."} /> */}
             {/* <ServiceCard bg="#A7D6EB" icon="Images/accounting.png" title={"Accounting"} subtitle={"Simplifying accounting processes with accurate, automated, and compliant financial management."} /> */}
             {/* <ServiceCard bg="#EABFD4" icon="Images/POS.png" title={"POS"} subtitle={"Streamlining transactions with advanced POS systems to boost sales and service."} /> */}
             {/* <ServiceCard bg="#D1D6E8" icon="Images/WhatsappEcommerce.png" title={"Whatsapp Commerce"} subtitle={"Driving sales and customer engagement through seamless WhatsApp Commerce solutions."} /> */}
             {/* <ServiceCard bg="#ABCBCD" icon="Images/SubscriptionManagement.png" title={"Subscriptions"} subtitle={"Simplifying customer subscriptions for seamless recurring services and billing."} /> */}
             {/* <ServiceCard bg="#ABCBCD" icon="Images/AssetManagement.png" title={"Asset Management"} subtitle={"Managing assets efficiently to maximize value, performance, and lifecycle control."} /> */}
             {/* <ServiceCard bg="#D1D6E8"  icon="Images/HRandPayroll.png" title={"HR & Payroll"} subtitle={"Streamlining workflows to boost productivity, collaboration, and efficiency."} /> */}
             {/* <ServiceCard bg="#EABFD4"  icon="Images/Workflow.png" title={"Workflow"} subtitle={"Simplifying HR and payroll processes with accurate, automated, and compliant solutions."} /> */}


             <ServiceCard bg="#ABCBCD" OnClick={()=> setProcurement(true)}navigateTo="/" icon="Images/Procurement.png" title={"Procurement"} subtitle={"Streamlining procurement processes to ensure timely and cost-effective sourcing."} />
             <ServiceCard  OnClick={()=> setInventory(true)} bg="#D1D6E8" navigateTo="https://inventory.promodeagro.com" icon="Images/Inventry.png" title={"Inventory"} subtitle={"Optimizing inventory management for accuracy, efficiency, and real-time control"} />
             <ServiceCard OnClick={()=> setEcom(true)} bg="#EABFD4" navigateTo="https://www.promodeagro.com" icon="Images/ecommerce.png" title={"Ecommerce"} subtitle={"Empowering ecommerce operations with seamless integration and customer-focused solutions."} />
             <ServiceCard   bg="#A7D6EB" navigateTo="/" icon="Images/Logistics.png" title={"Logistics"} subtitle={"Enhancing logistics operations for faster delivery, better tracking, and end-to-end visibility."} />
             <ServiceCard bg="#C0E8F3" navigateTo="/" icon="Images/CRM.png" title={"CRM"} subtitle={"Driving customer relationships with smart CRM solutions that boost engagement and retention."} />
             {/* <ServiceCard OnClick={()=> setAccounting(true)} bg="#A7D6EB" navigateTo="/" icon="Images/accounting.png" title={"Accounting"} subtitle={"Simplifying accounting processes with accurate, automated, and compliant financial management."} /> */}
             <ServiceCard OnClick={()=> setPos(true)} bg="#EABFD4" navigateTo="/" icon="Images/POS.png" title={"POS"} subtitle={"Streamlining transactions with advanced POS systems to boost sales and service."} />
             {/* <ServiceCard bg="#D1D6E8" navigateTo="/" icon="Images/WhatsappEcommerce.png" title={"Whatsapp Commerce"} subtitle={"Driving sales and customer engagement through seamless WhatsApp Commerce solutions."} /> */}
             {/* <ServiceCard bg="#ABCBCD" navigateTo="/" icon="Images/SubscriptionManagement.png" title={"Subscriptions"} subtitle={"Simplifying customer subscriptions for seamless recurring services and billing."} /> */}
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




 {/* Procurement Modal */}
 <Modal
        open={procurement}
        onClose={()=> setProcurement(false)}
 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>
          <div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setProcurement(false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

</div>
          <Slider  ref={sliderRef} {...settings}>
       
          <div>
             <img loading='lazy' src="https://images.promodeagro.com/Procurement/01.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img   loading='lazy'  src="https://images.promodeagro.com/Procurement/02.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>   
           <div>  
              <img   loading='lazy'   src="https://images.promodeagro.com/Procurement/03.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>   
           <div>  
              <img   loading='lazy'   src="https://images.promodeagro.com/Procurement/04.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>   
           <div>  
              <img   loading='lazy'   src="https://images.promodeagro.com/Procurement/05.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>   
           <div>  
              <img  loading='lazy'    src="https://images.promodeagro.com/Procurement/06.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
           <div>
             <img  loading='lazy' src="https://images.promodeagro.com/Procurement/07.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img  loading='lazy' src="https://images.promodeagro.com/Procurement/08.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Procurement/09.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
      
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Procurement/10.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Procurement/11.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img  loading='lazy' src="https://images.promodeagro.com/Procurement/12.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Procurement/13.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
      </Slider>

 
          </Box>

          
      </Modal>



   {/* inventory modal */}
  <Modal
        open={inventory}
        onClose={()=> setInventory(false)}
 
        aria-labelledby="modal-modal-title"         aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
            <div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setInventory(false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
   <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
 </svg>

 </div>
          <Slider  ref={sliderRef} {...settings}>
       
          
            <div>
              <img src="https://images.promodeagro.com/Inventory/Container%201%20Inventory.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          
            <div>
            <img src="https://images.promodeagro.com/Inventory/Container 2.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 3.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 4.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 5.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 6.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 7.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 8.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 9.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 10.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div>           
     </Slider>
         </Box>
     </Modal>   



      {/* Ecpmmerce modal  */}

  <Modal
        open={ecom}
        onClose={()=> setEcom(false)}
 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>
          <div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setEcom(false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
  <line x1="18" y1="6" x2="6" y2="18" />
     <line x1="6" y1="6" x2="18" y2="18" />
</svg>

</div>
           <Slider  ref={sliderRef} {...settings}>
     
        
            <div>
              <img loading='lazy' src="https://images.promodeagro.com/B2C/Home-page.svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
           </div>         
           <div>
              <img loading='lazy' src="https://images.promodeagro.com/B2C/Home-page (1).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
           </div>          
           <div>
              <img loading='lazy' src="https://images.promodeagro.com/B2C/Front-page.svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>         
  <div>
              <img loading='lazy' src="https://images.promodeagro.com/B2C/Bengali Vegetable page.svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
           </div>

       <div>
          <img loading='lazy' src="https://images.promodeagro.com/B2C/Bengali Homeneeds page.svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
       </div>

       <div>
          <img loading='lazy' src="https://images.promodeagro.com/B2C/Bengali Homeneeds page (1).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
       </div>
       <div>
          <img loading='lazy' src="https://images.promodeagro.com/B2C/Bengali Homeneeds page (2).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
       </div>
       <div>
          <img loading='lazy' src="https://images.promodeagro.com/B2C/Bengali Homeneeds page (3).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
       </div>
       <div>
          <img loading='lazy' src="https://images.promodeagro.com/B2C/Bengali Homeneeds page (4).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
       </div>

        
    </Slider>
    
          </Box>
       </Modal>

{/* accounting */}
  <Modal
        open={accounting}
        onClose={()=> setAccounting(false)}
 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>
<div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setAccounting(false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

</div>
          <Slider  ref={sliderRef} {...settings}>
       
          
           <div>
             <img  loading='lazy' src="https://images.promodeagro.com/Finance_and_management/01.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Finance_and_management/02.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Finance_and_management/03.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Finance_and_management/04.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Finance_and_management/05.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Finance_and_management/06.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Finance_and_management/07.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 

          
           
          
      </Slider>
    
          </Box>
      </Modal> 


{/* POS */}

<Modal
        open={pos}
        onClose={()=> setPos(false)}
 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>
          <div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setPos(false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

</div>
          <Slider  ref={sliderRef} {...settings}>
       
          
           <div>
             <img src={pos1} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos2} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos3} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos4} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos5} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos6} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos7} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos8} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>

          <div>
             <img src={pos9} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos10} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos11} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>

          <div>
             <img src={pos12} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>



                    
      </Slider>
    
          </Box>
      </Modal>

    </>
  )
}

export default AboutUs



const ServiceCard = ({ icon, title, subtitle ,bg , navigateTo , OnClick }) => {
  return (
   <div className={`bg-[${bg}] rounded-xl p-6 text-center max-w-sm mx-auto hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}>
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
     <button onClick={OnClick} className="bg-white text-gray-800 font-medium py-2 px-6 rounded-lg shadow hover:bg-gray-100">
       Preview
     </button>
     <button   onClick={() => window.open(navigateTo, "_blank")}
className="bg-[#666AE5] text-white font-medium py-2 px-6 rounded-lg shadowhover:bg-gray-100">
       Visit App
     </button>
   </div>
 </div>
 );
};


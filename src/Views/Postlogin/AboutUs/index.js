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
<h2 className='our_projects_sec_heading'>Our <span style={{color:"#666AE5"}}>AI Native Products</span> At PTR Technologies, we offer a suite of AI Native software solutions
</h2>

{/* projects cards grid */}
<div className="project_grid">

  <AboutUsCard icon={Procurement} label="Procurement" para="Streamlined Supply Management"/>
<AboutUsCard icon="Images/Inventry.png" label="Inventory" para="Optimized Stock Control"/>
<AboutUsCard label="POS" icon="Images/POS.png" para="Seamless Sales Transactions"/>
<AboutUsCard label="Ecommerce" icon="Images/ecommerce.png" para="Effortless Online Shopping"/>
<AboutUsCard label="Whatsapp Commerce" icon="Images/WhatsappEcommerce.png" para="Chat-Driven Shopping"/>
<AboutUsCard label="Logistics" icon="Images/Logistics.png" para="Efficient Delivery Management"/>
<AboutUsCard label="CRM" icon="Images/CRM.png" para="Customer Relationship Mastery"/>
<AboutUsCard label="Accounting" icon="Images/accounting.png" para="Integrated Financial Solutions"/>
<AboutUsCard label="Asset Management" icon="Images/AssetManagement.png" para="Efficient Asset Oversight"/>
<AboutUsCard label="HR & Payroll" icon="Images/HRandPayroll.png" para="Streamlined HR Operations"/>
<AboutUsCard label="Subscriptions" icon="Images/SubscriptionManagement.png" para="Efficient Subscription Handling"/>
<AboutUsCard label="Workflow" icon="Images/Workflow.png" para="Optimized Workflow Management"/>
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


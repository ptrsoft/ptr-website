import React from 'react'

// import architecture from 'Images/architecture.png'
// import architectureVector from "Images/ArchitectureVector.png'"
// import pinkXXX from 'Images/pinkXXX.png'

import simpleMobility from "../../../Assets/Images/simpleMobility.png"
import Azure from "../../../Assets/Images/Azure.png"
import pattern from "../../../Assets/Images/pattern.png"
import appServices from "../../../Assets/Images/appServices.png"




import "../../../Assets/Styles/pages/Architecture/index.scss"
import GetStartedBtn from '../../../Components/GetStartedBtn'

const Architecture = () => {
  return (
    <div className='Architecture_page'>
{/* hero sec */}
<section style={{background:"#FEF4F9"}} className='space-container architecture_page_hero_sec'>
<h1 className='architecture_page_hero_sec_headings'>Highest Flexibility in choosing 
simple architecture pattern</h1>
<p className='architecture_page_hero_sec_para'>Explore our architecture central to learn about the principles, patterns,<br /> practices, and tools that we follow to deliver you the solution that is<br /> simple, promotes reusability and flexibility.</p>
<div className='get_start_btn_wrapper'>
<GetStartedBtn/>
</div>

{/* absolute images */}
<img className='architectureVector_img' src='Images/ArchitectureVector.png' alt="unable to load image please check your internet connection" />
<img className='pink_xxx_img' src='Images/pinkXXX.png' alt="unable to load image please check your internet connection" />
<img className='architecture_img' src='Images/architecture.png' alt="unable to load image please check your internet connection" />
</section>
{/* hero sec tion end */}

{/*  */}
<section style={{background:"#FFF"}} className='space-container architecture_container'>
    <h2 className='architecture_container_heading'><span style={{color:"#666AE5"}}>Simple</span> Azure Mobility / Web App</h2>
    <p className='architecture_container_para'>Following is an example architecture for quickly developing small App in AWS using available cloud native services.</p>
    <img className='architecture_container_min_img' src={simpleMobility} alt="unable to load image check your internet connection" />
   </section>

   <section style={{background:"#8ECAE6"}} className='space-container architecture_container'>
    <h2 className='architecture_container_heading'><span style={{color:"#666AE5"}}>Simple</span>  AWS Mobility / Web App</h2>
    <p className='architecture_container_para'>Following is an example architecture for quickly developing small App in Azure using available cloud native services.</p>
    <img className='architecture_container_min_img' src={Azure} alt="unable to load image check your internet connection" />
   </section>

   <section style={{background:"#FFF"}} className='space-container  architecture_container'>
    <h2 className='architecture_container_heading'><span style={{color:"#666AE5"}}>Microservices</span> based Enterprise Product</h2>
    <p className='architecture_container_para'>Following is an example architecture of a Microservices Based Enterprise Product that we follow.</p>
    <img className='architecture_container_img' src={appServices} alt="unable to load image check your internet connection" />
   </section>

   <section style={{background:"#8ECAE6"}} className='space-container architecture_container '>
    <h2 className='architecture_container_heading'><span style={{color:"#666AE5"}}>Simple</span> Event Driven Architecture Pattern</h2>
    <p className='architecture_container_para'>Following is an example of a Event Driven Architecture Pattern that we follow</p>
    <img className='architecture_container_img' src={pattern} alt="unable to load image check your internet connection" />
   </section>

    </div>
  )
}

export default Architecture
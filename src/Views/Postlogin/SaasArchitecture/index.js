import React from 'react'
import "../../../Assets/Styles/pages/SaasArchitecture/index.css"

import appServices from "../../../Assets/Images/appServices.png"
import CommonServices from "../../../Assets/Images/CommonServices.png"
import lifeCycle from "../../../Assets/Images/lifeCycle.png"
import appBlock from "../../../Assets/Images/appBlock.png"
import Operationsmanagement from "../../../Assets/Images/Operationsmanagement .png"
import { useNavigate } from 'react-router-dom'
const SaasArchitecture = () => {
  const navigate = useNavigate()
  const navigateToProcess = ()=>{
    navigate('/process')
  }
  return (
   <>
   {/* sec 1  */}
   <section className='space-container single_tenant_sec single_tenant_container'>
    <h2 className='single_tenant_sec_heading'><span style={{color:"#666AE5"}}>Single-Tenant</span> Flexibility</h2>
    <p className='single_tenant_sec_para'>Each application is uniquely yours, providing unparalleled customization and control.For every application we instantly provision all App and Data Services for your application.A typical application services as below:</p>
    <img className='single_tenant_sec_img' src={appServices} alt="unable to load image check your internet connection" />
   </section>

   <section style={{background:'#FFF'}} className='space-container single_tenant_container'>
    <h2 className='single_tenant_sec_heading'><span style={{color:"#666AE5"}}>Microservices-Based</span> Design</h2>
    <p className='single_tenant_sec_para'>We use a microservices architecture to ensure scalability, resilience, and efficient resource utilization. We accelerate Microservice development with PTR Appblocks , that cut development time and costs by 50%. Appblocks are common services that every enterprise product uses for common functionalities.</p>
    <img className='single_tenant_sec_img' src={CommonServices} alt="unable to load image check your internet connection" />

{/* second box  */}
<div className='single_tenant_sec_box'>
<h2 className='single_tenant_sec_min_heading'>We have readied all <span style={{color:"#666AE5"}}>lifecycle</span> for all common <span style={{color:"#666AE5"}}>services</span> as follows.</h2>
<img className='single_tenant_sec_box_lifecycle_img' src={lifeCycle} alt="" />
</div>

{/* third box  */}
<div className='single_tenant_sec_box'>
<h2 className='single_tenant_sec_min_heading'>That <span style={{color:"#666AE5"}}>reduce</span> our new Application <span style={{color:"#666AE5"}}>Development Effort</span> significantly as below:</h2>
<img className='single_tenant_sec_box_img' src={appBlock} alt="" />
</div>
   </section>

   {/* sec 3 */}
   <section style={{background:"#8ECAE6"}} className="space-container single_tenant_container">
   <h2 className='single_tenant_sec_heading'><span style={{color:"#666AE5"}}>Comprehensive Operations</span> Management</h2>
    <p className='single_tenant_sec_para'>Our platform includes a full operations management suite, streamlining maintenance and updates.</p>
    <img className='single_tenant_sec_img' src={Operationsmanagement} alt="unable to load image check your internet connection" />
   </section>

   <section style={{background:"lightgray"}} className="space-container single_tenant_container">
   <h2 className='single_tenant_sec_heading'><span style={{color:"#666AE5"}}>Cutting-Edge</span> Technology</h2>
    <p className='single_tenant_sec_para'>Built on the latest technologies, our backend platform ensures robust performance and security.
    Explore few simple and some robust architecture that we follow to develop a simple App or a complete cloudnative enterprise product.</p>
    <button onClick={navigateToProcess} className="single_tenant_sec_btn">
    Read More
    </button>
   </section>
   
   </>
  )
}

export default SaasArchitecture
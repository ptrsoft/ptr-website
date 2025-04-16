import React from 'react'
import "../../../../Assets/Styles/pages/SaasArchitecture/index.css"

import FullAgenticImg from "../../../../Assets/Images/mlops.drawio.svg"
import AINativeTransformation from "../../../../Assets/Images/AI Native Transformation.png"
import AINativeTransformation2 from "../../../../Assets/Images/AI Native Transformation2.png"
import SemiAINative from "../../../../Assets/Images/SemiAiNative.drawio.svg"

import ssss from "../../../../Assets/Images/AINativeTransformation.drawio.svg"
    import { useNavigate } from 'react-router-dom'
const Index = () => {
  const navigate = useNavigate()
  const navigateToProcess = ()=>{
    navigate('/process')
  }
  return (
   <>
   {/* sec 1  */}
   <section className='space-container single_tenant_sec single_tenant_container'>
    <h2 className='single_tenant_sec_heading'>  Full Agentic<span style={{color:"#666AE5"}} > AI-Native</span> Development</h2>
    <p className='single_tenant_sec_para text-balance'>
    Transform your business with AI solutions that add real value. Our AI agents manage workflows and adapt to changes, while our platform reduces costs and accelerates digital transformation.
       </p>

    <img className='single_tenant_sec_img' style={{width:"80%" , maxWidth:"700px"}} src={FullAgenticImg} alt="unable to load image check your internet connection" />
    <p className='single_tenant_sec_para pt-[30px]'>
    We create user-friendly AI tools requiring minimal code. Our AI and automation tools work independently to help companies boost efficiency. Our system combines simplicity and power for easy maintenance and strong performance.</p>
   </section>

   <section style={{background:'#FFF'}} className='space-container single_tenant_container'>
    <h2 className='single_tenant_sec_heading'><span style={{color:"#666AE5"}}>  AI Native</span> Transformation</h2>
     <img src={ssss} alt="" />
     <p className='single_tenant_sec_para text-balance'>
    We make both legacy and cloud-native products AI-ready by adding data connectors and transformations to prepare your data, helping you leverage AI while protecting your existing investment.
    </p>
     </section>

 
    <section style={{background:'#FFF'}} className='space-container single_tenant_container'>
         <img src={SemiAINative} alt="" />
   </section>
  
   </>
  )
}

export default Index
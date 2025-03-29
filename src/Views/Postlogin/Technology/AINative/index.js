import React from 'react'
import "../../../../Assets/Styles/pages/SaasArchitecture/index.css"

import FullAgenticImg from "../../../../Assets/Images/Full Agentic.png"
import AINativeTransformation from "../../../../Assets/Images/AI Native Transformation.png"
import AINativeTransformation2 from "../../../../Assets/Images/AI Native Transformation2.png"
import SemiAINative from "../../../../Assets/Images/semiAiNative.png"
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
    <p className='single_tenant_sec_para text-balance'>Revolutionize your business with our cutting-edge rapidly developed  Agentic AI solutions that drive real business value. Our AI agents can handle complex workflows autonomously, from data processing to decision-making, while continuously learning and adapting to new scenarios. Experience the power of true AI automation with our AI- Native solutions that reduce operational costs and accelerate digital transformation.</p>
    <img className='single_tenant_sec_img' style={{width:"80%" , maxWidth:"700px"}} src={FullAgenticImg} alt="unable to load image check your internet connection" />
    <p className='single_tenant_sec_para text-balance'>We have developed state-of-the-art, fully agentic, production-ready AI solutions with minimal and efficient coding. Our innovative approach combines advanced machine learning models with robust automation frameworks to create intelligent systems that handle complex tasks autonomously. This next-generation solution represents a significant leap forward in AI technology, enabling businesses to streamline operations and reduce manual intervention. The system's lean architecture ensures optimal performance while maintaining flexibility for future enhancements.</p>
   </section>

   <section style={{background:'#FFF'}} className='space-container single_tenant_container'>
    <h2 className='single_tenant_sec_heading'><span style={{color:"#666AE5"}}>  AI Native</span> Transformation</h2>
    <div className='flex w-full justify-between'>
     <img style={{width:"49%"}} className='single_tenant_sec_img' src={AINativeTransformation} alt="unable to load image check your internet connection" />
     <img style={{width:"49%"}} className='single_tenant_sec_img' src={AINativeTransformation2} alt="unable to load image check your internet connection" />
    </div>
    <p className='single_tenant_sec_para text-balance'>Whether you have a legacy monolith product or Cloud Native product , We will seamlessly make you product AI ready.We will add data connectors and a data transformation layer to make your existing data AI-ready and help you leverage AI benefits without losing your current investment.</p>
    </section>

 
    <section style={{background:'#FFF'}} className='space-container single_tenant_container'>
         <img src={SemiAINative} alt="" />
   </section>
  
   </>
  )
}

export default Index
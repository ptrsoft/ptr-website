import React from 'react'
import appServices from "../../../../Assets/Images/appServices.png"
 import AIIntigrationService from "../../../../Assets/Images/AIIntigrationService.png"
import AIFeatures from "../../../../Assets/Images/AIFeatures.png"
import advancedIntigration from "../../../../Assets/Images/advancedIntigration.png"
import AIBenifits from "../../../../Assets/Images/AIBenifits.png"
import coreIntigration from "../../../../Assets/Images/coreIntigration.png"

const index = () => {
  return (
    <>

      <section className='space-container  single_tenant_container'>
        <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>AI Integration</span> Services</h2>
        <p className='single_tenant_sec_para'>Transform your business with our comprehensive AI integration solutions. We specialize in seamlessly incorporating artificial intelligence into your existing systems and workflows.</p>
        <img className='single_tenant_sec_img' src={AIIntigrationService} style={{width:"70%" , maxWidth:"700px"}} alt="unable to load image check your internet connection" />
      </section>

      {/* Core Integration Services */}
      <section className='space-container  single_tenant_container'>
        <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>Core Integration</span> Services</h2>

        <div className='aside_container'>
          <ul className='aside_box'>
            <li ><span className='single_tenant_sec_para'>API Integration</span><br /> Connect your systems with our robust AI APIs for real-time processing and analysis</li>
            <li><span className='single_tenant_sec_para'>Custom AI Pipeline Development </span><br />Build tailored AI workflows specific to your business needs</li>
            <li><span className='single_tenant_sec_para'> Legacy System Integration </span><br />Modernize existing infrastructure with AI capabilities</li>
            <li><span className='single_tenant_sec_para'>Cloud AI Solutions </span><br />Deploy scalable AI services across cloud platforms</li>
          </ul>

          <div className='img_box'>
            <img className='single_tenant_sec_img' style={{
            }} src={coreIntigration} alt="unable to load image check your internet connection" />
          </div>
        </div>
      </section>

      {/* AI Features Integration */}
      <section className='space-container  single_tenant_container'>
        <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>AI Features</span> Integration</h2>


        <div className='aside_container'>
          <div className='img_box'>
            <img className='single_tenant_sec_img' style={{
            }} src={AIFeatures} alt="unable to load image check your internet connection" />
          </div>

          <div className='right_aside_box'>
            <ul>
              <li ><span className='single_tenant_sec_para'>Natural Language Processing</span><br /> Implement text analysis, sentiment detection, and language understanding</li>
              <li><span className='single_tenant_sec_para'>Computer Vision Integration</span><br />Add image and video analysis capabilities to your applications</li>
              <li><span className='single_tenant_sec_para'>Predictive Analytics</span><br />Integrate forecasting and trend analysis into your business processes</li>
              <li><span className='single_tenant_sec_para'>Machine Learning Operations   </span><br />Streamline ML model deployment and maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Advanced Integration */}
      <section className='space-container  single_tenant_container'>
        <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>Advanced</span> Integration</h2>
        <p className='single_tenant_sec_para'>Enhance your AI systems with our cutting-edge integration services:</p>

        <div className='aside_container'>
          <ul className='aside_box'>
            <li ><span className='single_tenant_sec_para'>RAG (Retrieval-Augmented Generation) Integration</span><br /> Implement sophisticated document retrieval and context-aware AI responses</li>
            <li><span className='single_tenant_sec_para'>Vector Database Integration </span><br />Deploy efficient similarity search and semantic matching capabilities with modern vector databases</li>
            <li><span className='single_tenant_sec_para'>Knowledge Base Integration  </span><br /> Connect AI systems with structured knowledge repositories for enhanced decision-making</li>
            <li><span className='single_tenant_sec_para'>MCP (Multi-Chain Protocol) Integration  </span><br />Enable seamless cross-chain communication and data synchronization</li>
          </ul>

          <div className='img_box'>
            <img className='single_tenant_sec_img' style={{
            }} src={advancedIntigration} alt="unable to load image check your internet connection" />
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className='space-container  single_tenant_container'>
        <h2 className='single_tenant_sec_heading'>Integration<span style={{ color: "#666AE5" }}> Benefits</span> </h2>
        <p className='single_tenant_sec_para'>Our AI integration services deliver tangible advantages:</p>

        <div className='aside_container'>
          <div className='img_box'>
            <img className='single_tenant_sec_img' style={{
            }} src={AIBenifits} alt="unable to load image check your internet connection" />
          </div>

          <div className='right_aside_box'>
            <ul>
              <li ><span className='single_tenant_sec_para'>Enhanced Efficiency</span><br /> Automate complex tasks and streamline operations</li>
              <li><span className='single_tenant_sec_para'>Scalable Solutions</span><br /> Grow your AI capabilities alongside your business</li>
              <li><span className='single_tenant_sec_para'>Seamless Deployment </span><br /> Minimize disruption during integration</li>
              <li><span className='single_tenant_sec_para'>Future-Ready Architecture </span><br /> Build a foundation for ongoing AI innovation</li>
            </ul>
          </div>
        </div>

        <p className='single_tenant_sec_para'>Ready to integrate AI into your business? Contact our experts to discuss your integration needs and discover the perfect solution for your organization. </p>
      </section>


    </>
  )
}

export default index
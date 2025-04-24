// import React from 'react'
// import appServices from "../../../../Assets/Images/appServices.png"
//  import AIIntigrationService from "../../../../Assets/Images/AIIntigrationService.png"
// import AIFeatures from "../../../../Assets/Images/AIFeatures.png"
// import advancedIntigration from "../../../../Assets/Images/advancedIntigration.png"
// import AIBenifits from "../../../../Assets/Images/AIBenifits.png"
// import coreIntigration from "../../../../Assets/Images/coreIntigration.png"

// const index = () => {
//   return (
//     <>

//       <section className='space-container  single_tenant_container'>
//         <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>AI Integration</span> Services</h2>
//         <p className='single_tenant_sec_para'>Transform your business with our comprehensive AI integration solutions. We specialize in seamlessly incorporating artificial intelligence into your existing systems and workflows.</p>
//         <img className='single_tenant_sec_img' src={AIIntigrationService} style={{width:"70%" , maxWidth:"700px"}} alt="unable to load image check your internet connection" />
//       </section>

//       {/* Core Integration Services */}
//       <section className='space-container  single_tenant_container'>
//         <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>Core Integration</span> Services</h2>

//         <div className='aside_container'>
//           <ul className='aside_box'>
//             <li ><span className='single_tenant_sec_para'>API Integration</span><br /> Connect your systems with our robust AI APIs for real-time processing and analysis</li>
//             <li><span className='single_tenant_sec_para'>Custom AI Pipeline Development </span><br />Build tailored AI workflows specific to your business needs</li>
//             <li><span className='single_tenant_sec_para'> Legacy System Integration </span><br />Modernize existing infrastructure with AI capabilities</li>
//             <li><span className='single_tenant_sec_para'>Cloud AI Solutions </span><br />Deploy scalable AI services across cloud platforms</li>
//           </ul>

//           <div className='img_box'>
//             <img className='single_tenant_sec_img' style={{
//             }} src={coreIntigration} alt="unable to load image check your internet connection" />
//           </div>
//         </div>
//       </section>

//       {/* AI Features Integration */}
//       <section className='space-container  single_tenant_container'>
//         <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>AI Features</span> Integration</h2>


//         <div className='aside_container'>
//           <div className='img_box'>
//             <img className='single_tenant_sec_img' style={{
//             }} src={AIFeatures} alt="unable to load image check your internet connection" />
//           </div>

//           <div className='right_aside_box'>
//             <ul>
//               <li ><span className='single_tenant_sec_para'>Natural Language Processing</span><br /> Implement text analysis, sentiment detection, and language understanding</li>
//               <li><span className='single_tenant_sec_para'>Computer Vision Integration</span><br />Add image and video analysis capabilities to your applications</li>
//               <li><span className='single_tenant_sec_para'>Predictive Analytics</span><br />Integrate forecasting and trend analysis into your business processes</li>
//               <li><span className='single_tenant_sec_para'>Machine Learning Operations   </span><br />Streamline ML model deployment and maintenance</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Advanced Integration */}
//       <section className='space-container  single_tenant_container'>
//         <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>Advanced</span> Integration</h2>
//         <p className='single_tenant_sec_para'>Enhance your AI systems with our cutting-edge integration services:</p>

//         <div className='aside_container'>
//           <ul className='aside_box'>
//             <li ><span className='single_tenant_sec_para'>RAG (Retrieval-Augmented Generation) Integration</span><br /> Implement sophisticated document retrieval and context-aware AI responses</li>
//             <li><span className='single_tenant_sec_para'>Vector Database Integration </span><br />Deploy efficient similarity search and semantic matching capabilities with modern vector databases</li>
//             <li><span className='single_tenant_sec_para'>Knowledge Base Integration  </span><br /> Connect AI systems with structured knowledge repositories for enhanced decision-making</li>
//             <li><span className='single_tenant_sec_para'>MCP (Multi-Chain Protocol) Integration  </span><br />Enable seamless cross-chain communication and data synchronization</li>
//           </ul>

//           <div className='img_box'>
//             <img className='single_tenant_sec_img' style={{
//             }} src={advancedIntigration} alt="unable to load image check your internet connection" />
//           </div>
//         </div>
//       </section>

//       {/* Integration Benefits */}
//       <section className='space-container  single_tenant_container'>
//         <h2 className='single_tenant_sec_heading'>Integration<span style={{ color: "#666AE5" }}> Benefits</span> </h2>
//         <p className='single_tenant_sec_para'>Our AI integration services deliver tangible advantages:</p>

//         <div className='aside_container'>
//           <div className='img_box'>
//             <img className='single_tenant_sec_img' style={{
//             }} src={AIBenifits} alt="unable to load image check your internet connection" />
//           </div>

//           <div className='right_aside_box'>
//             <ul>
//               <li ><span className='single_tenant_sec_para'>Enhanced Efficiency</span><br /> Automate complex tasks and streamline operations</li>
//               <li><span className='single_tenant_sec_para'>Scalable Solutions</span><br /> Grow your AI capabilities alongside your business</li>
//               <li><span className='single_tenant_sec_para'>Seamless Deployment </span><br /> Minimize disruption during integration</li>
//               <li><span className='single_tenant_sec_para'>Future-Ready Architecture </span><br /> Build a foundation for ongoing AI innovation</li>
//             </ul>
//           </div>
//         </div>

//         <p className='single_tenant_sec_para'>Ready to integrate AI into your business? Contact our experts to discuss your integration needs and discover the perfect solution for your organization. </p>
//       </section>


//     </>
//   )
// }

// export default index





import { Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';


import MissionIcon from "../../../../Assets/Images/MissionIcon.svg"
import backgroundImage from "../../../../Assets/Images/benifitsBackground.png"

import EfficiencyIcon from "../../../../Assets/Images/EfficiencyIcon.svg" 
import solutionsIcon from "../../../../Assets/Images/solutionsIcon.svg" 
import scalableSolutionIcon from "../../../../Assets/Images/scalableSolutionIcon.svg" 
import deployementIcon from "../../../../Assets/Images/deployementIcon.svg" 
import architectureIcon from "../../../../Assets/Images/architecture.svg"
import aiIntigrationEnhanceIcon from "../../../../Assets/Images/aiIntigrationEnhanceIcon.svg"
 const Index = () => {
  const navigate = useNavigate()
  const steps = [
    {
      background:"bg-[#EABFD4]",
      title: "Core Integration Services",
       icon: "🔗",
      color: "bg-purple-100",
      points: [
        "API Integration - Connect your systems with our robust AI APIs for real-time processing and analysis",
        "Custom AI Pipeline Development - Build tailored AI workflows specific to your business needs",
        "Legacy System Integration - Modernize existing infrastructure with AI capabilities",
        "Cloud AI Solutions - Deploy scalable AI services across cloud platforms"
      ]
    },
    {
      background:"bg-[#D1D6E8]",
      title: "AI Features Integration",
       icon: "🤖",
      color: "bg-blue-100",
      points: [
        "Natural Language Processing - Implement text analysis, sentiment detection, and language understanding",
        "Computer Vision Integration - Add image and video analysis capabilities to your applications",
        "Predictive Analytics - Integrate forecasting and trend analysis into your business processes",
        "Machine Learning Operations - Streamline ML model deployment and maintenance"
       ]
    },
    {
      background:"bg-[#A7D6EB]",
      title: "Advanced Integration",
      desc:"Enhance your AI systems with our cutting-edge integration services:",
      icon: "🌐",
      color: "bg-green-100",
      points: [
       "RAG (Retrieval-Augmented Generation) Integration - Implement sophisticated document retrieval and context-aware AI responses",
       "Vector Database Integration - Deploy efficient similarity search and semantic matching capabilities with modern vector databases",
       "Knowledge Base Integration - Connect AI systems with structured knowledge repositories for enhanced decision-making",
       "MCP (Multi-Chain Protocol) Integration - Enable seamless cross-chain communication and data synchronization"
      ]
    },
     
      
  ];

  return (
    <>

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
     
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className='single_tenant_sec_heading text-balance'>
          AI <span style={{color:"#666AE5"}}>Integration</span> Services

          </h1>
         <p className=' single_tenant_sec_para'>
         Transform your business with our comprehensive AI integration solutions. We specialize in seamlessly incorporating artificial intelligence into your existing systems and workflows.</p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative group  ${step.background}  rounded-2xl p-6 hover:shadow-lg  transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
            >
              
              <div className={`bg-white w-14 h-14 rounded-xl m-auto flex items-center justify-center mb-6`}>
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-xl text-center font-semibold text-gray-800 mb-4">
                {/* <span className="mr-2 text-blue-600">{index + 1}.</span> */}
                {step.title}
              </h3>
              <p className=' mb-4'>{step.desc}</p>

              <ul className="space-y-3">
                {step.points.map((point, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

          
            </div>
          ))}
        </div>

 

      <p className='single_tenant_sec_para pt-7'>Ready to integrate AI into your business? Contact our experts to discuss your integration needs and discover the perfect solution for your organization. 🚀</p>
      </div>
    </div>

  <div className='pt-[50px] pb-[50px] w-full pl-[30px] pr-[30px] flex flex-col  justify-center  relative overflow-hidden'>
<h2 className='text-center relative z-10  text-[2.50rem] font-bold leading-[40px] uppercase text-[#000000]  font-[poppins] '>Integration Benefits</h2>
<p className='single_tenant_sec_para z-10 relative text-balance mb-[30px]'>Our AI integration services deliver tangible advantages:</p>



<Grid className='flex gap-3 justify-between z-10 relative'   >
  <Grid className='w-[400px]'>
    <div className='flex  flex-col items-center gap-4'>
   <img className='w-[90px]' src={aiIntigrationEnhanceIcon} alt="unable to load image check your internet connection" />
   <h2 className='text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>enhances Efficiency</h2>
   <p className='font-[poppins] text-[13px] font-[400] text-[#333333] text-center text-balance'>Automate complex tasks and streamline operations</p>
   </div>
  </Grid>

 
  <Grid   className='w-[400px]'>
    <div className='flex  flex-col items-center gap-4'>
   <img className='w-[90px]' src={scalableSolutionIcon} alt="unable to load image check your internet connection" />
   <h2 className='text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Scalable Solutions</h2>
   <p className='font-[poppins] text-[13px] font-[400] text-[#333333] text-center text-balance'>Grow your AI capabilities alongside your business</p>
   </div>
  </Grid>
  
 
  <Grid   className='w-[400px]'>
    <div className='flex  flex-col items-center gap-4'>
   <img className='w-[90px]' src={deployementIcon} alt="unable to load image check your internet connection" />
   <h2 className='text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Seamless Deployment</h2>
   <p className='font-[poppins] text-[13px] font-[400] text-[#333333] text-center text-balance'>Minimize disruption during integration</p>
   </div>
  </Grid>


  
  <Grid   className='w-[400px]'>
    <div className='flex  flex-col items-center gap-4'>
   <img className='w-[90px]' src={architectureIcon} alt="unable to load image check your internet connection" />
   <h2 className='text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Future-Ready Architecture</h2>
   <p className='font-[poppins] text-[13px] font-[400] text-[#333333] text-center text-balance'>Build a foundation for ongoing AI innovation</p>
   </div>
  </Grid>
   
</Grid>

 
<img className='absolute z-0 top-0 left-0 right-0 bottom-0' src={backgroundImage} alt="" />
</div>
    </>
  );
};

export default Index;

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

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
     
        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-16 pt-8 sm:pt-0">
          <h1 className='single_tenant_sec_heading text-balance text-2xl sm:text-3xl lg:text-4xl'>
          AI <span style={{color:"#666AE5"}}>Integration</span> Services
          </h1>
         <p className='single_tenant_sec_para text-sm sm:text-base'>
         Transform your business with our comprehensive AI integration solutions. We specialize in seamlessly incorporating artificial intelligence into your existing systems and workflows.</p>
        </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative group ${step.background} rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
            >
              
              <div className={`bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl m-auto flex items-center justify-center mb-4 sm:mb-6`}>
                <span className="text-2xl sm:text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl text-center font-semibold text-gray-800 mb-3 sm:mb-4">
                {step.title}
              </h3>
              <p className='text-sm sm:text-base mb-3 sm:mb-4'>{step.desc}</p>

              <ul className="space-y-2 sm:space-y-3">
                {step.points.map((point, i) => (
                  <li key={i} className="flex items-start text-sm sm:text-base text-gray-600">
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

        <p className='single_tenant_sec_para pt-4 sm:pt-7 text-sm sm:text-base'>Ready to integrate AI into your business? Contact our experts to discuss your integration needs and discover the perfect solution for your organization. 🚀</p>
      </div>
    </div>

  <div className='pt-[30px] sm:pt-[50px] pb-[30px] sm:pb-[50px] w-full px-4 sm:px-[30px] flex flex-col justify-center relative overflow-hidden'>
    <h2 className='text-center relative z-10 text-xl sm:text-2xl lg:text-[2.50rem] font-bold leading-tight sm:leading-[40px] uppercase text-[#000000] font-[poppins]'>Integration Benefits</h2>
    <p className='single_tenant_sec_para z-10 relative text-balance mb-4 sm:mb-[30px] text-sm sm:text-base'>Our AI integration services deliver tangible advantages:</p>

    <Grid className='flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-between z-10 relative'>
      <Grid className='w-full sm:w-[300px] lg:w-[400px]'>
        <div className='flex flex-col items-center gap-3 sm:gap-4'>
          <img className='w-[70px] sm:w-[90px]' src={aiIntigrationEnhanceIcon} alt="unable to load image check your internet connection" />
          <h2 className='text-lg sm:text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>enhances Efficiency</h2>
          <p className='font-[poppins] text-xs sm:text-[13px] font-[400] text-[#333333] text-center text-balance'>Automate complex tasks and streamline operations</p>
        </div>
      </Grid>

      <Grid className='w-full sm:w-[300px] lg:w-[400px]'>
        <div className='flex flex-col items-center gap-3 sm:gap-4'>
          <img className='w-[70px] sm:w-[90px]' src={scalableSolutionIcon} alt="unable to load image check your internet connection" />
          <h2 className='text-lg sm:text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Scalable Solutions</h2>
          <p className='font-[poppins] text-xs sm:text-[13px] font-[400] text-[#333333] text-center text-balance'>Grow your AI capabilities alongside your business</p>
        </div>
      </Grid>
      
      <Grid className='w-full sm:w-[300px] lg:w-[400px]'>
        <div className='flex flex-col items-center gap-3 sm:gap-4'>
          <img className='w-[70px] sm:w-[90px]' src={deployementIcon} alt="unable to load image check your internet connection" />
          <h2 className='text-lg sm:text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Seamless Deployment</h2>
          <p className='font-[poppins] text-xs sm:text-[13px] font-[400] text-[#333333] text-center text-balance'>Minimize disruption during integration</p>
        </div>
      </Grid>

      <Grid className='w-full sm:w-[300px] lg:w-[400px]'>
        <div className='flex flex-col items-center gap-3 sm:gap-4'>
          <img className='w-[70px] sm:w-[90px]' src={architectureIcon} alt="unable to load image check your internet connection" />
          <h2 className='text-lg sm:text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Future-Ready Architecture</h2>
          <p className='font-[poppins] text-xs sm:text-[13px] font-[400] text-[#333333] text-center text-balance'>Build a foundation for ongoing AI innovation</p>
        </div>
      </Grid>
    </Grid>

    <img className='absolute z-0 top-0 left-0 right-0 bottom-0 w-full h-full object-cover' src={backgroundImage} alt="" />
  </div>
    </>
  );
};

export default Index;

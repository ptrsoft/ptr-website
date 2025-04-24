// import React from 'react'
// import "../../../../Assets/Styles/pages/SaasArchitecture/index.css"

// import appServices from "../../../../Assets/Images/appServices.png"
// import CommonServices from "../../../../Assets/Images/CommonServices.png"
// import lifeCycle from "../../../../Assets/Images/lifeCycle.png"
// import appBlock from "../../../../Assets/Images/appBlock.png"
// import Operationsmanagement from "../../../../Assets/Images/Operationsmanagement .png"
// import { useNavigate } from 'react-router-dom'

// import customAIModel from "../../../../Assets/Images/customAIModel.png"
// import ValidationAndTesting from "../../../../Assets/Images/Validation&Testing.png"
// import devToProduction from "../../../../Assets/Images/devToProduction.png"
// import ongoingSupport from "../../../../Assets/Images/ongoingSupport.png"
// import devlopmentLifeCycle from "../../../../Assets/Images/devlopmentLifeCycle.png"

// const index = () => {
// //   const navigate = useNavigate()
// //   const navigateToProcess = ()=>{
// //     navigate('/process')
// //   }
//   return (
//    <>
//    {/* sec 1  */}

//    <section className='space-container single_tenant_sec single_tenant_container'>
//     <h2 className='single_tenant_sec_heading'>Custom<span style={{color:"#666AE5"}}> AI Model Development</span> Services</h2>
//     <p className='single_tenant_sec_para'>Transform your business with our end-to-end custom AI model development solutions. We specialize in creating, training, and deploying tailored AI models that address your unique business challenges.</p>
//     <img style={{width:"70%" , maxWidth:"500px"}} className='single_tenant_sec_img' src={customAIModel} alt="unable to load image check your internet connection" />
//    </section>



//   <section className='space-container  single_tenant_container'>
//     <h2 className='single_tenant_sec_heading'>Model Development<span style={{color:"#666AE5"}}> Life Cycle</span>  </h2>
//     <p className='single_tenant_sec_para'>Our comprehensive approach ensures high-quality, production-ready AI models:</p>
//     <div className='aside_container'>
//                     <ul className='aside_box'>
//                         <li ><span className='single_tenant_sec_para'>Requirements Analysis</span><br /> Define clear objectives and success metrics for your AI model</li>
//                         <li><span className='single_tenant_sec_para'> Data Preparation  </span><br />Clean, preprocess, and augment training data for optimal results</li>
//                         <li><span className='single_tenant_sec_para'> Model Architecture Design </span><br />Create custom neural networks and model architectures</li>
//                         <li><span className='single_tenant_sec_para'>Training & Optimization </span><br /> Implement advanced training techniques with performance monitoring</li>
//                     </ul>

//                     <div className='img_box'>
//                         <img className='single_tenant_sec_img' style={{ width:"100%" , maxWidth:"470px"
//                         }} src={devToProduction}  alt="unable to load image check your internet connection" />
//                     </div>
//                 </div>
//     </section>



//     <section className='bg-[#f5f5f5] space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'>Validation & <span style={{ color: "#666AE5" }}>Testing </span></h2>
//                 <p className='single_tenant_sec_para'> Ensure model reliability through rigorous validation:</p>

//                 <div className='flex justify-between w-full h-[70vh] items-center'>

//                     <div className='w-[50%] p-2'>
//                         <img className='single_tenant_sec_img' style={{
//                             width: "100%"
//                         }} src={ValidationAndTesting} alt="unable to load image check your internet connection" />
//                     </div>

//                     <div className='w-[50%] p-2 flex justify-end'>

//                         <ul className=' flex flex-col gap-9'>
//                             <li className='text-lg'><span className='single_tenant_sec_para'>Cross-Validation</span><br />Verify model performance across different data subsets</li>
//                             <li><span className='single_tenant_sec_para'> Performance Metrics    </span><br />Comprehensive evaluation using industry-standard metrics</li>
//                             <li><span className='single_tenant_sec_para'>  Error Analysis</span><br /> Detailed investigation of model behavior and edge cases</li>
//                             <li><span className='single_tenant_sec_para'>Bias Testing</span><br /> Ensure fair and unbiased model predictions</li>

//                         </ul>
//                     </div>

//                 </div>
//             </section>


//             <section className='space-container  single_tenant_container'>
//     <h2 className='single_tenant_sec_heading'>Model<span style={{color:"#666AE5"}}> Deployment</span>  </h2>
//     <p className='single_tenant_sec_para'>Seamlessly transition from development to production:</p>
//     <div className='aside_container'>
//                     <ul className='aside_box'>
//                         <li ><span className='single_tenant_sec_para'>Infrastructure Setup</span><br /> Configure scalable deployment environments</li>
//                         <li><span className='single_tenant_sec_para'> API Development  </span><br />Create robust APIs for model integration</li>
//                         <li><span className='single_tenant_sec_para'>  Performance Optimization </span><br />Fine-tune model efficiency for production</li>
//                         <li><span className='single_tenant_sec_para'>Monitoring Systems </span><br /> Implement real-time performance tracking</li>
//                     </ul>

//                     <div className='img_box'>
//                         <img className='single_tenant_sec_img'  style={{ width:"100%" , maxWidth:"470px"}}
//                          src={ devlopmentLifeCycle} alt="unable to load image check your internet connection" />
//                     </div>
//                 </div>
//     </section>



//     <section className='bg-[#f5f5f5] space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'>Ongoing  <span style={{ color: "#666AE5" }}>Support </span></h2>
//                 <p className='single_tenant_sec_para'>Ensure long-term model success with our maintenance services:</p>

//                 <div className='flex justify-between w-full h-[70vh] items-center'>

//                     <div className='w-[50%] p-2'>
//                         <img className='single_tenant_sec_img' style={{
//                             width: "100%", maxWidth:"470px"
//                         }} src={ongoingSupport} alt="unable to load image check your internet connection" />
//                     </div>

//                     <div className='w-[50%] p-2 flex justify-end'>

//                         <ul className=' flex flex-col gap-9'>
//                             <li className='text-lg'><span className='single_tenant_sec_para'>Model Updates</span><br /> Regular retraining with new data</li>
//                             <li><span className='single_tenant_sec_para'>Performance Monitoring   </span><br />Continuous tracking of model accuracy</li>
//                             <li><span className='single_tenant_sec_para'>Technical Support</span><br /> Expert assistance for any issues</li>
//                             <li><span className='single_tenant_sec_para'>Documentation </span><br /> Comprehensive technical documentation and usage guides</li>

//                         </ul>
//                     </div>

//                 </div>
//                 <p className='single_tenant_sec_para'>Ready to develop custom AI models for your business? Contact our team to discuss your requirements and start building intelligent solutions today.</p>
//             </section>
//    </>
//   )
// }

// export default index



import { Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MissionIcon from "../../../../Assets/Images/MissionIcon.svg"
import modelupdateIcon from "../../../../Assets/Images/modelupdateIcon.svg"
import performanceIcon from "../../../../Assets/Images/performanceIcon.svg"
import technicalSupportIcon from "../../../../Assets/Images/technicalSupportIcon.svg"
import documentationIcon from "../../../../Assets/Images/documentationIcon.svg"
import backgroundImage from "../../../../Assets/Images/benifitsBackground.png"
const Index = () => {
  const navigate = useNavigate()
  const steps = [
    {
      bgColor:"bg-[#EABFD4]",
      title: "Model Development Life Cycle",
      desc: "Our comprehensive approach ensures high-quality, production-ready AI models:",
      icon: "🔄",
      color: "bg-purple-100",
      points: [
        "Requirements Analysis - Define clear objectives and success metrics for your AI model",
        "Data Preparation - Clean, preprocess, and augment training data for optimal results",
        "Model Architecture Design - Create custom neural networks and model architectures",
        "Training & Optimization - Implement advanced training techniques with performance monitoring"
      ]
    },
    {
      bgColor:"bg-[#D1D6E8]",
      title: "Validation & Testing",
      desc: "Ensure model reliability through rigorous validation:",
      icon: "✅",
      color: "bg-blue-100",
      points: [
        "Cross-Validation - Verify model performance across different data subsets",
        "Performance Metrics - Comprehensive evaluation using industry-standard metrics",
        "Error Analysis - Detailed investigation of model behavior and edge cases",
        "Bias Testing - Ensure fair and unbiased model predictions"
      ]
    },
    {
      bgColor:"bg-[#EABFD4]",
      title: "Model Deployment",
      desc: "Seamlessly transition from development to production:",
      icon: "🚀",
      color: "bg-green-100",
      points: [
        "Infrastructure Setup - Configure scalable deployment environments",
        "API Development - Create robust APIs for model integration",
        "Performance Optimization - Fine-tune model efficiency for production",
        "Monitoring Systems - Implement real-time performance tracking"
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
              Custom <span style={{ color: "#666AE5" }}> AI Model Development</span> Services

            </h1>
            <p className=' single_tenant_sec_para'>
              Transform your business with our end-to-end custom AI model development solutions. We specialize in creating, training, and deploying tailored AI models that address your unique business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative group  ${step.bgColor} rounded-2xl p-6 hover:shadow-lg   transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
              >
 
                <div className={`bg-white m-auto w-14 h-14 rounded-xl  flex items-center justify-center mb-6`}>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="text-xl text-center font-semibold text-gray-800 mb-4">
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



         

          <p className='single_tenant_sec_para pt-20 text-balance'>
            Ready to develop custom AI models for your business? Contact our team to discuss your requirements and start building intelligent solutions today. 🚀           </p>
        </div>
      </div>



      <div className='pt-[50px] pb-[50px] w-full pl-[30px] pr-[30px] flex flex-col  justify-center  relative overflow-hidden'>
<h2 className='text-center relative z-10  text-[2.50rem] font-bold leading-[40px] uppercase text-[#000000]  font-[poppins] '>Ongoing Support</h2>
<p className='single_tenant_sec_para z-10 relative text-balance mb-[30px]'>Ensure long-term model success with our maintenance services:</p>



<Grid className='flex gap-3 justify-between z-10 relative'   >
  <Grid className='w-[400px]'>
    <div className='flex  flex-col items-center gap-4'>
   <img className='w-[90px]' src={modelupdateIcon} alt="unable to load image check your internet connection" />
   <h2 className='text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Model Updates</h2>
   <p className='font-[poppins] text-[13px] font-[400] text-[#333333] text-center text-balance'>Regular retraining with new data</p>
   </div>
  </Grid>

 
  <Grid   className='w-[400px]'>
    <div className='flex  flex-col items-center gap-4'>
   <img className='w-[90px]' src={performanceIcon} alt="unable to load image check your internet connection" />
   <h2 className='text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Performance Monitoring</h2>
   <p className='font-[poppins] text-[13px] font-[400] text-[#333333] text-center text-balance'>Continuous tracking of model accuracy</p>
   </div>
  </Grid>
  
 
  <Grid   className='w-[400px]'>
    <div className='flex  flex-col items-center gap-4'>
   <img className='w-[90px]' src={technicalSupportIcon} alt="unable to load image check your internet connection" />
   <h2 className='text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Technical Support</h2>
   <p className='font-[poppins] text-[13px] font-[400] text-[#333333] text-center text-balance'>Expert assistance for any issues</p>
   </div>
  </Grid>


  
  <Grid   className='w-[400px]'>
    <div className='flex  flex-col items-center gap-4'>
   <img className='w-[90px]' src={documentationIcon} alt="unable to load image check your internet connection" />
   <h2 className='text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Documentation</h2>
   <p className='font-[poppins] text-[13px] font-[400] text-[#333333] text-center text-balance'>Comprehensive technical documentation and usage guides</p>
   </div>
  </Grid>
   
</Grid>

 
<img className='absolute z-0 top-0 left-0 right-0 bottom-0' src={backgroundImage} alt="" />
</div>
    </>
  );
};

export default Index;
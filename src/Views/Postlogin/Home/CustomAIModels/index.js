import React from 'react'
import "../../../../Assets/Styles/pages/SaasArchitecture/index.css"

import appServices from "../../../../Assets/Images/appServices.png"
import CommonServices from "../../../../Assets/Images/CommonServices.png"
import lifeCycle from "../../../../Assets/Images/lifeCycle.png"
import appBlock from "../../../../Assets/Images/appBlock.png"
import Operationsmanagement from "../../../../Assets/Images/Operationsmanagement .png"
import { useNavigate } from 'react-router-dom'

import customAIModel from "../../../../Assets/Images/customAIModel.png"
import ValidationAndTesting from "../../../../Assets/Images/Validation&Testing.png"
import devToProduction from "../../../../Assets/Images/devToProduction.png"
import ongoingSupport from "../../../../Assets/Images/ongoingSupport.png"
import devlopmentLifeCycle from "../../../../Assets/Images/devlopmentLifeCycle.png"

const index = () => {
//   const navigate = useNavigate()
//   const navigateToProcess = ()=>{
//     navigate('/process')
//   }
  return (
   <>
   {/* sec 1  */}

   <section className='space-container single_tenant_sec single_tenant_container'>
    <h2 className='single_tenant_sec_heading'>Custom<span style={{color:"#666AE5"}}> AI Model Development</span> Services</h2>
    <p className='single_tenant_sec_para'>Transform your business with our end-to-end custom AI model development solutions. We specialize in creating, training, and deploying tailored AI models that address your unique business challenges.</p>
    <img style={{width:"70%" , maxWidth:"500px"}} className='single_tenant_sec_img' src={customAIModel} alt="unable to load image check your internet connection" />
   </section>
 


  <section className='space-container  single_tenant_container'>
    <h2 className='single_tenant_sec_heading'>Model Development<span style={{color:"#666AE5"}}> Life Cycle</span>  </h2>
    <p className='single_tenant_sec_para'>Our comprehensive approach ensures high-quality, production-ready AI models:</p>
    <div className='aside_container'>
                    <ul className='aside_box'>
                        <li ><span className='single_tenant_sec_para'>Requirements Analysis</span><br /> Define clear objectives and success metrics for your AI model</li>
                        <li><span className='single_tenant_sec_para'> Data Preparation  </span><br />Clean, preprocess, and augment training data for optimal results</li>
                        <li><span className='single_tenant_sec_para'> Model Architecture Design </span><br />Create custom neural networks and model architectures</li>
                        <li><span className='single_tenant_sec_para'>Training & Optimization </span><br /> Implement advanced training techniques with performance monitoring</li>
                    </ul>

                    <div className='img_box'>
                        <img className='single_tenant_sec_img' style={{ width:"100%" , maxWidth:"470px"
                        }} src={devToProduction}  alt="unable to load image check your internet connection" />
                    </div>
                </div>
    </section>



    <section className='bg-[#f5f5f5] space-container single_tenant_sec single_tenant_container'>
                <h2 className='single_tenant_sec_heading'>Validation & <span style={{ color: "#666AE5" }}>Testing </span></h2>
                <p className='single_tenant_sec_para'> Ensure model reliability through rigorous validation:</p>

                <div className='flex justify-between w-full h-[70vh] items-center'>

                    <div className='w-[50%] p-2'>
                        <img className='single_tenant_sec_img' style={{
                            width: "100%"
                        }} src={ValidationAndTesting} alt="unable to load image check your internet connection" />
                    </div>

                    <div className='w-[50%] p-2 flex justify-end'>

                        <ul className=' flex flex-col gap-9'>
                            <li className='text-lg'><span className='single_tenant_sec_para'>Cross-Validation</span><br />Verify model performance across different data subsets</li>
                            <li><span className='single_tenant_sec_para'> Performance Metrics    </span><br />Comprehensive evaluation using industry-standard metrics</li>
                            <li><span className='single_tenant_sec_para'>  Error Analysis</span><br /> Detailed investigation of model behavior and edge cases</li>
                            <li><span className='single_tenant_sec_para'>Bias Testing</span><br /> Ensure fair and unbiased model predictions</li>

                        </ul>
                    </div>

                </div>
            </section>


            <section className='space-container  single_tenant_container'>
    <h2 className='single_tenant_sec_heading'>Model<span style={{color:"#666AE5"}}> Deployment</span>  </h2>
    <p className='single_tenant_sec_para'>Seamlessly transition from development to production:</p>
    <div className='aside_container'>
                    <ul className='aside_box'>
                        <li ><span className='single_tenant_sec_para'>Infrastructure Setup</span><br /> Configure scalable deployment environments</li>
                        <li><span className='single_tenant_sec_para'> API Development  </span><br />Create robust APIs for model integration</li>
                        <li><span className='single_tenant_sec_para'>  Performance Optimization </span><br />Fine-tune model efficiency for production</li>
                        <li><span className='single_tenant_sec_para'>Monitoring Systems </span><br /> Implement real-time performance tracking</li>
                    </ul>

                    <div className='img_box'>
                        <img className='single_tenant_sec_img'  style={{ width:"100%" , maxWidth:"470px"}}
                         src={ devlopmentLifeCycle} alt="unable to load image check your internet connection" />
                    </div>
                </div>
    </section>



    <section className='bg-[#f5f5f5] space-container single_tenant_sec single_tenant_container'>
                <h2 className='single_tenant_sec_heading'>Ongoing  <span style={{ color: "#666AE5" }}>Support </span></h2>
                <p className='single_tenant_sec_para'>Ensure long-term model success with our maintenance services:</p>

                <div className='flex justify-between w-full h-[70vh] items-center'>

                    <div className='w-[50%] p-2'>
                        <img className='single_tenant_sec_img' style={{
                            width: "100%", maxWidth:"470px"
                        }} src={ongoingSupport} alt="unable to load image check your internet connection" />
                    </div>

                    <div className='w-[50%] p-2 flex justify-end'>

                        <ul className=' flex flex-col gap-9'>
                            <li className='text-lg'><span className='single_tenant_sec_para'>Model Updates</span><br /> Regular retraining with new data</li>
                            <li><span className='single_tenant_sec_para'>Performance Monitoring   </span><br />Continuous tracking of model accuracy</li>
                            <li><span className='single_tenant_sec_para'>Technical Support</span><br /> Expert assistance for any issues</li>
                            <li><span className='single_tenant_sec_para'>Documentation </span><br /> Comprehensive technical documentation and usage guides</li>

                        </ul>
                    </div>

                </div>
                <p className='single_tenant_sec_para'>Ready to develop custom AI models for your business? Contact our team to discuss your requirements and start building intelligent solutions today.</p>
            </section>
   </>
  )
}

export default index
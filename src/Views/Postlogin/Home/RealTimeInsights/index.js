// import React from 'react'
// import "../../../../Assets/Styles/pages/SaasArchitecture/index.css"

// import appServices from "../../../../Assets/Images/appServices.png"
// import CommonServices from "../../../../Assets/Images/CommonServices.png"
// import lifeCycle from "../../../../Assets/Images/lifeCycle.png"
// import appBlock from "../../../../Assets/Images/appBlock.png"
// import Operationsmanagement from "../../../../Assets/Images/Operationsmanagement .png"
// import EmailAutomation from "../../../../Assets/Images/emailAutomation.png"
// import DataAnalyticsSolutions from "../../../../Assets/Images/Data Analytics Solutions.png"
// import PredictiveAnalytics from "../../../../Assets/Images/Predictive Analytics.png"
// import PerformanceAnalytics from "../../../../Assets/Images/Performance Analytics.png"
// import PiplineAutomation from "../../../../Assets/Images/pipelineautomation.png"
// import DataAnalytics from "../../../../Assets/Images/Data Analytics.jpg"
// import featuredEng from "../../../../Assets/Images/featuredEng.png"
// import Benefits from "../../../../Assets/Images/realTimeBeni.jpg"
// import { useNavigate } from 'react-router-dom'
// const index = () => {

//     //   }
//     return (
//         <>

// {/* section 1  */}
//             <section className='space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'>AI-Powered<span style={{ color: "#666AE5" }}> Data Analytics</span>  Solutions</h2>
//                 <p className='single_tenant_sec_para'>Unlock actionable insights and drive data-driven decision-making with our comprehensive AI-powered analytics solutions. Transform raw data into strategic advantages through advanced machine learning and predictive modeling.</p>
//                 <img className='single_tenant_sec_img' style={{width:"70%" , maxWidth:"700px"}} src={DataAnalyticsSolutions} alt="unable to load image check your internet connection" />
//             </section>

//  {/* section 2 */}
//             <section className='space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'>Predictive<span style={{ color: "#666AE5" }}> Analytics</span> </h2>
//                 <p className='single_tenant_sec_para'>Anticipate future trends and make proactive decisions:</p>
//                 <div className='aside_container'>
//                     <ul className='aside_box'>
//                         <li ><span className='single_tenant_sec_para'>Demand Forecasting</span><br /> Predict future market demands and trends</li>
//                         <li><span className='single_tenant_sec_para'>Risk Analysis </span><br />Identify and mitigate potential business risks</li>
//                         <li><span className='single_tenant_sec_para'>Customer Behavior Prediction </span><br />Anticipate customer needs and preferences</li>
//                         <li><span className='single_tenant_sec_para'>Market Trend Analysis </span><br />Stay ahead of market changes and opportunities</li>
//                     </ul>

//                     <div className='img_box'>
//                         <img className='single_tenant_sec_img' style={{
//                         }} src={PredictiveAnalytics} alt="unable to load image check your internet connection" />
//                     </div>
//                 </div>

//             </section>



// {/* section 3  */}
//             <section className='space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'>Performance<span style={{ color: "#666AE5" }}> Analytics</span> </h2>
//                 <p className='single_tenant_sec_para'>Optimize operations with data-driven insights:</p>

//                 <div className='aside_container'>
//                 <div className='img_box'>
//                         <img className='single_tenant_sec_img' style={{
//                         }} src={PerformanceAnalytics} alt="unable to load image check your internet connection" />
//                     </div>

//                        <div className='right_aside_box'>
//                     <ul>
//                         <li ><span className='single_tenant_sec_para'>Operational Efficiency</span><br /> Track and improve business processes</li>
//                         <li><span className='single_tenant_sec_para'>Resource Optimization</span><br />Maximize resource allocation and utilization</li>
//                         <li><span className='single_tenant_sec_para'>Quality Analytics</span><br />Monitor and enhance service quality</li>
//                         <li><span className='single_tenant_sec_para'>Cost Analysis  </span><br />Identify cost-saving opportunities</li>
//                     </ul>
//                     </div>
//                 </div>
//              </section>


// {/* sec 4 */}
//             <section className='space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'>Feature Engineering &<span style={{ color: "#666AE5" }}> Data Transformation</span> </h2>
//                 <p className='single_tenant_sec_para'>Transform raw data into AI-ready formats with our advanced preprocessing solutions:</p>

//                 <div className='aside_container'>
//                     <ul className='aside_box'>
//                         <li ><span className='single_tenant_sec_para'>Automated Feature Selection</span><br />Identify and extract the most relevant features for your ML models</li>
//                         <li><span className='single_tenant_sec_para'>Data Cleansing  </span><br /> Intelligent handling of missing values, outliers, and inconsistencies</li>
//                         <li><span className='single_tenant_sec_para'>Feature Creation </span><br />Generate sophisticated derived features to enhance model performance</li>
//                         <li><span className='single_tenant_sec_para'>Data Normalization  </span><br /> Standardize data formats for optimal AI processing</li>
//                     </ul>

//                     <div className='img_box'>
//                         <img className='single_tenant_sec_img' style={{
//                         }} src={featuredEng} alt="unable to load image check your internet connection" />
//                     </div>
//                 </div>
//              </section>


// {/* section 5  */}
//             <section className='space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'>AI  <span style={{ color: "#666AE5" }}>Data </span>Pipeline<span style={{ color: "#666AE5" }}> Automation</span> </h2>
//                 <p className='single_tenant_sec_para'>Streamline your data preparation workflow:</p>
//                 <div className='aside_container'>
//                 <div className='img_box'>
//                         <img className='single_tenant_sec_img' style={{ width:"100%" , maxWidth:"470px"
//                         }} src={PiplineAutomation} alt="unable to load image check your internet connection" />
//                     </div>

//                        <div className='right_aside_box'>
//                     <ul>
//                         <li ><span className='single_tenant_sec_para'>Automated ETL Processes</span><br />Seamless extraction, transformation, and loading of data</li>
//                         <li><span className='single_tenant_sec_para'>  Real-time Data Processing</span><br />Process and transform data streams in real-time</li>
//                         <li><span className='single_tenant_sec_para'>   Data Quality Monitoring </span><br />Continuous validation and quality assurance</li>
//                         <li><span className='single_tenant_sec_para'>   Scalable Infrastructure  </span><br /> Cloud-ready solutions that grow with your data needs</li>
//                     </ul>
//                     </div>
//                 </div>
//                  <p className='single_tenant_sec_para'>Transform your raw data into AI-ready assets with our comprehensive data engineering solutions. Contact us to learn how we can optimize your data for AI applications. 🚀</p>
//             </section>


// {/* section 6 */}
//             <section className='space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'>Benefits of <span style={{ color: "#666AE5" }}> AI-Powered Data</span> Solutions</h2>
//                 <p className='single_tenant_sec_para'>Leverage the full potential of your data assets with our advanced AI solutions:</p>
//                 <div className='aside_container'>
//                     <ul className='aside_box'>
//                         <li ><span className='single_tenant_sec_para'>Enhanced Decision Making</span><br /> Make informed decisions backed by sophisticated data analysis and predictive insights</li>
//                         <li><span className='single_tenant_sec_para'>Competitive Advantage  </span><br />Stay ahead of market trends with real-time analytics and predictive modeling</li>
//                         <li><span className='single_tenant_sec_para'>Operational Excellence </span><br /> Optimize processes and reduce costs through data-driven insights</li>
//                         <li><span className='single_tenant_sec_para'>Scalable Growth  </span><br />Future-proof your business with AI solutions that grow with your needs</li>
//                     </ul>

//                     <div className='img_box'>
//                         <img className='single_tenant_sec_img' style={{ width:"100%" , maxWidth:"400px"
//                         }} src={Benefits} alt="unable to load image check your internet connection" />
//                     </div>
//                 </div>
//                  <p className='single_tenant_sec_para'>Ready to harness the power of AI for your data transformation journey? Contact us today to explore how our AI-powered data solutions can drive your business forward. 🚀</p>
//             </section>

//         </>
//     )
// }

// export default index




// import React from 'react'
// import "../../../../Assets/Styles/pages/SaasArchitecture/index.css"

// import appServices from "../../../../Assets/Images/appServices.png"
// import CommonServices from "../../../../Assets/Images/CommonServices.png"
// import lifeCycle from "../../../../Assets/Images/lifeCycle.png"
// import appBlock from "../../../../Assets/Images/appBlock.png"
// import Operationsmanagement from "../../../../Assets/Images/Operationsmanagement .png"
// import { useNavigate } from 'react-router-dom'

// import EmailAutomation from ".././../../../Assets/Images/emailAutomation.png"
// import sericeDeskImg from ".././../../../Assets/Images/sericedesk automation.svg"
// import CRMAutomationImg from ".././../../../Assets/Images/CRM Automation.svg"
// import InventoryManagementImg from ".././../../../Assets/Images/Inventory Management Automation.svg"
// import FinancialImg from ".././../../../Assets/Images/Financial Process Automation.png"
// import HRProcessImg from ".././../../../Assets/Images/HR Process Automation.svg"
// import BenefitsImage from ".././../../../Assets/Images/beneAutomation Solutions.png"
// import BusinessAutomationSolution from ".././../../../Assets/Images/BusinessAutomationHero.png"

// const index = () => {
//     //   const navigate = useNavigate()
//     //   const navigateToProcess = ()=>{
//     //     navigate('/process')
//     //   }
//     return (
//         <>
//             {/* sec 1  */}
//             <section className='space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'>AI-Powered<span style={{ color: "#666AE5" }}> Business Automation</span>  Solutions</h2>
//                 <p className='single_tenant_sec_para'>Transform your business operations with our comprehensive suite of intelligent automation services. Our AI-driven solutions streamline workflows, reduce manual effort, and boost productivity across your organization.</p>

//                 <img className='single_tenant_sec_img' style={{width:"70%" , maxWidth:"600px" }} src={BusinessAutomationSolution} alt="unable to load image check your internet connection" />
//             </section>

//             {/* section 2 */}
//             <section className=' bg-[#e6e6fa] space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'>Email<span style={{ color: "#666AE5" }}>  Automation</span> Excellence</h2>
//                 <p className='single_tenant_sec_para'>Revolutionize your email communications with AI-powered automation:</p>

//                 <div className='flex justify-between w-full h-[70vh] items-center'>
//                     <ul className='w-[50%] p-2 flex flex-col gap-9'>
//                         <li className='text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl'><span className='single_tenant_sec_para'>Smart Email Classification</span><br />Automatically categorize and prioritize incoming emails</li>
//                         <li><span className='single_tenant_sec_para'> Intelligent Response Generation</span><br />Auto-draft contextual responses for common inquiries</li>
//                         <li><span className='single_tenant_sec_para'> Automated Follow-ups</span><br />Schedule and manage follow-up sequences</li>
//                         <li><span className='single_tenant_sec_para'> Email Analytics</span><br />Track engagement metrics and optimize communication strategies</li>

//                     </ul>

//                     <div className='w-[50%] p-2'>
//                         <img className='single_tenant_sec_img' style={{
//                             width: "100%"
//                         }} src={EmailAutomation} alt="unable to load image check your internet connection" />
//                     </div>
//                 </div>
//             </section>


//             {/* section 3 */}
//             <section className='bg-[#f5f5f5] space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>Service  Desk </span> Automation</h2>
//                 <p className='single_tenant_sec_para'>Enhance your customer support with intelligent service desk solutions:</p>

//                 <div className='flex justify-between w-full h-[70vh] items-center'>

//                     <div className='w-[50%] p-2'>
//                         <img className='single_tenant_sec_img' style={{
//                             width: "100%"
//                         }} src={sericeDeskImg} alt="unable to load image check your internet connection" />
//                     </div>

//                     <div className='w-[50%] p-2 flex justify-end'>

//                         <ul className=' flex flex-col gap-9'>
//                             <li className='text-lg'><span className='single_tenant_sec_para'>AI Ticket Routing</span><br />Automatically assign tickets to the right department or specialist</li>
//                             <li><span className='single_tenant_sec_para'> 24/7 Virtual Support    </span><br />AI-powered chatbots for round-the-clock customer assistance</li>
//                             <li><span className='single_tenant_sec_para'> Predictive Issue Resolution</span><br />Anticipate and address problems before they escalate</li>
//                             <li><span className='single_tenant_sec_para'>Knowledge Base Automation</span><br /> Auto-update and maintain your support documentation</li>

//                         </ul>
//                     </div>

//                 </div>
//             </section>

//             {/* section 4  */}
//             <section className='bg-[#e8f5e9] space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>CRM Automation </span> Excellence</h2>
//                 <p className='single_tenant_sec_para'>Maximize customer relationships with intelligent CRM automation:</p>

//                 <div className='flex justify-between w-full h-[70vh] items-center'>
//                     <ul className='w-[50%] p-2 flex flex-col gap-9'>
//                         <li className='text-lg'><span className='single_tenant_sec_para'>Lead Scoring & Qualification</span><br /> Automatically evaluate and prioritize sales opportunities</li>
//                         <li><span className='single_tenant_sec_para'>Customer Journey Mapping </span><br />Track and optimize customer interactions automatically</li>
//                         <li><span className='single_tenant_sec_para'>Sales Pipeline Automation</span><br />Streamline deal progress and follow-ups</li>
//                         <li><span className='single_tenant_sec_para'>Customer Analytics</span><br />Generate actionable insights from customer data</li>

//                     </ul>

//                     <div className='w-[50%] p-2'>
//                         <img className='single_tenant_sec_img' style={{
//                             width: "100%"
//                         }} src={CRMAutomationImg} alt="unable to load image check your internet connection" />
//                     </div>
//                 </div>
//             </section>


//             {/* section 5 */}
//             <section className='bg-[#e3f2fd] space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>Inventory Management </span> Automation</h2>
//                 <p className='single_tenant_sec_para'>Optimize your inventory control with AI-driven automation:</p>

//                 <div className='flex justify-between w-full h-[70vh] items-center'>

//                     <div className='w-[50%] p-2'>
//                         <img className='single_tenant_sec_img' style={{
//                             width: "100%"
//                         }} src={InventoryManagementImg} alt="unable to load image check your internet connection" />
//                     </div>

//                     <div className='w-[50%] p-2 flex justify-end'>

//                         <ul className=' flex flex-col gap-9'>
//                             <li className='text-lg'><span className='single_tenant_sec_para'>Real-time Stock Tracking</span><br /> Automatically monitor inventory levels across locations</li>
//                             <li><span className='single_tenant_sec_para'> Smart Reordering     </span><br />  AI-powered automated purchase orders based on demand prediction</li>
//                             <li><span className='single_tenant_sec_para'>  Inventory Analytics</span><br /> Advanced reporting and insights for better stock management</li>
//                             <li><span className='single_tenant_sec_para'> Supplier Management</span><br /> Automated vendor communications and order processing</li>

//                         </ul>
//                     </div>

//                 </div>
//             </section>

//             {/* section 6 */}

//             <section className='bg-[#fff3e0] space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>Financial Process </span> Automation</h2>
//                 <p className='single_tenant_sec_para'>Streamline your financial operations with intelligent automation:</p>

//                 <div className='flex justify-between w-full h-[70vh] items-center'>
//                     <ul className='w-[50%] p-2 flex flex-col gap-9'>
//                         <li className='text-lg'><span className='single_tenant_sec_para'>Invoice Processing</span><br />Automated invoice capture, validation, and approval workflows</li>
//                         <li><span className='single_tenant_sec_para'>Payment Reconciliation</span><br />AI-powered matching of payments with invoices</li>
//                         <li><span className='single_tenant_sec_para'> Expense Management</span><br />Automated expense categorization and approval</li>
//                         <li><span className='single_tenant_sec_para'>Financial Reporting</span><br />  Automated generation of financial statements and reports</li>

//                     </ul>

//                     <div className='w-[50%] p-2'>
//                         <img className='single_tenant_sec_img' style={{
//                             width: "100%"
//                         }} src={FinancialImg} alt="unable to load image check your internet connection" />
//                     </div>
//                 </div>

//             </section>



//             {/*  section 7 */}
//             <section className='bg-[#eceff1] space-container single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'><span style={{ color: "#666AE5" }}>HR Process </span> Automation</h2>
//                 <p className='single_tenant_sec_para'>Transform your HR operations with AI-powered solutions:</p>

//                 <div className='flex justify-between w-full h-[70vh] items-center'>

//                     <div className='w-[50%] p-2'>
//                         <img className='single_tenant_sec_img' style={{
//                             width: "100%"
//                         }} src={HRProcessImg} alt="unable to load image check your internet connection" />
//                     </div>

//                     <div className='w-[50%] p-2 flex justify-end'>

//                         <ul className=' flex flex-col gap-9'>
//                             <li className='text-lg'><span className='single_tenant_sec_para'>Recruitment Automation </span><br />  Smart candidate screening and interview scheduling</li>
//                             <li><span className='single_tenant_sec_para'>Employee Onboarding   </span><br />    Automated documentation and training workflows</li>
//                             <li><span className='single_tenant_sec_para'> Leave Management</span><br /> Automated leave request processing and tracking</li>
//                             <li><span className='single_tenant_sec_para'> Performance Analytics </span><br />AI-driven employee performance tracking and reporting</li>

//                         </ul>
//                     </div>

//                 </div>
//                 <p className='single_tenant_sec_para'>Transform your business efficiency with our comprehensive automation solutions. Contact us to learn more about implementing these powerful tools in your organization.</p>
//             </section>


//             {/* section 8 */}
//             <section className='space-container bg-[#f3e5f5] single_tenant_sec single_tenant_container'>
//                 <h2 className='single_tenant_sec_heading'>Benefits of Our <span style={{ color: "#666AE5" }}> Automation Solutions</span></h2>
//                 <img className='single_tenant_sec_img' src={BenefitsImage} style={{maxWidth:"700px"}} alt="unable to load image check your internet connection" />
//                 <p className='single_tenant_sec_para'>Ready to automate your business processes? Contact us to discover how our AI-powered automation solutions can transform your operations. 🚀</p>
//             </section>

//         </>
//     )
// }

// export default index





import { Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MissionIcon from "../../../../Assets/Images/MissionIcon.svg"
import backgroundImage from "../../../../Assets/Images/benifitsBackground.png"

import EfficiencyIcon from "../../../../Assets/Images/EfficiencyIcon.svg"
import growthIcon from "../../../../Assets/Images/growthIcon.svg"
import operationsIcon from "../../../../Assets/Images/Operations.svg"

const Index = () => {
  const navigate = useNavigate()
  const steps = [
    {
      background: "bg-[#EABFD4]",
      title: "Predictive Analytics",
      desc: "Anticipate future trends and make proactive decisions:",
      icon: "📊",
      color: "bg-purple-100",
      points: [
        "Demand Forecasting - Predict future market demands and trends",
        "Risk Analysis - Identify and mitigate potential business risks",
        "Customer Behavior Prediction - Anticipate customer needs and preferences"
        , "Market Trend Analysis - Stay ahead of market changes and opportunities"
      ]
    },
    {
      background: "bg-[#D1D6E8]",
      title: "Performance Analytics",
      desc: "Optimize operations with data-driven insights:",
      icon: "🚀",
      color: "bg-blue-100",
      points: [
        "Operational Efficiency - Track and improve business processes",
        "Resource Optimization - Maximize resource allocation and utilization",
        "Quality Analytics - Monitor and enhance service quality",
        "Cost Analysis - Identify cost-saving opportunities"
      ]
    },
    {
      background: "bg-[#EABFD4]",
      title: "Feature Engineering & Data Transformation",
      desc: "Transform raw data into AI-ready formats with our advanced preprocessing solutions:",
      icon: "💻",
      color: "bg-green-100",
      points: [
        "Automated Feature Selection - Identify and extract the most relevant features for your ML models",
        "Data Cleansing - Intelligent handling of missing values, outliers, and inconsistencies",
        "Feature Creation - Generate sophisticated derived features to enhance model performance",
        "Data Normalization - Standardize data formats for optimal AI processing"
      ]
    },
    // {
    //   background: "bg-[#A7D6EB]",
    //   title: "AI Data Pipeline Automation",
    //   desc: "Streamline your data preparation workflow:",
    //   icon: "🤖",
    //   color: "bg-yellow-100",
    //   points: [
    //     "Automated ETL Processes - Seamless extraction, transformation, and loading of data",
    //     "Real-time Data Processing - Process and transform data streams in real-time",
    //     "Data Quality Monitoring - Continuous validation and quality assurance",
    //     "Scalable Infrastructure - Cloud-ready solutions that grow with your data needs"
    //   ]
    // },

  ];

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className='single_tenant_sec_heading text-balance'>
              <span style={{ color: "#666AE5" }}>AI-Powered</span> Data  <span style={{ color: "#666AE5" }}>Analytics</span> Solutions

            </h1>
            <p className=' single_tenant_sec_para'>Unlock actionable insights and drive data-driven decision-making with our comprehensive AI-powered analytics solutions. Transform raw data into strategic advantages through advanced machine learning and predictive modeling.</p>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative group   ${step.background}  rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
              >

                <div className={`bg-white m-auto  w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
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

          <div className="grid mt-8  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">

{/* dami div for centeting the card */}
<div></div>
            <div

              className={`relative group  bg-[#A7D6EB]  rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
            >

              <div className={`bg-white m-auto  w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl text-center font-semibold text-gray-800 mb-4">
                {/* <span className="mr-2 text-blue-600">{index + 1}.</span> */}
                AI Data Pipeline Automation
              </h3>

              <p className=' mb-4'>Streamline your data preparation workflow:</p>

              <ul className="space-y-3">
                <li className="flex items-start text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Automated ETL Processes - Seamless extraction, transformation, and loading of data
                </li>
                <li className="flex items-start text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Real-time Data Processing - Process and transform data streams in real-time
                </li>

                <li className="flex items-start text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Data Quality Monitoring - Continuous validation and quality assurance
                </li> <li className="flex items-start text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Scalable Infrastructure - Cloud-ready solutions that grow with your data needs
                </li>

              </ul>
            </div>

          </div>
          <p className='single_tenant_sec_para text-balance pt-20 '>Transform your raw data into AI-ready assets with our comprehensive data engineering solutions. Contact us to learn how we can optimize your data for AI applications. 🚀</p>

        </div>
      </div>


      <div className='pt-[50px] pb-[50px] w-full pl-[30px] pr-[30px] flex flex-col  justify-center  relative overflow-hidden'>
        <h2 className='text-center relative z-10  text-[2.50rem] font-bold leading-[40px] uppercase text-[#000000] mb-[30px] font-[poppins] '>Benefits of ai-powered data Solutions</h2>



        <Grid className='flex gap-3 justify-between z-10 relative'   >
          <Grid className='w-[400px]'>
            <div className='flex  flex-col items-center gap-4'>
              <img className='w-[90px]' src={EfficiencyIcon} alt="unable to load image check your internet connection" />
              <h2 className='text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>enhances Decision Making</h2>
              <p className='font-[poppins] text-[13px] font-[400] text-[#333333] text-center text-balance'>Make informed decisions backed by sophisticated data analysis and predictive insights</p>
            </div>
          </Grid>


          <Grid className='w-[400px]'>
            <div className='flex  flex-col items-center gap-4'>
              <img className='w-[90px]' src={MissionIcon} alt="unable to load image check your internet connection" />
              <h2 className='text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Competitive Advantage</h2>
              <p className='font-[poppins] text-[13px] font-[400] text-[#333333] text-center text-balance'>Stay ahead of market trends with real-time analytics and predictive modeling</p>
            </div>
          </Grid>


          <Grid className='w-[400px]'>
            <div className='flex  flex-col items-center gap-4'>
              <img className='w-[90px]' src={operationsIcon} alt="unable to load image check your internet connection" />
              <h2 className='text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Operational Excellence</h2>
              <p className='font-[poppins] text-[13px] font-[400] text-[#333333] text-center text-balance'>Optimize processes and reduce costs through data-driven insights</p>
            </div>
          </Grid>



          <Grid className='w-[400px]'>
            <div className='flex  flex-col items-center gap-4'>
              <img className='w-[90px]' src={growthIcon} alt="unable to load image check your internet connection" />
              <h2 className='text-[21px] font-bold font-[poppins] uppercase text-[#000000]'>Scalable Growth</h2>
              <p className='font-[poppins] text-[13px] font-[400] text-[#333333] text-center text-balance'>Future-proof your business with AI solutions that grow with your needs</p>
            </div>
          </Grid>

        </Grid>

        <p className='single_tenant_sec_para z-10 relative text-balance pt-10'>Ready to harness the power of AI for your data transformation journey? Contact us today to explore how our AI-powered data solutions can drive your business forward. 🚀</p>

        <img className='absolute z-0 top-0 left-0 right-0 bottom-0' src={backgroundImage} alt="" />
      </div>

    </>
  );
};

export default Index;

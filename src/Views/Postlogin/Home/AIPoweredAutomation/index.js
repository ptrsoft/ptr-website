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


 

import React from 'react';
import { useNavigate } from 'react-router-dom';
import AboutUsBox from '../../AboutUs/components/AboutUsBox';
import backgroundImage from "../../../../Assets/Images/benifitsBackground.png"
import MissionIcon from "../../../../Assets/Images/MissionIcon.svg"
import EfficiencyIcon from "../../../../Assets/Images/EfficiencyIcon.svg"
import AccuracyIcon from "../../../../Assets/Images/Accuracy.svg"
import growthIcon from "../../../../Assets/Images/growthIcon.svg"
import operationsIcon from "../../../../Assets/Images/Operations.svg"
import optimazationIcon from "../../../../Assets/Images/optimazationIcon.svg"
import { Grid } from '@mui/material';


   const Index = () => {
  const navigate = useNavigate()
  const steps = [
    {
      title: "Email Automation Excellence",
      background:"bg-[#EABFD4]",
      desc:"Revolutionize your email communications with AI-powered automation:",
      icon: "📧",
      color: "bg-purple-100",
      points: [
         "Smart Email Classification - Automatically categorize and prioritize incoming emails",
         "Intelligent Response Generation - Auto-draft contextual responses for common inquiries",
         "Automated Follow-ups - Schedule and manage follow-up sequences",
         "Email Analytics - Track engagement metrics and optimize communication strategies",
      ]
    },
    {
      background:"bg-[#D1D6E8]",
      title: "Service Desk Automation",
      desc:"Enhance your customer support with intelligent service desk solutions:",
      icon: "🧑‍💻",
      color: "bg-blue-100",
      points: [
        "AI Ticket Routing - Automatically assign tickets to the right department or specialist",
        "24/7 Virtual Support - AI-powered chatbots for round-the-clock customer assistance",
        "Predictive Issue Resolution - Anticipate and address problems before they escalate",
        "Knowledge Base Automation - Auto-update and maintain your support documentation"
       ]
    },
    {
      title: "CRM Automation Excellence",
      background:"bg-[#EABFD4]",
      desc:"Maximize customer relationships with intelligent CRM automation",
      icon: " 🧑‍💼",
      color: "bg-green-100",
      points: [
        "Lead Scoring & Qualification - Automatically evaluate and prioritize sales opportunities",
         "Customer Journey Mapping - Track and optimize customer interactions automatically",
         "Sales Pipeline Automation - Streamline deal progress and follow-ups",
        "Customer Analytics - Generate actionable insights from customer data"
      ]
    },
    {
      background:"bg-[#A7D6EB]",
      title: "Inventory Management Automation",
      desc:"Optimize your inventory control with AI-driven automation:",
      icon: "📦",
      color: "bg-yellow-100",
      points: [
        "Real-time Stock Tracking - Automatically monitor inventory levels across locations",
        "Smart Reordering - AI-powered automated purchase orders based on demand prediction",
        "Inventory Analytics - Advanced reporting and insights for better stock management",
         "Supplier Management - Automated vendor communications and order processing"
      ]
    },
    {
      title: "Financial Process Automation",
      background:"bg-[#C0E8F3]",
      desc:"Streamline your financial operations with intelligent automation:",
      icon: "💰",
      color: "bg-orange-100",
      points: [
         "Invoice Processing - Automated invoice capture, validation, and approval workflows",
         "Payment Reconciliation - AI-powered matching of payments with invoices",
         "Expense Management - Automated expense categorization and approval",
         "Financial Reporting - Automated generation of financial statements and reports"
      ]
    },
    {
      background:"bg-[#A7D6EB]",
      title: "HR Process Automation",
      desc:"Transform your HR operations with AI-powered solutions:",
      icon: "📋",
      color: "bg-pink-100",
      points: [
  "Recruitment Automation - Smart candidate screening and interview scheduling",
  "Employee Onboarding - Automated documentation and training workflows",
  "Leave Management - Automated leave request processing and tracking",
  "Performance Analytics - AI-driven employee performance tracking and reporting"
      ]
    }
  ];

  return (
    <>

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
     
        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 pt-8 sm:pt-0">
          <h1 className='single_tenant_sec_heading text-2xl sm:text-3xl lg:text-4xl text-balance'>
          <span style={{color:"#666AE5"}}>AI-Powered</span> Business  <span style={{color:"#666AE5"}}>Automation</span> Solutions
          </h1>
         <p className='text-balance single_tenant_sec_para text-sm sm:text-base lg:text-lg mt-4'>Transform your business operations with our comprehensive suite of intelligent automation services. Our AI-driven solutions streamline workflows, reduce manual effort, and boost productivity across your organization.</p>
        </div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative group ${step.background} rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
            >
              
              <div className={`bg-white w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex m-auto items-center justify-center mb-4 sm:mb-6`}>
                <span className="text-2xl sm:text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl text-center font-semibold text-gray-800 mb-3 sm:mb-4">
                {step.title}
              </h3>
              <p className='text-sm sm:text-base mb-3 sm:mb-4'>{step.desc}</p>

              <ul className="space-y-2 sm:space-y-3">
                {step.points.map((point, i) => (
                  <li key={i} className="flex items-start text-sm sm:text-base text-gray-600">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className='single_tenant_sec_para text-balance pt-12 sm:pt-16 lg:pt-20 text-sm sm:text-base lg:text-lg'>Transform your business efficiency with our comprehensive automation solutions. Contact us to learn more about implementing these powerful tools in your organization. 🚀</p>
      </div>
    </div>

    <div className='pt-8 sm:pt-12 lg:pt-[50px] pb-8 sm:pb-12 lg:pb-[50px] w-full px-4 sm:px-6 lg:px-[30px] flex flex-col justify-center relative overflow-hidden'>
      <h2 className='text-center relative z-10 text-xl sm:text-2xl lg:text-[2.50rem] font-bold leading-tight sm:leading-[40px] uppercase text-[#000000] mb-6 sm:mb-8 lg:mb-[30px] font-[poppins]'>Benefits of Our Automation Solutions</h2>

      <Grid className='flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-between z-10 relative'>
        <Grid item xs={6} sm={4} md={2.4}>
          <div className='flex flex-col items-center gap-2 sm:gap-4'>
            <img className='w-16 sm:w-[90px]' src={EfficiencyIcon} alt="unable to load image check your internet connection" />
            <h2 className='text-base sm:text-lg lg:text-[21px] font-bold font-[poppins] text-[#000000]'>Increased Efficiency</h2>
            <p className='font-[poppins] text-xs sm:text-sm lg:text-[13px] font-[400] text-[#333333] text-center'>Reduce manual tasks by up to 80%</p>
          </div>
        </Grid>

        <Grid item xs={6} sm={4} md={2.4}>
          <div className='flex flex-col items-center gap-2 sm:gap-4'>
            <img className='w-16 sm:w-[90px]' src={AccuracyIcon} alt="unable to load image check your internet connection" />
            <h2 className='text-base sm:text-lg lg:text-[21px] font-bold font-[poppins] text-[#000000]'>Enhanced Accuracy</h2>
            <p className='font-[poppins] text-xs sm:text-sm lg:text-[13px] font-[400] text-[#333333] text-center'>Minimize human errors in routine operations</p>
          </div>
        </Grid>

        <Grid item xs={6} sm={4} md={2.4}>
          <div className='flex flex-col items-center gap-2 sm:gap-4'>
            <img className='w-16 sm:w-[90px]' src={operationsIcon} alt="unable to load image check your internet connection" />
            <h2 className='text-base sm:text-lg lg:text-[21px] font-bold font-[poppins] text-[#000000]'>24/7 Operations</h2>
            <p className='font-[poppins] text-xs sm:text-sm lg:text-[13px] font-[400] text-[#333333] text-center'>Maintain business continuity around the clock</p>
          </div>
        </Grid>

        <Grid item xs={6} sm={4} md={2.4}>
          <div className='flex flex-col items-center gap-2 sm:gap-4'>
            <img className='w-16 sm:w-[90px]' src={growthIcon} alt="unable to load image check your internet connection" />
            <h2 className='text-base sm:text-lg lg:text-[21px] font-bold font-[poppins] text-[#000000]'>Scalable Growth</h2>
            <p className='font-[poppins] text-xs sm:text-sm lg:text-[13px] font-[400] text-[#333333] text-center'>Easily adapt to increasing business demands</p>
          </div>
        </Grid>

        <Grid item xs={6} sm={4} md={2.4}>
          <div className='flex flex-col items-center gap-2 sm:gap-4'>
            <img className='w-16 sm:w-[90px]' src={optimazationIcon} alt="unable to load image check your internet connection" />
            <h2 className='text-base sm:text-lg lg:text-[21px] font-bold font-[poppins] text-[#000000]'>Cost Optimization</h2>
            <p className='font-[poppins] text-xs sm:text-sm lg:text-[13px] font-[400] text-[#333333] text-center'>Reduce operational costs while improving service quality</p>
          </div>
        </Grid>
      </Grid>

      <img className='absolute z-0 top-0 left-0 right-0 bottom-0 w-full h-full object-cover' src={backgroundImage} alt="" />
    </div>
    </>
  );
};

export default Index;


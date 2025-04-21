import React from 'react';
import { useNavigate } from 'react-router-dom';
 import ProcessImg from "../../../Assets/Images/AINativeProcess.svg"
 import LikeImages from "../../../Assets/Images/LikeImages.svg"
 import backgroundImage from "../../../Assets/Images/benifitsBackground.png"
const ProcessPage = () => {
  const navigate = useNavigate()
  const steps = [
    {
      title: "Problem Definition & Opportunity:",
      icon: "🔍",
      background:"bg-[#EABFD4]",
      color: "bg-purple-100",
      points: [
         "Clearly define the problem that AI can solve.",
         "Identify opportunities where AI can create significant value.",
         "Focus on problems where AI's unique capabilities (e.g., pattern recognition, prediction, generation) are essential.",
         "This step involves strong user research, and market analysis.",
      ]
    },
    {
      title: "Data Acquisition and Preparation:",
      icon: "📊",
      background:"bg-[#D1D6E8]",
      color: "bg-blue-100",
      points: [
        "Identify and acquire relevant data.",
        "Clean, preprocess, and transform data for AI model training.",
        "This stage is critical, as AI model performance heavily depends on data quality.",
        "Data governance and ethics are very important here.",
      ]
    },
    {
      title: "Model Development and Training:",
      icon: "🧠",
      background:"bg-[#EABFD4]",
      color: "bg-green-100",
      points: [
        "Select and design appropriate AI models (e.g., machine learning, deep learning).",
        "Train models using prepared data.",
        "Evaluate model performance and iterate on model design.",
        "This is where the Ai models are built, and tested.",
      ]
    },
    {
      title: "Integration & Application:",
      icon: "⚙️",
      background:"bg-[#A7D6EB]",
      color: "bg-yellow-100",
      points: [
        "Integrate trained AI models into the product or application.",
        "Develop user interfaces and experiences that leverage AI capabilities.",
        "Focus on seamless and intuitive integration.",
      ]
    },
    {
      title: "Deployment & Monitoring:",
      icon: "🚀",
      background:"bg-[#C0E8F3]",
      color: "bg-orange-100",
      points: [
        "Deploy the AI-powered product or application.",
        "Continuously monitor model performance and data drift.",
        "Establish feedback loops to collect user data and improve the model.",
        "This is where the product goes live.",
      ]
    },
    {
      title: "Iteration & Optimization:",
      icon: "🔄",
      color: "bg-pink-100",
      background:"bg-[#A7D6EB]",
      points: [
        "Iteratively improve the model and product based on user feedback and performance data.",
        "Continuously retrain models with new data.",
        "Adapt to evolving user needs and market conditions.",
        "This is where the product is improved, and refined.",
      ]
    }
  ];

  return (
    <>

<section className='space-container bg-white single_tenant_sec single_tenant_container'>
    <h2 className='single_tenant_sec_heading text-balance'>Ready to build your <span style={{color:'#666AE5'}}>AI-native</span> product?</h2>
    <p className='single_tenant_sec_para'>
    Contact our team to start your development journey with our proven process.
       </p>
    <img style={{width:"100%" }} className='single_tenant_sec_img' src={ProcessImg} alt="unable to load image check your internet connection" />
   </section>

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative ">
     
      <h2 className='single_tenant_sec_heading text-balance'><span style={{color:'#666AE5'}}>AI-native </span>Process</h2>
      <p className='single_tenant_sec_para mb-[70px]'>Our process emphasizes iterative cycles, data-centricity, & continuous learning.</p>
<img src={LikeImages} className='absolute top-0 right-0 w-[180px]' alt="" />
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`${step.background} relative group  rounded-2xl p-6 hover:shadow-lg  transition-all duration-300 hover:-translate-y-2 border border-gray-100`}
            >
               
              <div className={`bg-white m-auto  w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                <span className="text-3xl">{step.icon}</span>
              </div>

              <h3 className="text-xl text-center font-semibold text-gray-800 mb-4">
                {/* <span className="mr-2 text-blue-600">{index + 1}.</span> */}
                {step.title}
              </h3>

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

         
      </div>
    </div>



<div className='pt-[80px] pb-[80px] w-full flex flex-col  justify-center  relative overflow-hidden space-container bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700'>
<h2 className='text-center relative z-10  text-[2.75rem] font-bold leading-[40px] uppercase text-[#000000] mb-[30px] font-[poppins] '>Continuous Innovation Cycle</h2>
<p className='text-balance relative text-[18px] font-[poppins] font-[600] uppercase text-[#000000] z-10 text-center'>Our process never truly ends - we maintain constant feedback loops between stages, enabling rapid iteration and continuous value delivery powered by real-world data and user insights. </p>
<img className='absolute z-0 top-0 left-0 right-0 bottom-0' src={backgroundImage} alt="" />
</div>
    
    </>
  );
};

export default ProcessPage;


 
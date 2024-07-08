import React from 'react'

const SaasArchitecture = () => {
  return (
    <>
    <section className='pad-container pb[100px] bg-[#FEF4F9] pt-[146px] pb-[77px] gap-[20px] flex flex-col items-center justify-center'>

    <div className="TheIntelligenceRevolution"><span className="text-indigo-500 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Single-Tenant </span><span className="text-neutral-800 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Flexibility</span></div>
    <div className=" text-center text-neutral-900 text-2xl font-medium font-['Poppins'] capitalize leading-loose">Each application is uniquely yours, providing unparalleled customization and control.For every <br /> application we instantly provision all App and Data Services for your application.A typical <br /> application services as below:</div>
    <img src='Images/SassArc.png'/>
    </section>


<section className="pad-container gap-[20px]  bg-white flex flex-col items-center justify-center pt-[70px]">
<div className="TheIntelligenceRevolution"><span className="text-indigo-500 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Microservices-Based </span><span className="text-neutral-800 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Design</span></div>
<div className="text-center text-neutral-900 text-2xl font-medium font-['Poppins'] capitalize leading-loose">We use a microservices architecture to ensure scalability, resilience, and efficient resource utilization. We accelerate Microservice development with PTR Appblocks , that cut development time and costs by 50%. Appblocks are common services that every enterprise product uses for common functionalities.</div>    
<img className='w-[1300px]' src='Images/commonservices.png'/>
</section>

<section className="pad-container h-[70vh] pt-[70px]">
<div className=" text-center"><span className="text-neutral-900 text-3xl font-medium font-['Poppins'] capitalize leading-loose">We have readied all </span><span className="text-indigo-500 text-3xl font-medium font-['Poppins'] capitalize leading-loose">lifecycle</span><span className="text-neutral-900 text-3xl font-medium font-['Poppins'] capitalize leading-loose"> for all </span><span className="text-indigo-500 text-3xl font-medium font-['Poppins'] capitalize leading-loose">common services</span><span className="text-neutral-900 text-3xl font-medium font-['Poppins'] capitalize leading-loose"> as follows.</span></div>


</section>
    


    <section className="pad-container h-[70vh]">
    <div className="text-center"><span className="text-neutral-900 text-3xl font-medium font-['Poppins'] capitalize leading-loose">That </span><span className="text-indigo-500 text-3xl font-medium font-['Poppins'] capitalize leading-loose">reduce</span><span className="text-neutral-900 text-3xl font-medium font-['Poppins'] capitalize leading-loose"> our new Application </span><span className="text-indigo-500 text-3xl font-medium font-['Poppins'] capitalize leading-loose">development effort</span><span className="text-neutral-900 text-3xl font-medium font-['Poppins'] capitalize leading-loose"> significantly as below:<br/></span></div>
    </section>


    <section className="pad-container pb-[98px] flex flex-col items-center pt-[80px] gap-[40px] bg-[#8ECAE6]">
        <div className='flex flex-col gap-[6px] items-center'>
    <div><span className="text-indigo-500 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Comprehensive Operations </span><span className="text-neutral-800 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Management</span></div>
    <div className=" text-center text-neutral-900 text-2xl font-medium font-['Poppins'] capitalize leading-10">Our platform includes a full operations management suite, streamlining maintenance and updates.</div>
        </div>

        <img src='Images/Operationsmanagement.png'/>
    </section>


    <section className="pad-container pt-[80px] flex flex-col items-center">
    <div className="TheIntelligenceRevolution"><span className="text-indigo-500 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Cutting-Edge </span><span className="text-neutral-800 text-5xl font-semibold font-['Poppins'] capitalize leading-10">Technology</span></div>
    <div className=" text-center text-neutral-900 text-2xl font-medium font-['Poppins'] capitalize leading-10">Built on the latest technologies, our backend platform ensures robust performance and security.<br/>Explore few simple and some robust architecture that we follow to develop a simple App or a complete cloudnative enterprise product.</div>
    <button className="Rectangle8 w-36 h-11 text-neutral-100 text-base font-bold font-['Poppins'] uppercase leading-3 bg-indigo-500 rounded-full" >Read More</button>
    </section>
    </>
  )
}

export default SaasArchitecture
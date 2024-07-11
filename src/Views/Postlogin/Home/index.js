
import React, { useState } from 'react'
import TextBox from './components/TextBox'
import TextRow from './components/TextRow'

const Home = () => {
    const [selectedButton, setSelectedButton] = useState(1);

    const handleButtonClick = (buttonNumber) => {
      setSelectedButton(buttonNumber);
    };
  return (
    <>
    {/* // heroi section starts */}

<section className='pad-container pt-[6rem] pb-[4rem] flex justify-between items-center bg-[#F5F3EF]'>
  <div className='relative  w-[49%]'>
    <img className='absolute top-6 left-[35rem]' src='Images/XXX.svg' alt='XXX' />
    <img alt='Hero Image' src='Images/Hero.png' />
  </div>

  <div className='w-[49%] relative flex flex-col gap-[2rem]'>
    <div className=''>
      <span className="text-indigo-500 text-5xl font-bold capitalize leading-20 font-poppins">Unlock</span>
      <span className="text-neutral-800 text-5xl font-bold capitalize leading-20 font-poppins"> Unlimited Potential with Fully Customizable<br/></span>
      <span className="text-indigo-500 text-5xl font-bold capitalize leading-20 font-poppins">Open SAAS</span>
      <span className="text-neutral-800 text-5xl font-bold capitalize leading-20 font-poppins"> Solutions</span>
    </div>
    <div className="text-neutral-800 text-base font-medium capitalize leading-loose font-poppins">At PTR SAAS, we deliver fully open and customizable applications, empowering you to effortlessly add new features.</div>

    <div className="Rectangle8 cursor-pointer flex justify-start pl-6 items-center w-52 h-14 bg-neutral-800 rounded-full">
<div className="GetStarted text-neutral-100 text-base font-semibold font-['Poppins'] uppercase leading-3">Get started</div>
<div className="relative left-6 w-14 h-14 flex justify-center items-center bg-indigo-500 rounded-full">
    <img src='Images/arrow.png'/>
</div>
</div>

    <img className='absolute w-[27rem] right-[-3rem] bottom-[-9rem]' src='Images/HeroVector.png' alt='Hero Vector' />
  </div>
</section>




     <section className='pad-container pb-[5.75rem] pt-[8.75rem] flex justify-between items-center bg-[white]'>
<div className='flex w-[51%] flex-col gap-[58px]'>
<div className="ContinuousImprovements"><span className="text-neutral-800 text-[2rem] font-bold font-['Poppins'] capitalize leading-[2rem]">Our platform is built to provide<br/></span><span className="text-indigo-500 text-[2rem] font-bold font-['Poppins'] capitalize leading-[3.125rem]">maximum flexibility</span><span className="text-neutral-800 text-[2rem] font-bold font-['Poppins'] capitalize ">, ensuring it meets your unique business requirements.</span></div>
<div className='flex flex-col gap-[2rem]'>
<div className="flex  gap-[17px] text-neutral-800 text-[1rem] font-semibold font-['Poppins'] capitalize leading-none"> <img src='/Images/plus.svg'/><span>Single Tenant App- Fully private, Fully Customizable</span></div>
<div className="flex gap-[17px] text-neutral-800 text-[1rem] font-semibold font-['Poppins'] capitalize leading-none"> <img src='/Images/plus.svg'/><span>Zero Tech debt- App with all artifacts</span></div>
<div className="flex gap-[17px] text-neutral-800text-[1rem] font-semibold font-['Poppins'] capitalize leading-none"> <img src='/Images/plus.svg'/><span>Complete Open - You own it, you change it with no limit</span></div>
<div className="flex gap-[17px] text-neutral-800 text-[1rem] font-semibold font-['Poppins'] capitalize leading-none"> <img src='/Images/plus.svg'/><span>Highest flexibility - Any cloud / Any Changes</span></div>
<div className="flex gap-[17px] text-neutral-800 text-[1rem] font-semibold font-['Poppins'] capitalize leading-none"> <img src='/Images/plus.svg'/><span>One click E2E Engineering Team - Available On demand to make changes</span></div>
<div className="flex gap-[17px] text-neutral-800 text-[1rem] font-semibold font-['Poppins'] capitalize leading-none"> <img src='/Images/plus.svg'/><span>Vendor Friendly -Deliver Apps to your own customers
</span></div>
</div>
</div>

<div className='w-[49%]'>
    <img className='w-[100%]' src='Images/marketing.png'/>
</div>
    </section> 


        {/* // marketing section endz */}


{/* tabs section 1 */}

<section className='pad-container   relative pt-[142px] pb-[92px] bg-[#F5F3EF]'>

<div className=" text-center"><span className="text-neutral-800 text-4xl font-bold font-['Poppins'] capitalize leading-10">What </span><span className="text-indigo-500 text-4xl font-bold font-['Poppins'] capitalize leading-10">we offer</span><span className="text-neutral-800 text-4xl font-bold font-['Poppins'] capitalize leading-10"> & How </span><span className="text-indigo-500 text-4xl font-bold font-['Poppins'] capitalize leading-10">we do it?</span><span className="text-neutral-800 text-4xl font-bold font-['Poppins'] capitalize leading-10"> </span></div>



{selectedButton === 1 &&  <div className="text-center mt-[2rem]"><span className="text-indigo-500 text-4xl font-bold font-['Poppins'] capitalize leading-10">Open and Customizable</span><span className="text-neutral-800 text-4xl font-bold font-['Poppins'] capitalize leading-10"> Single Tenant Applications</span></div>}
{selectedButton === 2 &&  <div className="text-center mt-[2rem]"><span className="text-neutral-800 text-4xl font-bold font-['Poppins'] capitalize leading-10">High Quality Application with</span> <span className="text-indigo-500 text-4xl font-bold font-['Poppins'] capitalize leading-10"> Zero Tech Debt</span></div>}
{selectedButton === 3 &&  <div className="text-center mt-[2rem]"><span className="text-neutral-800 text-3xl font-bold font-['Poppins'] capitalize leading-10">Apps built with Most </span>  <span className="text-indigo-500 text-3xl font-bold font-['Poppins'] capitalize leading-10"> modern cloud native</span> <span className="text-neutral-800 text-3xl font-bold font-['Poppins'] capitalize leading-10"> Single Tenant architectures </span> </div>}
{selectedButton === 4 &&  <div className="text-center mt-[2rem]"><span className="text-indigo-500 text-4xl font-bold font-['Poppins'] capitalize leading-10">On-Demand</span><span className="text-neutral-800 text-4xl font-bold font-['Poppins'] capitalize leading-10"> Engineering Teams</span></div>}




{/* devide lines */}
<div className='absolute le top-[18.4rem] w-[85%] h-[1px] bg-[#CACACA]'></div>
<div className='absolute  top-[26.4rem] z-0 w-[57%] h-[1px] bg-[#CACACA]'></div>
<div className='absolute  top-[33.6rem] z-0 w-[57%] h-[1px] bg-[#CACACA]'></div>
<div className='absolute  top-[41.1rem] z-0 w-[57%] h-[1px] bg-[#CACACA]'></div>

<div className='absolute bottom-[8rem] z-0 w-[85%] h-[1px] bg-[#CACACA]'></div>

<div className='w-[100%]  h-[35rem] flex justify-between items-center'>

{/* btn containewr */}
{/* <div className='flex  flex-col items-start gap-[2rem]'>
<button onClick={() => handleButtonClick(1)} className="Btn1  h-[] w-[] p-3 pr-6 bg-rose-300 rounded-lg border border-black justify-start items-center gap-4 inline-flex">
    <div className="Icon w-[1.3rem] relative">
        <img src='Images/buttonIcon.svg' />
    </div>
    <div className="CustomizableSingleTenantApps text-black text-[1.3rem] font-medium font-['Poppins'] capitalize leading-normal">Customizable Single-Tenant Apps</div>
</button>

<button onClick={() => handleButtonClick(2)} className="Btn1  h-[88px] w-[522] p-5 bg-[#D4FADA] rounded-lg border border-black justify-start items-center gap-7 inline-flex">
    <div className="Icon w-8 h-11 relative">
        <img src='Images/buttonIcon.svg' />
    </div>
    <div className="CustomizableSingleTenantApps text-black text-2xl font-medium font-['Poppins'] capitalize leading-normal">Customizable Single-Tenant Apps</div>
</button>

<button onClick={() => handleButtonClick(3)} className="Btn1  h-[88px] w-[522] p-5 bg-[#FDE3C7] rounded-lg border border-black justify-start items-center gap-7 inline-flex">
    <div className="Icon w-8 h-11 relative">
        <img src='Images/buttonIcon.svg' />
    </div>
    <div className="CustomizableSingleTenantApps text-black text-2xl font-medium font-['Poppins'] capitalize leading-normal">Customizable Single-Tenant Apps</div>
</button>

<button onClick={() => handleButtonClick(4)} className="Btn1  h-[88px] w-[522] p-5 bg-[#C9BFFE] rounded-lg border border-black justify-start items-center gap-7 inline-flex">
    <div className="Icon w-8 h-11 relative">
        <img src='Images/buttonIcon.svg' />
    </div>
    <div className="CustomizableSingleTenantApps text-black text-2xl font-medium font-['Poppins'] capitalize leading-normal">Customizable Single-Tenant Apps</div>
</button>


</div> */}
<div className='flex  flex-col items-start gap-[3rem]'>
<button onClick={() => handleButtonClick(1)}   className={`Btn1 h-[4.4rem] pl-[1rem] w-[29rem] rounded-lg hover:border border-black justify-start items-center gap-4 inline-flex ${
              selectedButton === 1 ? 'bg-rose-300 border' : 'bg-[#F3C4CD] hover:bg-rose-300'
            }`} >
    <div className="Icon w-[1.8rem] relative">
        <img src='Images/buttonIcon.svg' />
    </div>
    <div className="CustomizableSingleTenantApps text-black text-[1.3rem] font-medium font-['Poppins'] capitalize leading-normal">Customizable Single-Tenant Apps</div>
</button>

<button onClick={() => handleButtonClick(2)} className={`Btn1 h-[4.4rem] pl-[1rem] w-[29rem] rounded-lg hover:border border-black justify-start items-center gap-4 inline-flex ${
              selectedButton === 2 ? 'bg-[#82D38F] border' : 'bg-[#D4FADA] hover:bg-[#82D38F]'
            }`}>
    <div className="Icon  w-[1.8rem]  relative">
        <img src='Images/buttonIcon.svg' />
    </div>
    <div className="CustomizableSingleTenantApps text-black text-[1.3rem] font-medium font-['Poppins'] capitalize leading-normal">Customizable Single-Tenant Apps</div>
</button>

<button onClick={() => handleButtonClick(3)}   className={`Btn1 h-[4.4rem] pl-[1rem] w-[29rem] rounded-lg hover:border border-black justify-start items-center gap-4 inline-flex ${
              selectedButton === 3 ? 'bg-[#E9B986] border' : 'bg-[#FDE3C7] hover:bg-[#E9B986]'
            }`}>
<div className="Icon  w-[1.8rem]  relative">
<img src='Images/buttonIcon.svg' />
    </div>
    <div className="CustomizableSingleTenantApps text-black text-[1.3rem]  font-medium font-['Poppins'] capitalize leading-normal">Customizable Single-Tenant Apps</div>
</button>

<button onClick={() => handleButtonClick(4)}   className={`Btn1 h-[4.4rem] pl-[1rem] w-[29rem] rounded-lg hover:border border-black justify-start items-center gap-4 inline-flex ${
              selectedButton === 4 ? 'bg-[#9B8CEA] border' : 'bg-[#C9BFFE] hover:bg-[#9B8CEA]'
            }`} >
<div className="Icon  w-[1.8rem]  relative">
        <img src='Images/buttonIcon.svg' />
    </div>
    <div className="CustomizableSingleTenantApps text-black text-[1.3rem] font-medium font-['Poppins'] capitalize leading-normal">Customizable Single-Tenant Apps</div>
</button>


</div>
{/* 2nd */}
<div className='w-[23rem] flex  relative bottom-6 z-10'> 
    {selectedButton === 1 && <img src='Images/Tenant.png' alt="Tenant 1" />}
          {selectedButton === 2 && <img src='Images/TechDebt.png' alt="Tenant 2" />}
          {selectedButton === 3 && <img src='Images/nativeArchitectures.png' alt="Tenant 3" />}
          {selectedButton === 4 && <img src='Images/EngineeringTeams.png' alt="Tenant 4" />}
</div>


{/* 3rd */}
<div className='z-20 gap-[75px] justify-start  h-[100%] pt-[6rem] flex flex-col'>
{selectedButton === 1 && <div className="w-96  text-black text-[0.8rem] font-medium font-['Poppins'] leading-loose">Experience unparalleled flexibility with our single-tenant SAAS applications,that is open and tailored to your unique business needs. Explore our robust backend platform and cutting-edge technology, delivering microservices-based enterprise apps with comprehensive operations management.</div>}
          {selectedButton === 2 && <div className="w-96 text-black text-[0.8rem] font-medium font-['Poppins'] leading-loose">At PTR Technology, for every use case that we develop, we follow a robust and efficient software development process designed to deliver high-quality solutions tailored to meet our clients' unique needs. Our approach combines industry best practices with innovative techniques to ensure that every use case is reliable, scalable, and secure and contains all software artifacts. <br /> <br /> Here follows a typical use case development life cycle.
          
          <button className=" w-36  mt-5 h-11 bg-indigo-500 rounded-full text-neutral-100 text-[0.9rem] font-bold font-['Poppins'] uppercase leading-3" >
Read More
</button>
<div className="w-96 text-black text-[0.8rem] relative top-7 font-medium font-['Poppins'] leading-loose">Here follows a typical UXD process cycle.</div>
          
          </div>}
          {selectedButton === 3 && <div className="w-96 text-black text-[0.8rem]  font-medium font-['Poppins'] leading-loose">Whether you're a writing a small mobility App or a large scale enterprise product, we have something for you. Explore our architecture central to learn about the principles, patterns, practices, and tools that we follow to deliver you the solution that is simple, promotes reusability and flexibility and of course very cost effective.</div>}
          {selectedButton === 4 && <div className="w-96 text-black text-[0.8rem] font-medium font-['Poppins'] leading-loose">Hire Certified Engineers Instantly <br /> <br /> Need additional engineering resources? Hire a complete engineering team on demand through our portal. Our pool of certified professionals is ready to join your project instantly, ensuring you have the talent you need, when you need it.We understand the importance of predictable outcomes. That’s why our teams work with a clear delivery plan and a billing model that is driven by results. You only pay for the value delivered, ensuring cost-effectiveness and transparency.</div>}
<button className=" w-36 relative bottom-7 h-11 bg-indigo-500 rounded-full text-neutral-100 text-[0.9rem] font-bold font-['Poppins'] uppercase leading-3" >
Read More
</button>

</div>


</div>

</section>



<section className='w-[100%] flex '>
    <div className='w-[50%] flex justify-center items-center pl-[6.915vw] bg-[#DAE3F2]'>
        <img className='w-[591px]' src='Images/HowItWorks.png'/>
    </div>


    <div className='w-[50%] pr-[6.915vw] pt-[59px] pb-[51px] pl-[100px] bg-[#FFFFFF]'>
    <div  className="TheIntelligenceRevolution"><span className="text-indigo-500  text-4xl font-bold font-['Poppins'] capitalize leading-10">How</span><span className="text-neutral-900 text-4xl font-bold font-['Poppins'] capitalize leading-10"> It </span><span className="text-neutral-800 text-4xl font-bold font-['Poppins'] capitalize leading-10">Works</span><span className="text-neutral-900 text-4xl font-bold font-['Poppins'] capitalize leading-10">?</span></div>

{/* text boxez cont */}
    <div className='gap-[16px] mt-[30px] flex flex-col'>
<TextRow h="Sign Up and Get Started: " p="Create an account on our platform and gain access to our suite of open and customizable applications."/>
<TextRow h="Customize Your Application" p="Use our intuitive tools to add new features and tailor the application to your specific requirements."/>
<TextRow h="Hire On-Demand Engineers" p="Browse our portal to find certified engineers with the skills you need. Hire a team instantly and get started on your project without delay."/>
<TextRow h="Achieve Predictable Results" p="Work with your dedicated team to ensure your project is delivered on time and within budget. Our outcome-driven billing model ensures you only pay for the results."/>

<button className="Rectangle8 w-48 h-14 bg-indigo-500 rounded-full text-neutral-100 text-lg font-bold font-['Poppins'] uppercase">
get started
</button>
    </div>

    </div>
</section>



{/* why chooze us */}
<section className='flex  justify-between'>

    <div className='w-[50%] flex gap-[22px] pl-[7.915vw;] pr-[100px] pt-[2rem]  pb-[2rem] flex-col bg-[#FFFFFF]'>
    <div ><span className="text-indigo-500 text-4xl font-bold font-['Poppins'] capitalize leading-10">Why</span><span className="text-stone-900 text-4xl font-bold font-['Poppins'] capitalize leading-10"> Choose Us?</span></div>

    <div className='w-[100%] gap-6 flex flex-col'>
<TextBox h="Complete Flexibility " d="Our open applications and on-demand engineering teams provide
unparalleled flexibility."/>
<TextBox h="Highest Quality" d="Built upon most modern cloud native architecture, delivering highest level
of reliability and security and changeability."/>
<TextBox h="Own Application Space" d="Our Apps are single tenant ensuring that your Apps and Data is always private.
"/>
<TextBox h="Certified Resources" d="Hire from a pool of certified professionals, ensuring you get top-quality talent."/>
<TextBox h="Instant Availability " d="Scale your team instantly to meet project demands without lengthy hiring processes."/>
<TextBox h="Outcome-Driven Billing" d="Enjoy a predictable and transparent billing model focused on delivering value."/>
    </div>
<button className="text-neutral-100 text-lg font-bold font-['Poppins'] uppercase  w-60 h-14 bg-indigo-500 rounded-full" >get more details</button>
    </div>

    <div className='w-[50%] flex justify-center items-center  bg-[#D4FADA]'>
        <img src='Images/whychooseus.png'/>
    </div>


</section>



        </>
  )
}

export default Home
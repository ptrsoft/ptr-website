import React from 'react'
import AboutUsCard from './components/AboutUsCard' 
import AboutUsBox from './components/AboutUsBox' 
const AboutUs = () => {
  return (
    <>
    {/* sec 1 */}
<section className='pad-container gap-[3rem] bg-[#FEF4F9] flex flex-col pt-[8rem] items-center '>
    <div className='flex flex-col gap-4'>
<div className="AboutUs w-64 text-center text-neutral-900 text-5xl font-bold font-['Poppins'] uppercase leading-10">About Us</div>
<div className="text-center text-gray-900 font-poppins text-xl font-medium leading-[0.9375rem] capitalize">Home  / Page  /  About Us</div>
</div>
<img src="./Images/AboutBanner.png" width="100%" alt='banner' />
<div className=" text-center text-black text-4xl font-medium font-['Poppins'] capitalize leading-10">Welcome to PTR technologies, where innovation meets simplicity. <br/>We are a forward-thinking SaaS company dedicated to transforming the way businesses operate by providing cutting-edge software solutions that streamline processes, enhance productivity, and foster growth.</div>
</section>

<section className='pad-container bg-[#FEF4F9] pt-[8rem] flex justify-between'>
<AboutUsCard image="/Images/Mission.png" label="Our Mission" content="Our mission is to empower businesses of all sizes to achieve their full potential by delivering intuitive, reliable, and scalable and flexible software solutions. "/>
<AboutUsCard image="/Images/BulbIcon.png" label="Our Vision" content="We envision a world where technology seamlessly integrates with daily business operations, driving efficiency and innovation. "/>
<AboutUsCard image="/Images/Customer.png" label="Customer-Centricity" content="Our customers are at the heart of everything we do. We listen to their needs, understand their challenges, and deliver solutions that add real value."/>
<AboutUsCard image="/Images/Integrity.png" label="Our Vision" content="We envision a world where technology seamlessly integrates with daily business operations, driving efficiency and innovation. "/>
</section>

{/* col  */}
<section className='pad-container relative flex items-center justify-between bg-[lightgray] h-[57.9375rem]'>

{/* left */}
  {/* <img src="Images/dotscontainer.png" alt="" className='w-[147px] h-[auto] absolute left-24 top-[17.5rem]' /> */}
<div className='flex w-[49%] flex-col gap--[3.12rem] '>
    <div className='flex flex-col '>
    <span className='text-black font-poppins text-3xl font-bold leading-[3.125rem] capitalize'>PTR Technologies</span> 
<span className='text-black font-poppins text-2xl font-light leading-[3.75rem] capitalize'>started with a simple yet powerful idea:</span>
</div>

<span className='text-[#1D1D1D] text-justify font-poppins text-base font-medium leading-[1.875rem] capitalize'>
to provide businesses with user-friendly software that simplifies their workflow and cater business changes rapidly. It emerged from a passion for technology and a deep understanding of the cloud native SAAS ecosystem. Our journey is driven by a commitment to excellence and a relentless pursuit of customer satisfaction.
</span>

<div className='flex flex-col'>
<span className='text-black font-poppins text-2xl font-light leading-[3.75rem] capitalize'>Our Values Innovation: </span>
<span className='text-[#1D1D1D] text-justify font-poppins text-base font-medium leading-[1.875rem] capitalize'>We are committed to continuous improvement and innovation. We invest in research and development to ensure our products are always ahead of the curve.
</span>
</div>

<div className='flex flex-col'>
<span className='text-black font-poppins text-2xl font-light leading-[3.75rem] capitalize'>Excellence: </span>
<span className='text-[#1D1D1D] text-justify font-poppins text-base font-medium leading-[1.875rem] capitalize'>We strive for excellence in every aspect of our business, from product development to customer support.
</span>
</div>

</div>

{/* right */}
<div className='w-[49%] flex justify-end'>

<img  width="90%" src='/Images/aboutUsAside.png'/>
</div>
</section>


<section className='pad-container pt-[6.3rem] pb-[6.3rem] bg-white'>
<h1 className='text-gray-800 font-poppins pb-[4.58rem] text-[2.8125rem] font-semibold leading-[4.375rem] capitalize'>Our Products At <span className='text-[#666AE5]'> PTR Technologies</span>, we offer a suite of software solutions designed to meet the diverse needs of modern businesses:
</h1>

<div className='boxes flex-wrap gap-4  flex justify-between'>
<AboutUsBox icon="Images/Procurement.png" label="Procurement" para="Streamlined Supply Management"/>
<AboutUsBox icon="Images/Inventry.png" label="Inventory" para="Optimized Stock Control"/>
<AboutUsBox label="POS" icon="Images/POS.png" para="Seamless Sales Transactions"/>
<AboutUsBox label="Ecommerce" icon="Images/ecommerce.png" para="Effortless Online Shopping"/>
<AboutUsBox label="Whatsapp Commerce" icon="Images/WhatsappEcommerce.png" para="Chat-Driven Shopping"/>
<AboutUsBox label="Logistics" icon="Images/Logistics.png" para="Efficient Delivery Management"/>
<AboutUsBox label="CRM" icon="Images/CRM.png" para="Customer Relationship Mastery"/>
<AboutUsBox label="Accounting" icon="Images/accounting.png" para="Integrated Financial Solutions"/>
<AboutUsBox label="Asset Management" icon="Images/AssetManagement.png" para="Efficient Asset Oversight"/>
<AboutUsBox label="HR & Payroll" icon="Images/HRandPayroll.png" para="Streamlined HR Operations"/>
<AboutUsBox label="Subscriptions" icon="Images/SubscriptionManagement.png" para="Efficient Subscription Handling"/>
<AboutUsBox label="Workflow" icon="Images/Workflow.png" para="Optimized Workflow Management"/>
</div>

</section>


<section className='bg-[#45455C] gap-8 flex flex-col justify-center items-center h-[27.5rem] pad-container'>

<img src='/Images/rocket.png'/>
<h1 className='text-white text-center font-poppins text-[3.125rem] font-semibold leading-[4.375rem] capitalize'>Accelerate your growth with PTR Technologies</h1>
<button className='w-[14.5625rem] h-[3.4375rem] flex-shrink-0 rounded-[0.5rem] bg-[#00B8FF] text-[#F5F5F5] font-poppins text-[1.125rem] font-bold leading-[0.9375rem] uppercase'>get started now</button>
</section>


{/* our team sec */}
<section className='pad-container pb-20 flex justify-between items-center pt-20'>

<div className='w-[45%] flex flex-col gap-[3.06rem] justify-between items-start'>
<span class="text-black font-poppins text-[2.5rem] font-semibold leading-[3.75rem] capitalize">
 Our Team
</span>


<span className='text-gray-700 text-justify font-poppins text-base font-normal leading-[1.625rem]'>
Our team is composed of passionate professionals who are experts in their respective fields. From software engineers and designers to customer support specialists, each member of our team plays a crucial role in our success. We foster a collaborative and inclusive work environment where creativity and innovation thrive. <br/> <br/>

We are always looking for talented individuals who share our passion for technology and innovation. If you’re looking to make an impact and be part of a dynamic team, check out our career opportunities here. <br/> <br/>
 
We’d love to hear from you! Whether you have a question about our products, need support, or just want to say hello, feel free to reach out to us.
</span>

<button className='w-[17.875rem] h-[3.4375rem] flex-shrink-0 rounded-[0.5rem] bg-[#4A26A7] text-[#F5F5F5] font-poppins text-[1.125rem] font-bold uppercase'>
Get started now
</button>

</div>

<div className='w-[0.0625rem] h-[24.25rem] bg-black'></div>

<div className='w-[49%]'>

<img style={{borderRadius:'18px'}} alt='our team' src='/Images/OurTeam.png'/>

</div>

</section>
    </>
  )
}

export default AboutUs
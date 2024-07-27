// import React from 'react'
// const ContactUs = () => {
//   return (
//     <>
// <section className='h-96 contact-banner'>
//   {/* <img className='relative' alt='unable to load Images' src='Images/contactBanner.png'/> */}

//   <div className='absolute flex-col items-center gap-[1rem] pad-container flex justify-center top-[12rem]'>

//   <img src="Images/whiteXXX.png" alt="" className='absolute top-28 left-64' />
//   <div className=" text-center text-white text-5xl font-bold font-['Poppins'] uppercase leading-10">Contact Us</div>
//   <div className=" text-white text-xl font-medium font-['Poppins'] capitalize">Home / Service Details</div>
//   </div>
// </section>

// <div className='pad-container  items-center pt-[74px] pb-[52px] bg-[#FFFFFF] flex justify-between '>

// <div>
// <div className='flex gap-[18px] items-center'>
//             <img src='Images/ContactIcon.png' alt='icon' />
//             <div className=" text-neutral-800 text-5xl font-bold font-['Poppins'] leading-16">We're Here To <br /> Provide 24X7 Support</div>
//           </div>
// </div>

// <div className='w-[36%]'>
// <div className=" text-justify text-black text-[0.9rem] font-medium font-['Poppins'] capitalize leading-loose">At PTR SAAS, we deliver fully open and customizable applications, empowering you to effortlessly add new features. We are here to help you enhance your business with our innovative solutions. Whether you have questions, need support, or want to learn moreabout our offerings, please don't hesitate to reach out.</div>

// </div>
 
// </div>

//       <section className='pad-container pb-[52px] bg-white flex justify-between  '>

//         <div className=' w-[59%]'>
         
//           <form className='pt-[60px]  flex flex-col gap-[30px] pl-[75px] pr-[75px] pb-[46px] bg-[#DCDCDC]'>

//             <input type='name'  required className='bg-[#FFFFFF] pt-[27px] pl-[37px] w-[100%] pb-[27px] outline-none  text-neutral-700 text-lg font-medium ' placeholder='Your Name' />

//             <input type='number' required className='bg-[#FFFFFF] pt-[27px] pl-[37px] w-[100%] pb-[27px] outline-none text-neutral-700 text-lg font-medium ' placeholder='Your Phone Number' />

//             <input  type='email' required className='bg-[#FFFFFF] pt-[27px] pl-[37px] w-[100%] pb-[27px] outline-none text-neutral-700 text-lg font-medium ' placeholder='Your Email' />

//             <textarea  required className='bg-[#FFFFFF] pt-[27px] pl-[37px] w-[100%] pb-[50px] outline-none  text-neutral-700 text-lg font-medium ' placeholder='Message Here' />

//             <button className=" w-48 h-14 bg-sky-500 rounded-lg text-white outline-none text-xl font-semibold font-['Poppins'] uppercase leading-none">lets Talks</button>

//           </form>

//         </div>

//         <div className='w-[37%] flex flex-col pl-[2px] items-end'>


// <div className='w-[100%] overflow-hidden relative form-banner  gap-[20px] h-[100%] flex flex-col pr-[64px] pl-[53px] pt-[46px]'>

// {/* <img className='absolute z-0 top-0 left-0 right-0 bottom-0' alt='' src='Images/contactVector.png'/> */}
// <div className="z-20 text-white text-5xl font-bold font-['Poppins']">Say Hello!</div>

// <div className=" z-20 text-neutral-700 text-base font-normal font-['Poppins'] leading-relaxed">We’d love to hear from you! Whether you have a question about our products, need support, or just want to say hello, feel free to reach out to us.</div>

// <img className='z-20 w-fit h-fit ' alt='' src='Images/womenWithHeadphone.png'/>

// <div className='z-20 flex flex-col gap-1'>
// <div className="Enquries z-20 text-white text-4xl font-medium font-['Poppins']">Enquries</div>
// <div className="z-20 text-white text-base font-medium font-['Poppins']">sales@ptrtechnology.com</div>
// <div className='z-20 flex gap-4 items-center justify-start'>
//   <a target='_blank' href="https://www.linkedin.com/company/ptr-technologies">
//   <img  className='cursor-pointer'  src="Images/contactLinkding.png" alt="linkdin" />
//   </a>
//   </div>
// </div>

// </div>
       
//         </div>
//       </section>

//       <section className=' w-[100%]'>
//         <img className='w-[100%]' alt='unable to load Images' src='Images/Maps.png' />
//       </section>
//     </>
//   )
// }

// export default ContactUs


import React from 'react'
import "../../../Assets/Styles/pages/ContactUs/index.css"
const ContactUs = () => {
  return (
    <div className='ContactUs'>
    <div className="ContactUs_top">
    <h2 className="ContactUs_breadcrump">Contact Us</h2>
    </div>
    {/* contact us top end */}

{/* formns section starrts */}
<section className='ContactUs_form_section space-container'>

{/* ContactUs_form section left starts*/}
<div className="ContactUs_form_section_left">
{/* ContactUs_form section left top starts */}
<div className="ContactUs_form_section_left_top">
<img className='ContactUs_form_section_left_top_icon' src='Images/ContactIcon.png' alt='unable to load image check your internet connection' />
<h2 className='ContactUs_form_section_left_top_heading'>We're Here To <br /> Provide 24X7 Support</h2>
</div>
{/* ContactUs_form section left top endzz */}

{/* consact us form sec left bottom start */}
<div className='ContactUs_form_section_left_bottom'>

  <input placeholder='Your Name' className='ContactUs_form_section_left_bottom_input' type="text"/>
  <input placeholder='Your Phone Number' className='ContactUs_form_section_left_bottom_input' type="tel"/>
  <input placeholder='Your Email' className='ContactUs_form_section_left_bottom_input' type="email"/>

<textarea className='ContactUs_form_section_left_bottom_text_area' placeholder='Message Here'></textarea>
  
  <button className='lets_talk_btn'>Let's Talks</button>
</div>
{/* consact us form sec left bottom end */}

</div>
{/* ContactUs_form section left endx*/}


{/* ContactUs_form_section right starts */}
<div className="ContactUs_form_section_right">

{/* ContactUs_form_section right top starts */}
<div className="ContactUs_form_section_right_top">
<p className='ContactUs_form_section_right_top_para'>At PTR SAAS, we deliver fully open and customizable applications, 
empowering you to effortlessly add new features. We are here to 
help you enhance your business with our innovative solutions. 
Whether you have questions, need support, or want to learn more
about our offerings, please don't hesitate to reach out.</p>
</div>
{/* ContactUs_form_section right top endz */}

{/* ContactUs_form_section right bottom starts */}
<div className="ContactUs_form_section_right_bottom">
 <h2 className='ContactUs_form_section_right_bottom_hello'>Say Hello!</h2>
 <p className='ContactUs_form_section_right_bottom_para'>We’d love to hear from you! Whether you have a question about our products, need support, or just want to say hello, feel free to reach out to us.</p>

 <img  src='Images/womenWithHeadphone.png' className="ContactUs_form_section_right_bottom_img" alt="" />

 <div className="ContactUs_form_section_right_bottom_Enquries">
  <h2 className='ContactUs_form_section_right_bottom_Enquries_heading'>Enquries</h2>
  <span className='ContactUs_form_section_right_bottom_Enquries_mail'>sales@ptrtechnology.com</span>
  {/* social medias container starts */}
  <div className='Enquries_social_container'>
  <a target='_blank' href="https://www.linkedin.com/company/ptr-technologies">
  <img  className='cursor-pointer'  src="Images/contactLinkding.png" alt="linkdin" />
</a>

  </div>
    {/* social medias container starts */}

 </div>

</div>
{/* ContactUs_form_section right bottom ends */}

</div>
{/* ContactUs_form_section right end */}


</section>
{/* formns section endddd */}


    {/* contact us map start */}
  <section className='contact_us_map_section'>
  </section>
    {/* contact us map end */}
    
    </div>
  )
}

export default ContactUs
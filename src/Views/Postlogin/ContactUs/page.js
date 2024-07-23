import React from 'react'
const ContactUs = () => {
  return (
    <>
<section className='h-96 contact-banner'>
  {/* <img className='relative' alt='unable to load Images' src='Images/contactBanner.png'/> */}

  <div className='absolute flex-col items-center gap-[1rem] pad-container flex justify-center top-[12rem]'>

  <img src="Images/whiteXXX.png" alt="" className='absolute top-28 left-64' />
  <div className=" text-center text-white text-5xl font-bold font-['Poppins'] uppercase leading-10">Contact Us</div>
  
  </div>
</section>

<div className='pad-container  items-center pt-[74px] pb-[52px] bg-[#FFFFFF] flex justify-between '>

<div>
<div className='flex gap-[18px] items-center'>
            <img src='Images/ContactIcon.png' alt='icon' />
            <div className=" text-neutral-800 text-5xl font-bold font-['Poppins'] leading-16">We're Here To <br /> Provide 24X7 Support</div>
          </div>
</div>

<div className='w-[36%]'>
<div className=" text-justify text-black text-[0.9rem] font-medium font-['Poppins'] capitalize leading-loose">At PTR SAAS, we deliver fully open and customizable applications, empowering you to effortlessly add new features. We are here to help you enhance your business with our innovative solutions. Whether you have questions, need support, or want to learn moreabout our offerings, please don't hesitate to reach out.</div>

</div>
 
</div>

      <section className='pad-container pb-[52px] bg-white flex justify-between  '>

        <div className=' w-[59%]'>
         
          <form className='pt-[60px]  flex flex-col gap-[30px] pl-[75px] pr-[75px] pb-[46px] bg-[#DCDCDC]'>

            <input type='name'  required className='bg-[#FFFFFF] pt-[27px] pl-[37px] w-[100%] pb-[27px] outline-none  text-neutral-700 text-lg font-medium ' placeholder='Your Name' />

            <input type='number' required className='bg-[#FFFFFF] pt-[27px] pl-[37px] w-[100%] pb-[27px] outline-none text-neutral-700 text-lg font-medium ' placeholder='Your Phone Number' />

            <input  type='email' required className='bg-[#FFFFFF] pt-[27px] pl-[37px] w-[100%] pb-[27px] outline-none text-neutral-700 text-lg font-medium ' placeholder='Your Email' />

            <textarea  required className='bg-[#FFFFFF] pt-[27px] pl-[37px] w-[100%] pb-[50px] outline-none  text-neutral-700 text-lg font-medium ' placeholder='Message Here' />

            <button className=" w-48 h-14 bg-sky-500 rounded-lg text-white outline-none text-xl font-semibold font-['Poppins'] uppercase leading-none">lets Talks</button>

          </form>

        </div>

        <div className='w-[37%] flex flex-col pl-[2px] items-end'>


<div className='w-[100%] overflow-hidden relative form-banner  gap-[20px] h-[100%] flex flex-col pr-[64px] pl-[53px] pt-[46px]'>

{/* <img className='absolute z-0 top-0 left-0 right-0 bottom-0' alt='' src='Images/contactVector.png'/> */}
<div className="z-20 text-white text-5xl font-bold font-['Poppins']">Say Hello!</div>

<div className=" z-20 text-neutral-700 text-base font-normal font-['Poppins'] leading-relaxed">We’d love to hear from you! Whether you have a question about our products, need support, or just want to say hello, feel free to reach out to us.</div>

<img className='z-20 w-fit h-fit ' alt='' src='Images/womenWithHeadphone.png'/>

<div className='z-20 flex flex-col gap-1'>
<div className="Enquries z-20 text-white text-4xl font-medium font-['Poppins']">Enquries</div>
<div className="z-20 text-white text-base font-medium font-['Poppins']">sales@ptrtechnology.com</div>
<div className='z-20 flex gap-4 items-center justify-start'>
  <a target='_blank' href="https://www.linkedin.com/company/ptr-technologies">
  <img  className='cursor-pointer'  src="Images/contactLinkding.png" alt="linkdin" />
  </a>
  </div>
</div>

</div>
       
        </div>
      </section>

      <section className=' w-[100%]'>
        <img className='w-[100%]' alt='unable to load Images' src='Images/Maps.png' />
      </section>
    </>
  )
}

export default ContactUs
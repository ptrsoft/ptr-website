import React from 'react'
const ContactUs = () => {
  return (
    <>

<section className='h-96'>
  <img className='w-p[100%] relative' src='Images/contactBanner.png'/>

  <div className='absolute flex-col items-center gap-[1rem] pad-container flex justify-center top-[12rem]'>
  <div className=" text-center text-white text-5xl font-bold font-['Poppins'] uppercase leading-10">Contact Us</div>
  <div className=" text-white text-xl font-medium font-['Poppins'] capitalize">Home / Service Details</div>
  </div>
</section>

<div className='pad-container items-center pt-[74px] pb-[52px] bg-[#FFFFFF] flex justify-between '>

<div>
<div className='flex gap-[18px] items-center'>
            <img src='Images/ContactIcon.png' />
            <div className=" text-neutral-800 text-5xl font-bold font-['Poppins'] leading-10">We're Here To <br /> Provide 24X7 Support</div>
          </div>
</div>

<div>
<div className=" text-justify text-black text-base font-medium font-['Poppins'] capitalize leading-loose">At PTR SAAS, we deliver fully open and customizable applications, <br />empowering you to effortlessly add new features. We are here to <br />help you enhance your business with our innovative solutions. <br />Whether you have questions, need support, or want to learn more<br />about our offerings, please don't hesitate to reach out.</div>

</div>
 
</div>

      <section className='pad-container pb-[52px] bg-white flex justify-between  '>

        <div className=' w-[50%]'>
         
          <form className='pt-[60px]  flex flex-col gap-[30px] pl-[75px] pr-[75px] pb-[46px] bg-[#DCDCDC]'>

            <input className='bg-[#FFFFFF] pt-[27px] pl-[37px] w-[100%] pb-[27px] outline-none  text-neutral-700 text-lg font-medium ' placeholder='Your Name' />

            <input className='bg-[#FFFFFF] pt-[27px] pl-[37px] w-[100%] pb-[27px] outline-none text-neutral-700 text-lg font-medium ' placeholder='Your Phone Number' />

            <input className='bg-[#FFFFFF] pt-[27px] pl-[37px] w-[100%] pb-[27px] outline-none text-neutral-700 text-lg font-medium ' placeholder='Your Email' />

            <textarea className='bg-[#FFFFFF] pt-[27px] pl-[37px] w-[100%] pb-[50px] outline-none  text-neutral-700 text-lg font-medium ' placeholder='Message Here' />

            <button className=" w-48 h-14 bg-sky-500 rounded-lg text-white outline-none text-xl font-semibold font-['Poppins'] uppercase leading-none">lets Talks</button>

          </form>

        </div>

        <div className='w-[50%] flex flex-col pl-[100px] items-end'>


<div className='w-[100%] bg-[aqua] gap-[20px] h-[100%] flex flex-col pr-[64px] pl-[53px] pt-[46px]'>

<div className="S text-white text-5xl font-bold font-['Poppins']">Say Hello!</div>

<div className=" text-neutral-700 text-base font-normal font-['Poppins'] leading-relaxed">We’d love to hear from you! Whether you have a question about our products, need support, or just want to say hello, feel free to reach out to us.</div>

<img src='Images/womenWithHeadphone.png'/>

<div>
<div className="Enquries text-white text-4xl font-medium font-['Poppins']">Enquries</div>
<div className=" text-white text-base font-medium font-['Poppins']">info@example.com ontact@example.com</div>
<div>icons icons icons icons</div>
</div>

</div>
       
        </div>
      </section>

      <section className=' w-[100%]'>
        <img className='w-[100%]' src='Images/Maps.png' />
      </section>
    </>
  )
}

export default ContactUs
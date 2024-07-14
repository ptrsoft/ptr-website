import React, { useState } from 'react'
import FormInput from './components/Input'

const Page = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

    
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Handle form submission logic here
    console.log('Form submitted');
  };
  return (
  <>
  <div className=' login-banner pb-[11rem] bg'>
{/* <img className='absolute z-0 top-0 left-0 bottom-0 right-0' src="Images/LoginWomenVector.png" alt="" /> */}



<div className='flex flex-col gap-4 items-center'>

<div className="LoginPage pt-[189px]  text-center text-white text-5xl font-semibold font-['Poppins'] uppercase leading-10">Login Page</div>
<div className="HomePagesBlogs text-white  text-xl font-medium font-['Poppins'] capitalize">Home / Pages / Blogs</div>

</div>

<form  onSubmit={handleSubmit}>
<div className='bg-white flex py-[89px] rounded-2xl px-[111px] flex-col gap-[40px] m-auto mt-[93px] w-fit'>

{/* headings */}
<div className='text-center flex flex-col gap-[25px]'>
<h2 className="CreateYourAccount text-black text-5xl font-bold font-['Poppins']">Create Your Account</h2>
<span className=" text-neutral-500 text-xl font-normal font-['Poppins']">Let's get started with your 30days free trial</span>
</div>

{/* googler */}
<button className='w-[100%] border border-[#D5D5D5] rounded-full  flex justify-center items-center'>
  <img src="Images/Google.png" alt="" />

  <div className=" text-zinc-800 text-xl font-medium font-['Poppins']">Login with Google</div>

</button>

{/* deviders */}
<div className='flex justify-between items-center '>
  <span className='h-[1px] w-[45%] bg-[#D5D5D5]'></span>
  <div className=" text-neutral-500 text-lg font-medium font-['Poppins']">Or</div>
  <span className='h-[1px] w-[45%] bg-[#D5D5D5]'></span>
</div>

{/* inputs  */}
<div className='flex gap-[23px] flex-col'>

  <div className='gap-[37px] flex flex-col'>
<FormInput type="email" icon="Images/Email.svg" placeHolder="Enter your E-mail"/>
<FormInput type={showPassword ? 'text' : 'password'} event={togglePasswordVisibility} icon="Images/lock.svg" passwordIcon= {showPassword ? "Images/eye-off.png" : "Images/eye-off.png"} placeHolder="Password"/>

  </div>

<div className='flex justify-between px-2'>
  
  <div className='flex gap-2'>
  <input type="checkbox" name="" id="" />
  <div className=" text-neutral-500 text-base font-normal font-['Poppins']">Remember me</div>
  </div>
  <div className=" text-sky-500 text-base font-normal font-['Poppins']">Forgot Password ?</div>
  </div>


{/* login btn  */}
<button className='w-[100%]  rounded-full py-[0.8rem] bg-[#4A25A6] text-white text-2xl font-medium font-[Poppins] leading-snug'>Login</button>

</div>


{/* deviders */}
<div className='flex justify-between items-center '>
  <span className='h-[1px] w-[45%] bg-[#D5D5D5]'></span>
  <div className=" text-neutral-500 text-lg font-medium font-['Poppins']">Or</div>
  <span className='h-[1px] w-[45%] bg-[#D5D5D5]'></span>
</div>



{/* googler */}
<button className='w-[100%] py-[1rem] border gap-3 border-[#D5D5D5] rounded-full  flex justify-center items-center'>
  <img src="Images/facebookBtn.png" alt="" />

  <div className=" text-zinc-800 text-xl font-medium font-['Poppins']">Login with Facebook</div>

</button>

<div className='text-center' >
  <span className="text-neutral-500 text-base font-medium font-['Poppins']">Don't have an account ? </span><span className="text-sky-500 text-base font-medium cursor-pointer font-['Poppins']">Create an account</span></div>


</div>
</form>



  </div>
  
  </>
  )
}

export default Page
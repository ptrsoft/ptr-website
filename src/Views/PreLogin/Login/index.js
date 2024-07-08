import React from 'react'

const Login = () => {
  return (
    <div className='w-[100%]  flex flex-col items-center '>

<div className='absolute top-[246px] flex flex-col items-center gap-[1rem]'>
<div className="  text-center text-white text-5xl font-semibold font-['Poppins'] uppercase leading-10">Login Page</div>
<div className="text-white text-xl font-medium font-['Poppins'] capitalize">Home / Pages / Blogs</div>



<form className='bg-[#FFFFFF] h-[500px] rounded-lg flex flex-col items-center pl-[109px] pr-[109px] pt-[36px]' >
<div className="CreateYourAccount  text-black text-5xl font-bold font-['Poppins']">Create Your Account</div>
<div className=" text-neutral-500 text-xl font-normal font-['Poppins']">Let's get started with your 30days free trial</div>

<div className='w-[40.26988rem] pt-[19px] pb-[19px] border-[#737373]  flex justify-center items-center bg-[#FFF]'>
    <img src='Images/Google.png'/>
<div className=" text-zinc-800 text-xl font-medium font-['Poppins']">Login with Google</div>
</div>


</form>


</div>
        <img className='w-[100%] h-[auto]' src='images/loginWomin.png'/>
    </div>
  )
}

export default Login
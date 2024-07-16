
import React, { useState } from 'react'
import TextBox from './components/TextBox'
import TextRow from './components/TextRow'
import { Link } from 'react-router-dom'

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
    <img alt='Hero Image' src='Images/Hero.png'  />
  </div>

  <div className='w-[49%] relative flex flex-col gap-[2rem]'>
    <div className=''>
      <span className="text-indigo-500 text-5xl font-bold capitalize leading-20 font-poppins">Unlock</span>
      <span className="text-neutral-800 text-5xl font-bold capitalize leading-20 font-poppins"> Unlimited Potential with Fully Customizable<br/></span>
      <span className="text-indigo-500 text-5xl font-bold capitalize leading-20 font-poppins">Open SAAS</span>
      <span className="text-neutral-800 text-5xl font-bold capitalize leading-20 font-poppins"> Solutions</span>
    </div>
    <div className="text-neutral-800 text-base font-medium capitalize leading-loose font-poppins">At PTR SAAS, we deliver fully open and customizable applications, empowering you to effortlessly add new features.</div>
    <Link to="/contact-us">
    <button  className="Rectangle8 cursor-pointer flex justify-start pl-6 items-center w-52 h-14 bg-neutral-800 rounded-full">
<div className="GetStarted text-neutral-100 text-base font-semibold font-['Poppins'] uppercase leading-3">
    Get started
    </div>
<div className="relative left-6 w-14 h-14 flex justify-center items-center bg-indigo-500 rounded-full">
    <img alt='arrow' src='Images/arrow.png'/>
</div>
</button>
</Link>
    <img className='absolute w-[27rem] right-[-3rem] bottom-[-9rem]' src='Images/HeroVector.png' alt='Hero Vector' />
  </div>
</section>




     <section className='pad-container pb-[5.75rem] pt-[8.75rem] flex justify-between items-center bg-[white]'>
<div className='flex w-[51%] flex-col gap-[58px]'>
<div className="ContinuousImprovements"><span className="text-neutral-800 text-[2rem] font-bold font-['Poppins'] capitalize leading-[2rem]">Our platform is built to provide<br/></span><span className="text-indigo-500 text-[2rem] font-bold font-['Poppins'] capitalize leading-[3.125rem]">maximum flexibility</span><span className="text-neutral-800 text-[2rem] font-bold font-['Poppins'] capitalize ">, ensuring it meets your unique business requirements.</span></div>
<div className='flex flex-col gap-[2rem]'>
<div className="flex  gap-[17px] text-neutral-800 text-[1rem] font-semibold font-['Poppins'] capitalize leading-none"> <img  alt='unable to load Images'  src='/Images/plus.svg'/><span>Single Tenant App- Fully private, Fully Customizable</span></div>
<div className="flex gap-[17px] text-neutral-800 text-[1rem] font-semibold font-['Poppins'] capitalize leading-none"> <img alt='unable to load Images'  src='/Images/plus.svg'/><span>Zero Tech debt- App with all artifacts</span></div>
<div className="flex gap-[17px] text-neutral-800text-[1rem] font-semibold font-['Poppins'] capitalize leading-none"> <img alt='unable to load Images'  src='/Images/plus.svg'/><span>Complete Open - You own it, you change it with no limit</span></div>
<div className="flex gap-[17px] text-neutral-800 text-[1rem] font-semibold font-['Poppins'] capitalize leading-none"> <img alt='unable to load Images'  src='/Images/plus.svg'/><span>Highest flexibility - Any cloud / Any Changes</span></div>
<div className="flex gap-[17px] text-neutral-800 text-[1rem] font-semibold font-['Poppins'] capitalize leading-none"> <img alt='unable to load Images'  src='/Images/plus.svg'/><span>One click E2E Engineering Team - Available On demand to make changes</span></div>
<div className="flex gap-[17px] text-neutral-800 text-[1rem] font-semibold font-['Poppins'] capitalize leading-none"> <img alt='unable to load Images'  src='/Images/plus.svg'/><span>Vendor Friendly -Deliver Apps to your own customers
</span></div>
</div>
</div>

<div className='w-[49%]'>
    <img className='w-[100%]' alt='unable to load Images' src='Images/marketing.png'/>
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
        <img alt='icon' src='Images/buttonIcon.svg' />

        
    </div>
    <div className="CustomizableSingleTenantApps text-black text-[1.3rem] font-medium font-['Poppins'] capitalize leading-normal">Customizable Single-Tenant Apps</div>
</button>

<button onClick={() => handleButtonClick(2)} className={`Btn1 h-[4.4rem] pl-[1rem] w-[29rem] rounded-lg hover:border border-black justify-start items-center gap-4 inline-flex ${
              selectedButton === 2 ? 'bg-[#82D38F] border' : 'bg-[#D4FADA] hover:bg-[#82D38F]'
            }`}>
    <div className="Icon  w-[1.8rem]  relative">
        {/* <img alt='icon' src='Images/buttonIcon.svg' /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="36" viewBox="0 0 41 36" fill="none">
  <path d="M20.413 34.3271C20.3571 34.3271 20.3036 34.3126 20.2525 34.286L11.1805 29.2456C11.0783 29.19 11.0151 29.0835 11.0127 28.9674C11.0127 28.8513 11.0711 28.7425 11.1732 28.6845L20.0969 23.3901C20.1966 23.332 20.3206 23.3296 20.4227 23.3852L29.4948 28.4257C29.5969 28.4813 29.6602 28.5877 29.6626 28.7038C29.6626 28.8199 29.6042 28.9287 29.5021 28.9868L20.5784 34.2812C20.5273 34.3126 20.4689 34.3271 20.4106 34.3271H20.413ZM11.995 28.9529L20.4082 33.6257L28.6851 28.7159L20.272 24.0431L11.995 28.9529Z" fill="black"/>
  <path d="M29.3363 29.0326C29.2803 29.0326 29.2268 29.0181 29.1758 28.9915L20.1037 23.9511C20.0016 23.8954 19.9384 23.789 19.9359 23.6729L19.7876 13.3381C19.7876 13.222 19.846 13.1131 19.9481 13.0551C20.0478 12.9971 20.1718 12.9946 20.2739 13.0503L29.346 18.0907C29.4481 18.1463 29.5113 18.2528 29.5138 18.3688L29.6621 28.7037C29.6621 28.8198 29.6037 28.9286 29.5016 28.9867C29.4505 29.0181 29.3922 29.0326 29.3338 29.0326H29.3363ZM20.5876 23.477L29.0007 28.1498L28.8621 18.5648L20.449 13.8919L20.5876 23.477Z" fill="black"/>
  <path d="M11.3404 29.2868C11.2844 29.2868 11.2309 29.2723 11.1799 29.2457C11.0777 29.1901 11.0145 29.0837 11.0121 28.9676L10.8638 18.6327C10.8638 18.5166 10.9221 18.4078 11.0243 18.3497L19.948 13.0553C20.0477 12.9973 20.1717 12.9949 20.2738 13.0505C20.3759 13.1061 20.4392 13.2126 20.4416 13.3287L20.5899 23.6635C20.5899 23.7796 20.5316 23.8884 20.4294 23.9465L11.5057 29.2409C11.4546 29.2723 11.3963 29.2868 11.3379 29.2868H11.3404ZM11.5203 18.8093L11.6589 28.3944L19.9358 23.4821L19.7972 13.897L11.5227 18.8093H11.5203Z" fill="black"/>
  <path d="M40.2006 35.4977H0.325826C0.209112 35.4977 0.102125 35.4348 0.0437677 35.3356C-0.0145892 35.2341 -0.0145892 35.1107 0.0437677 35.0115L19.98 0.662035C20.0967 0.461288 20.4298 0.461288 20.5465 0.662035L40.4827 35.0115C40.541 35.1131 40.541 35.2365 40.4827 35.3356C40.4243 35.4372 40.3173 35.4977 40.2006 35.4977ZM0.892375 34.8471H39.6341L20.2644 1.4747L0.892375 34.8495V34.8471Z" fill="black"/>
  <path d="M40.2005 35.4977C40.1446 35.4977 40.0886 35.4832 40.0376 35.4542L20.1014 23.9487C20.0017 23.8907 19.9385 23.7842 19.9385 23.6681V0.824098C19.9385 0.645118 20.0844 0.5 20.2643 0.5C20.4442 0.5 20.5901 0.645118 20.5901 0.824098V23.4795L40.3634 34.8906C40.519 34.9801 40.5725 35.1784 40.4825 35.3357C40.4218 35.4397 40.3123 35.4977 40.2005 35.4977Z" fill="black"/>
  <path d="M0.325743 35.4975C0.213892 35.4975 0.104473 35.4395 0.0436844 35.3355C-0.0462825 35.1807 0.00721132 34.9824 0.16283 34.8905L20.099 23.385C20.2546 23.2955 20.454 23.3487 20.5464 23.5035C20.6364 23.6583 20.5829 23.8566 20.4273 23.9485L0.491087 35.454C0.440025 35.483 0.3841 35.4975 0.328174 35.4975H0.325743Z" fill="black"/>
  <path d="M20.4034 35.5C20.2259 35.5 20.08 35.3573 20.0776 35.1783L19.9365 23.6728C19.9365 23.5567 19.9949 23.4503 20.097 23.3899L29.9618 17.5367C30.1174 17.4448 30.3168 17.4956 30.4092 17.6504C30.5016 17.8052 30.4505 18.0035 30.2949 18.0955L20.593 23.8518L20.7316 35.171C20.7316 35.35 20.5906 35.4976 20.4082 35.5H20.4034Z" fill="black"/>
  <path d="M20.2616 23.9946C20.2081 23.9946 20.1546 23.9825 20.1036 23.9535L10.0662 18.4051C9.90814 18.3181 9.85222 18.1197 9.93975 17.9625C10.0273 17.8053 10.2267 17.7497 10.3847 17.8368L20.4221 23.3851C20.5802 23.4722 20.6361 23.6705 20.5486 23.8277C20.4878 23.9341 20.3784 23.9946 20.2616 23.9946Z" fill="black"/>
</svg>
    </div>
    <div className="CustomizableSingleTenantApps text-black text-[1.3rem] font-medium font-['Poppins'] capitalize leading-normal">High-Quality Zero Tech Debt</div>
</button>

<button onClick={() => handleButtonClick(3)}   className={`Btn1 h-[4.4rem] pl-[1rem] w-[29rem] rounded-lg hover:border border-black justify-start items-center gap-4 inline-flex ${
              selectedButton === 3 ? 'bg-[#E9B986] border' : 'bg-[#FDE3C7] hover:bg-[#E9B986]'
            }`}>
<div className="Icon  w-[1.8rem]  relative">
{/* <img alt='icon' src='Images/buttonIcon.svg' /> */}
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="46" viewBox="0 0 39 46" fill="none">
  <path d="M19.6488 17.865C19.5786 17.865 19.5114 17.8467 19.4504 17.8132L5.09489 9.81607C4.96669 9.746 4.88733 9.61195 4.88428 9.46572C4.88428 9.31949 4.95753 9.18239 5.08268 9.10927L18.9711 0.837937C19.0963 0.761774 19.2519 0.761774 19.3801 0.831844L33.7326 8.83204C33.8608 8.90211 33.9401 9.03616 33.9432 9.18239C33.9432 9.32862 33.8699 9.46572 33.7417 9.53884L19.8563 17.8041C19.7922 17.8437 19.719 17.862 19.6457 17.862L19.6488 17.865ZM6.1144 9.44744L19.6396 16.9846L32.7131 9.20372L19.1878 1.6605L6.1144 9.44744Z" fill="black"/>
  <path d="M19.6486 12.235C19.5784 12.235 19.5112 12.2167 19.4502 12.1832L9.98161 6.90663C9.85341 6.83656 9.77405 6.70251 9.771 6.55628C9.771 6.41005 9.84425 6.27295 9.97245 6.19984L18.9709 0.837937C19.0961 0.761774 19.2518 0.761774 19.38 0.831844L28.8455 6.10844C28.9737 6.17851 29.053 6.31256 29.0561 6.45879C29.0561 6.60502 28.9828 6.74212 28.8546 6.81524L19.8561 12.1741C19.792 12.2137 19.7188 12.232 19.6455 12.232L19.6486 12.235ZM10.9981 6.538L19.6425 11.3546L27.829 6.48012L19.1877 1.6605L10.9981 6.53495V6.538Z" fill="black"/>
  <path d="M19.6481 6.26686C19.5779 6.26686 19.5107 6.24858 19.4466 6.21507L15.155 3.82354C15.0268 3.75347 14.9474 3.61942 14.9443 3.47319C14.9443 3.32695 15.0176 3.18986 15.1458 3.11674L18.9705 0.837937C19.0956 0.761774 19.2513 0.761774 19.3795 0.831844L23.6712 3.22337C23.7994 3.29344 23.8787 3.42749 23.8818 3.57372C23.8818 3.71996 23.8085 3.85705 23.6803 3.93017L19.8557 6.20593C19.7916 6.24553 19.7183 6.26381 19.645 6.26381L19.6481 6.26686ZM16.1745 3.45186L19.6389 5.38336L22.6517 3.592L19.1872 1.6605L16.1745 3.45186Z" fill="black"/>
  <path d="M19.4927 23.4127C19.4225 23.4127 19.3553 23.3945 19.2912 23.361L0.210616 12.7225C0.0824149 12.6524 0.0030524 12.5183 0 12.3721C0 12.2259 0.0732577 12.0888 0.201459 12.0157L18.9707 0.837937C19.0958 0.761774 19.2515 0.761774 19.3797 0.831844L38.4603 11.4673C38.5885 11.5374 38.6679 11.6714 38.6709 11.8176C38.6709 11.9639 38.5977 12.101 38.4695 12.1741L19.7002 23.3488C19.6361 23.3884 19.5629 23.4067 19.4896 23.4067L19.4927 23.4127ZM1.23012 12.3538L19.4866 22.5293L37.4438 11.839L19.1874 1.6605L1.23012 12.3538Z" fill="black"/>
  <path d="M19.804 45.2199C19.7338 45.2199 19.6666 45.2017 19.6025 45.1682L0.521961 34.5327C0.39376 34.4626 0.314398 34.3286 0.311345 34.1824L0 12.3722C0 12.226 0.0732577 12.0889 0.201459 12.0158C0.326607 11.9427 0.48228 11.9396 0.610481 12.0097L19.6911 22.6451C19.8193 22.7152 19.8986 22.8493 19.9017 22.9955L20.213 44.8056C20.213 44.9518 20.1398 45.0889 20.0116 45.1621C19.9475 45.2017 19.8742 45.2199 19.801 45.2199H19.804ZM1.12939 33.9356L19.3828 44.111L19.0836 23.2453L0.830254 13.0699L1.12939 33.9356Z" fill="black"/>
  <path d="M19.8045 45.2196C19.7343 45.2196 19.6671 45.2014 19.603 45.1678C19.4748 45.0978 19.3955 44.9637 19.3924 44.8175L19.0811 23.0074C19.0811 22.8611 19.1543 22.724 19.2825 22.6509L38.0518 11.4762C38.1769 11.4031 38.3326 11.4001 38.4608 11.4701C38.589 11.5402 38.6683 11.6743 38.6714 11.8205L38.9827 33.6306C38.9827 33.7769 38.9095 33.9139 38.7813 33.9871L20.012 45.1617C19.9479 45.2014 19.8747 45.2196 19.8014 45.2196H19.8045ZM19.9052 23.2298L20.2043 44.0955L38.1616 33.4052L37.8625 12.5395L19.9052 23.2298Z" fill="black"/>
  <path d="M24.578 42.3772C24.3521 42.3772 24.1689 42.1944 24.1689 41.969V25.8345C24.1689 25.6913 24.2422 25.5603 24.3643 25.4842L38.1276 17.1031C38.3199 16.9843 38.5732 17.0453 38.6923 17.2402C38.8113 17.4322 38.7503 17.685 38.5549 17.8039L24.987 26.063V41.9659C24.987 42.1914 24.8038 42.3741 24.578 42.3741V42.3772Z" fill="black"/>
  <path d="M24.578 42.3777C24.3521 42.3777 24.1689 42.1949 24.1689 41.9694V25.835C24.1689 25.6918 24.2422 25.5608 24.3643 25.4846L38.1276 17.1036C38.3199 16.9848 38.5732 17.0458 38.6923 17.2407C38.8113 17.4327 38.7503 17.6855 38.5549 17.8043L24.987 26.0635V41.9664C24.987 42.1918 24.8038 42.3746 24.578 42.3746V42.3777Z" fill="black"/>
  <path d="M30.2069 39.0262C29.981 39.0262 29.7979 38.8434 29.7979 38.6179V28.6801C29.7979 28.537 29.8711 28.406 29.9932 28.3298L38.2164 23.3243C38.4087 23.2055 38.662 23.2665 38.7811 23.4614C38.9001 23.6534 38.8391 23.9062 38.6437 24.025L30.6189 28.9117V38.6179C30.6189 38.8434 30.4358 39.0262 30.2099 39.0262H30.2069Z" fill="black"/>
  <path d="M35.0506 36.1411C34.8247 36.1411 34.6416 35.9583 34.6416 35.7328V31.3824C34.6416 31.2392 34.7149 31.1082 34.837 31.032L38.2953 28.9269C38.4876 28.8081 38.741 28.869 38.86 29.064C38.9791 29.2559 38.918 29.5088 38.7227 29.6276L35.4596 31.6139V35.7359C35.4596 35.9613 35.2765 36.1441 35.0506 36.1441V36.1411Z" fill="black"/>
  <path d="M14.7425 42.2494C14.5167 42.2494 14.3335 42.0696 14.3335 41.8442L14.187 25.9413L0.542756 17.807C0.347402 17.6913 0.286354 17.4415 0.402345 17.2465C0.518336 17.0515 0.771686 16.9906 0.963987 17.1063L14.8036 25.3594C14.9257 25.4325 15.002 25.5635 15.002 25.7067L15.1516 41.8381C15.1516 42.0635 14.9715 42.2494 14.7456 42.2524H14.7425V42.2494Z" fill="black"/>
  <path d="M9.08364 38.9498C8.85776 38.9498 8.67461 38.77 8.67461 38.5446L8.58609 28.8383L0.512482 24.0248C0.317128 23.909 0.25608 23.6592 0.372071 23.4642C0.488063 23.2693 0.741412 23.2083 0.933714 23.3241L9.20268 28.2534C9.32477 28.3265 9.40108 28.4575 9.40108 28.6007L9.49266 38.5385C9.49266 38.7639 9.31257 38.9498 9.08669 38.9528H9.08364V38.9498Z" fill="black"/>
  <path d="M4.21518 36.3179C3.9893 36.3179 3.80615 36.1382 3.80615 35.9127L3.76647 31.5836L0.485138 29.6277C0.289784 29.512 0.228736 29.2621 0.344728 29.0672C0.460719 28.8722 0.714069 28.8082 0.90637 28.927L4.38306 31.0017C4.50516 31.0748 4.58147 31.2058 4.58147 31.349L4.6242 35.9066C4.6242 36.1321 4.44411 36.3179 4.21823 36.321H4.21518V36.3179Z" fill="black"/>
</svg>
    </div>
    <div className="CustomizableSingleTenantApps text-black text-[1.3rem]  font-medium font-['Poppins'] capitalize leading-normal">Modern Cloud-Native Apps</div>
</button>

<button onClick={() => handleButtonClick(4)}   className={`Btn1 h-[4.4rem] pl-[1rem] w-[29rem] rounded-lg hover:border border-black justify-start items-center gap-4 inline-flex ${
              selectedButton === 4 ? 'bg-[#9B8CEA] border' : 'bg-[#C9BFFE] hover:bg-[#9B8CEA]'
            }`} >
<div className="Icon  w-[1.8rem]  relative">
        {/* <img alt='icon' src='Images/buttonIcon.svg' /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 37 32" fill="none">
  <path d="M18.1538 31.9998C7.97426 31.9998 0 29.5641 0 26.4548C0 23.3455 7.97426 20.9097 18.1538 20.9097C28.3334 20.9097 36.3076 23.3455 36.3076 26.4548C36.3076 29.5641 28.3334 31.9998 18.1538 31.9998ZM18.1538 21.546C7.67149 21.546 0.630085 24.083 0.630085 26.4548C0.630085 28.8265 7.67149 31.3635 18.1538 31.3635C28.6361 31.3635 35.6776 28.8265 35.6776 26.4548C35.6776 24.083 28.6361 21.546 18.1538 21.546Z" fill="black"/>
  <path d="M18.1538 26.7728C7.97426 26.7728 0 24.337 0 21.2277C0 18.1184 7.97426 15.6826 18.1538 15.6826C28.3334 15.6826 36.3076 18.1184 36.3076 21.2277C36.3076 24.337 28.3334 26.7728 18.1538 26.7728ZM18.1538 16.3189C7.67149 16.3189 0.630085 18.856 0.630085 21.2277C0.630085 23.5994 7.67149 26.1365 18.1538 26.1365C28.6361 26.1365 35.6776 23.5994 35.6776 21.2277C35.6776 18.856 28.6361 16.3189 18.1538 16.3189Z" fill="black"/>
  <path d="M18.1538 21.5462C7.97426 21.5462 0 19.1104 0 16.0011C0 12.8918 7.97426 10.4561 18.1538 10.4561C28.3334 10.4561 36.3076 12.8918 36.3076 16.0011C36.3076 19.1104 28.3334 21.5462 18.1538 21.5462ZM18.1538 11.0924C7.67149 11.0924 0.630085 13.6294 0.630085 16.0011C0.630085 18.3729 7.67149 20.9099 18.1538 20.9099C28.6361 20.9099 35.6776 18.3729 35.6776 16.0011C35.6776 13.6294 28.6361 11.0924 18.1538 11.0924Z" fill="black"/>
  <path d="M18.1538 16.3193C7.97426 16.3193 0 13.8835 0 10.7721C0 7.66077 7.97426 5.22705 18.1538 5.22705C28.3334 5.22705 36.3076 7.66284 36.3076 10.7721C36.3076 13.8814 28.3334 16.3172 18.1538 16.3172V16.3193ZM18.1538 5.86544C7.67149 5.86544 0.632131 8.40246 0.632131 10.7721C0.632131 13.1418 7.67354 15.6809 18.1559 15.6809C28.6382 15.6809 35.6796 13.1439 35.6796 10.7721C35.6796 8.40039 28.6382 5.86337 18.1559 5.86337L18.1538 5.86544Z" fill="black"/>
  <path d="M18.1538 11.0922C7.97426 11.0922 0 8.65645 0 5.54509C0 2.43372 7.97426 0 18.1538 0C28.3334 0 36.3076 2.43579 36.3076 5.54509C36.3076 8.65439 28.3334 11.0902 18.1538 11.0902V11.0922ZM18.1538 0.638388C7.67149 0.638388 0.632131 3.17541 0.632131 5.54509C0.632131 7.91477 7.67354 10.4539 18.1559 10.4539C28.6382 10.4539 35.6796 7.91477 35.6796 5.54509C35.6796 3.17541 28.6361 0.638388 18.1538 0.638388Z" fill="black"/>
</svg>
    </div>
    <div className="CustomizableSingleTenantApps text-black text-[1.3rem] font-medium font-['Poppins'] capitalize leading-normal">On-Demand Engineering Teams</div>
</button>


</div>
{/* 2nd */}
<div className='w-[23rem] flex  relative bottom-6 z-10'> 
    {selectedButton === 1 && <img src='Images/Tenant.png'  alt='unable to load Images' />}
          {selectedButton === 2 && <img src='Images/TechDebt.png' alt='unable to load Images' />}
          {selectedButton === 3 && <img src='Images/nativeArchitectures.png'  alt='unable to load Images'/>}
          {selectedButton === 4 && <img src='Images/EngineeringTeams.png'  alt='unable to load Images' />}
</div>


{/* 3rd */}
<div className='z-20 gap-[75px] justify-start  h-[100%] pt-[6rem] flex flex-col'>
{selectedButton === 1 && <div className="w-96  text-black text-[0.8rem] font-medium font-['Poppins'] leading-loose">Experience unparalleled flexibility with our single-tenant SAAS applications,that is open and tailored to your unique business needs. Explore our robust backend platform and cutting-edge technology, delivering microservices-based enterprise apps with comprehensive operations management.</div>}
          {selectedButton === 2 && <div className="w-96 text-black text-[0.8rem] font-medium font-['Poppins'] leading-loose">At PTR Technology, for every use case that we develop, we follow a robust and efficient software development process designed to deliver high-quality solutions tailored to meet our clients' unique needs. Our approach combines industry best practices with innovative techniques to ensure that every use case is reliable, scalable, and secure and contains all software artifacts. <br /> <br /> Here follows a typical use case development life cycle.
          
          {/* <button className=" w-36  mt-5 h-11 bg-indigo-500 rounded-full text-neutral-100 text-[0.9rem] font-bold font-['Poppins'] uppercase leading-3" >
Read More
</button> */}
<div className="w-96 text-black text-[0.8rem] relative top-7 font-medium font-['Poppins'] leading-loose">Here follows a typical UXD process cycle.</div>
          
          </div>}
          {selectedButton === 3 && <div className="w-96 text-black text-[0.8rem]  font-medium font-['Poppins'] leading-loose">Whether you're a writing a small mobility App or a large scale enterprise product, we have something for you. Explore our architecture central to learn about the principles, patterns, practices, and tools that we follow to deliver you the solution that is simple, promotes reusability and flexibility and of course very cost effective.
         
            </div>}
            
          {selectedButton === 4 && <div className="w-96 text-black text-[0.8rem] font-medium font-['Poppins'] leading-loose">Hire Certified Engineers Instantly <br /> <br /> Need additional engineering resources? Hire a complete engineering team on demand through our portal. Our pool of certified professionals is ready to join your project instantly, ensuring you have the talent you need, when you need it.We understand the importance of predictable outcomes. That’s why our teams work with a clear delivery plan and a billing model that is driven by results. You only pay for the value delivered, ensuring cost-effectiveness and transparency.</div>}
          {selectedButton === 3 && <button className=" w-36 relative bottom-7 h-11 bg-indigo-500 rounded-full text-neutral-100 text-[0.9rem] font-bold font-['Poppins'] uppercase leading-3" >

<Link to="/architecture">Read More</Link>
</button>}

</div>


</div>

</section>



<section className='w-[100%] flex '>
    <div className='w-[50%] flex justify-center items-center pl-[6.915vw] bg-[#DAE3F2]'>
        <img className='w-[591px]' alt='unable to load Images' src='Images/HowItWorks.png'/>
    </div>


    <div className='w-[50%] pr-[6.915vw] pt-[59px] pb-[51px] pl-[100px] bg-[#FFFFFF]'>
    <div  className="TheIntelligenceRevolution"><span className="text-indigo-500  text-4xl font-bold font-['Poppins'] capitalize leading-10">How</span><span className="text-neutral-900 text-4xl font-bold font-['Poppins'] capitalize leading-10"> It </span><span className="text-neutral-800 text-4xl font-bold font-['Poppins'] capitalize leading-10">Works</span><span className="text-neutral-900 text-4xl font-bold font-['Poppins'] capitalize leading-10">?</span></div>

{/* text boxez cont */}
    <div className='gap-[16px] mt-[30px] flex flex-col'>
<TextRow h="Sign Up and Get Started: " p="Create an account on our platform and gain access to our suite of open and customizable applications."/>
<TextRow h="Customize Your Application" p="Use our intuitive tools to add new features and tailor the application to your specific requirements."/>
<TextRow h="Hire On-Demand Engineers" p="Browse our portal to find certified engineers with the skills you need. Hire a team instantly and get started on your project without delay."/>
<TextRow h="Achieve Predictable Results" p="Work with your dedicated team to ensure your project is delivered on time and within budget. Our outcome-driven billing model ensures you only pay for the results."/>

<button  className="Rectangle8 w-48 h-14 bg-indigo-500 rounded-full text-neutral-100 text-lg font-bold font-['Poppins'] uppercase">
    <Link to="/Login">
get started
    </Link>
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
{/* <button className="text-neutral-100 text-lg font-bold font-['Poppins'] uppercase  w-60 h-14 bg-indigo-500 rounded-full" >get more details</button> */}
    </div>

    <div className='w-[50%] flex justify-center items-center pr-[7.915vw]  bg-[#D4FADA]'>
        <img alt='unable to load Image ' src='Images/homechooseus.png'/>
    </div>
</section>
        </>
  )
}

export default Home
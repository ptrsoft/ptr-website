import React from 'react'
// importing styles from asset / styles 
import '../../../../Assets/Styles/pages/Home/HeroSection.css'

// importing commom somponents from components
import GetStartedBtn from '../../../../Components/GetStartedBtn'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
      navigate('/contact-us');
    };
  return (
   <section className='space-container hero_sec'>
    {/* hero_sec left */}
<div className="hero_sec_left">
    <img className='xxx'  src='Images/XXX.svg' alt='XXX' />
    <img className='hero_img'  alt='Hero Image' src='Images/Hero.png' />
</div>

<div className="hero_sec_right ">
    <div className='hero_sec_right_heading text-balance'> <a style={{color:'#666AE5'}}> Unlock </a> the Future with
<a style={{color:'#666AE5'}}> AI-Native</a> Applications </div>

<span className='text-balance'>At PTR Technologies , we build next-gen AI-native applications that learn, optimize, and evolve—powering businesses with intelligent automation, seamless integrations, and real-time decision-making.</span>
<div className='flex gap-6'>
<GetStartedBtn label="Explore" onClick={()=> {
   const element = document.getElementById("AI-Native");
   element.scrollIntoView({ behavior: "smooth" }); // Instant scroll
}}/> <span className='text-balance'>our AI-Native Ecommerce and Supply Chain platform</span>
</div>
<div className='flex gap-6 items-center'>
<GetStartedBtn label="Start" 
onClick={()=> {
  const element = document.getElementById("offer-section");
  element.scrollIntoView({ behavior: "smooth" }); // Instant scroll
}}
/> <span>Your AI Native Journey</span>
</div>
 <img  className='hero_vector' src='Images/HeroVector.png' alt='Hero Vector' />
</div>

   </section>
  )
}

export default HeroSection
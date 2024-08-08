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

<div className="hero_sec_right">
    <div className='hero_sec_right_heading'> <a style={{color:'#666AE5'}}> Unlock </a>Unlimited Potential
with Fully Customizable
<a style={{color:'#666AE5'}}> Open SAAS</a> Solutions </div>

<span>At PTR SAAS, we deliver fully open and customizable applications, empowering you to effortlessly add new features.</span>
<GetStartedBtn onClick={handleContactClick}/>

<img  className='hero_vector' src='Images/HeroVector.png' alt='Hero Vector' />
</div>

   </section>
  )
}

export default HeroSection
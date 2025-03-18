import React from 'react'
import { Link } from 'react-router-dom';


// importing styling from assets / styles / pages /
import "../../../../Assets/Styles/pages/Home/MarketingSection.css"
const MarketingSection = () => {
  return (
    <div className='marketing_sec space-container'>

{/* left */}
<div className="marketing_sec_left">
<h2>Our Complete <a style={{color:'#666AE5'}}>AI-Native</a> E-commerce, Supply Chain & Farmer-Consumer Connection Platform</h2>

{/* text rows container */}
<div className='marketing_sec_left_text_con'>

<div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span> Seamless Farmer-to-Consumer Marketplace </span>
</div>

     <div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span> AI-Powered Supply Chain Optimization </span>
</div>

     <div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span> Intelligent Inventory & Demand Forecasting </span>
</div>

     <div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span>Automated Order & Payment Processing </span>
</div>

     <div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span> Personalized Consumer Experience </span>
</div> 

  <div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span> Smart Resource Allocation </span>
</div> 

  <div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span> Sustainable & Scalable Growth </span>
</div>
      

</div>

</div>

{/* right */}
<div className="marketing_sec_right">
    <img  alt='unable to load Images' src='Images/marketing.png' />
</div>


    </div>
  )
}

export default MarketingSection
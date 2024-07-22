import React from 'react'

// importing styling from assets / styles / pages /
import "../../../../Assets/Styles/pages/Home/MarketingSection.css"
const MarketingSection = () => {
  return (
    <div className='marketing_sec space-container'>

{/* left */}
<div className="marketing_sec_left">
    <h2>Our platform is built to provide <a style={{color:'#666AE5'}}> maximum flexibility</a>, ensuring it meets 
your unique business requirements.</h2>


{/* text rows container */}
<div className='marketing_sec_left_text_con'>

<div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span>Single Tenant App- Fully private, Fully Customizable</span>
</div>

<div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span>Zero Tech debt- App with all artifacts</span>
</div>

<div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span>Complete Open - You own it, you change it with no limit</span>
</div>

<div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span>Highest flexibility - Any cloud / Any Changes</span>
</div>

<div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span>One click E2E Engineering Team - Available On demand to make changes
    </span>
</div>

<div className='marketing_sec_left_text_row'>
    <img src='/Images/plus.svg' alt="" />
    <span>Vendor Friendly -Deliver Apps to your own customers

    </span>
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
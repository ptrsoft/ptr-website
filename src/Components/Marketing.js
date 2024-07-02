import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Marketing = () => {
  return (
    <div style={{height:'53.875rem', display:'flex' ,justifyContent:'space-between', alignItems:'center'}} className='container'>

<div style={{width:'49%' , display:'flex' , flexDirection:'column', gap:'3.23rem' }}>

<span className='marketing_headings'>Our platform is built to provide 
<span style={{color:'#666AE5'}}> maximum flexibility</span>, ensuring it meets 
your unique business requirements.</span>

<div style={{display:'flex' , flexDirection:'column' , gap:'3rem'}}>

<span style={{display:'flex' ,gap:'0.5rem', alignItems:'center'}} className='marketing_para'>
<FaPlus color='666AE5' size={22}/>
    Single Tenant App- Fully private, Fully Customizable
    </span>


    <span style={{display:'flex' ,gap:'0.5rem', alignItems:'center'}} className='marketing_para'>
<FaPlus color='666AE5' size={22}/>
Zero Tech debt- App with all artifacts
    </span>

    <span style={{display:'flex' ,gap:'0.5rem', alignItems:'center'}} className='marketing_para'>
<FaPlus color='666AE5' size={22}/>
Complete Open - You own it, you change it with no limit    </span>

    <span style={{display:'flex' ,gap:'0.5rem', alignItems:'center'}} className='marketing_para'>
<FaPlus color='666AE5' size={22}/>
Highest flexibility - Any cloud / Any Changes    </span>

    <span style={{display:'flex' ,gap:'0.5rem', alignItems:'center'}} className='marketing_para'>
<FaPlus color='666AE5' size={22}/>
One click E2E Engineering Team - Available On demand to make changes
    </span>

    <span style={{display:'flex' ,gap:'0.5rem', alignItems:'center'}} className='marketing_para'>
<FaPlus color='666AE5' size={22}/>
Vendor Friendly -Deliver Apps to your own customers
    </span>


</div>



</div>


<div style={{width:'49%' , display:'flex' , justifyContent:'end' , alignItems:'center'}}>
<img width="100%" src={`${process.env.PUBLIC_URL}/MarketingImg.png`} alt="Logo" />
    
</div>

    </div>
  )
}

export default Marketing
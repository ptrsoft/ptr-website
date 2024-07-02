import React from 'react'

const HeroSection = () => {
  return (
    <div style={{height:'52.25rem' , display:'flex'}} className='container'>
<div style={{display:'flex', alignItems:'center', width:"49%" , height:'100%'}}>
  
<img width="95%" src={`${process.env.PUBLIC_URL}/Hero.png`} alt="Logo" />

</div>

<div style={{display:'flex',flexDirection:'column', gap:12, position:'relative', justifyContent:'start',alignItems:"start", width:"49%" , height:'100%'}}>
  <h1 style={{
    marginTop:123,
    fontFamily:'Poppins',
    fontSize:"4.125rem",
    fontStyle:'normal'
    ,fontWeight:'700',
    lineHeight:'4.3125rem'
    ,textTransform:"capitalize"


  }}> <span style={{color:"#666AE5"}}>Unlock</span> Unlimited Potential with Fully Customizable <span style={{color:"#666AE5"}}>Open SAAS</span> Solutions</h1>

<span style={{width:"42.1875rem" , fontSize:"1rem"}}>At PTR SAAS, we deliver fully open and customizable applications, empowering you to effortlessly add new features.</span>


<button style={{background:'black'}} className='primary_btn'>Get start</button>

<img style={{position:"absolute", left:-80 , top:100}} width={59} src={`${process.env.PUBLIC_URL}/XXX.png`} alt="Logo" />

<img width={360} style={{position:'absolute' ,zIndex:'0',right:0, bottom:90}} src={`${process.env.PUBLIC_URL}rightSection.png
`} alt="Logo" />

</div>


    </div>
  )
}

export default HeroSection




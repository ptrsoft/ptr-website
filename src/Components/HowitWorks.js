import React from 'react'

const HowitWorks = () => {
  return (
    <div style={{height:'51.9375rem' , display:'flex'}}
    >
        
        
<div style={{width:"50%" ,background:'#DAE3F2', display:'flex', justifyContent:'center' , alignItems:'center', flexShrink:0, height:'100%'}}>
<img width={532} src={`${process.env.PUBLIC_URL}/HowItWorks.png`} alt="Logo" />

</div>


<div className='how-its-work' style={{width:"50%" ,paddingTop:'3.62rem' ,justifyContent:"center",alignItems:"center", display:'flex', gap:'1.62rem', flexDirection:'column', background:'#FFF' , flexShrink:0, height:'100%'}}>

    <div style={{width:'75%'}}>
    <span style={{ color: 'black',
  fontFamily: 'Poppins',
  fontSize: '2.8125rem',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '3.75rem', // 133.333%
  textTransform: 'capitalize',}}><span style={{color:'#666AE5'}}> How </span>It Works?</span>

<div className='how-its-work-text-box-wrapper'>

<div className='how-its-work-text-box'>


    <div>
 <span>Sign Up and Get Started: </span>
 <span>Create an account on our platform and gain access to our suite of open and customizable applications.</span>
    </div>
</div>

<div className='how-its-work-text-box'>
 <span>Sign Up and Get Started: </span>
 <span>Create an account on our platform and gain access to our suite of open and customizable applications.</span>
</div>

<div className='how-its-work-text-box'>
 <span>Sign Up and Get Started: </span>
 <span>Create an account on our platform and gain access to our suite of open and customizable applications.</span>
</div>

<div className='how-its-work-text-box'>
 <span>Sign Up and Get Started: </span>
 <span>Create an account on our platform and gain access to our suite of open and customizable applications.</span>
</div>

</div>

<button style={{marginTop:'1rem'}} className='primary_btn'>get started</button>

</div>


</div>
        
        
        </div>
  )
}

export default HowitWorks
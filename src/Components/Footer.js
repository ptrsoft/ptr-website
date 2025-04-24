import React from 'react'
import "../Assets/Styles/Components/Footer.css"
import { Link, useNavigate } from 'react-router-dom'
const Footer = () => {
 const navigate = useNavigate()
 const handleNavigate= ()=>{
  navigate('/contact-us')
 }
  return (
    <footer className='footer space-container'>

{/* footer top */}
<div className="footer_top">
    <h2>Automate your business processes with PTR Technologies </h2>
    <span>Contact us to discover how our AI-powered automation solutions can transform your operations.</span>
     <button onClick={handleNavigate} className='uppercase text-[#040404] bg-[#FFFFFF]'>GET STARTED</button>
  </div>

{/* devider */}
<div className='devider'></div>


<div className="footer_bottom">

  <div className="Column">
    <img className='footer_logo' src="Images/WhiteLogo.png" alt="" />
    <span>we deliver fully open and customizable applications, empowering you to effortlessly add new features.</span>
    <span className='iiii'>
        <a target='_blank' href="https://www.linkedin.com/company/ptr-technologies/">
    <img src="Images/linkdin.png" alt="" className="linkdin_img" />
        </a>
    </span>
  </div>

  {/* <div className="Column">
    <h3>USA</h3>
    <span>601 HADDON AVENUE SUITE COLLINGSWOOD, NJ 08108 UNITED STATES</span>
   <span> <a href="tel:+1(909)726-7508">+1 (909)726-7508</a></span>
  </div> */}

  <div className="Column">
    <h3>INDIA</h3>
    <span>WorkFlo Hitex Bizness Square
4th Floor, Unit 405-411, Jubilee Enclave
 Madhapur, Hyderabad, Telangana, 500081</span>
    <span> <a href="tel:+918892954321" >+91 8892954321</a> </span>

  </div> 
   <div className="Column">
    <h3>Company</h3>
    <span>
      <Link to={'/'}>
      Home
      </Link>
      </span>
      <span>
      <Link to={'/about-us'}>
      About Us
      </Link>
      </span>
      <span>
      <Link to={'/technologies'}>
      Technologies
      </Link>
      </span>
    <span>
    <Link to={'/process'}>
      Process
    </Link>
      </span>
      <span>
    <Link to={'/contact-us'}>
      Contact Us
    </Link>
      </span>

  </div>

</div>

{/* <div className='devider'></div> */}
<div className='rights'>
<span>2025 All Rights Reserved</span>

{/* <ul>
    <li>Privacy Policy</li>
    <li>Terms of Service</li>
    <li>Disclosure</li>
</ul> */}
</div>
    </footer>
  )
}

export default Footer
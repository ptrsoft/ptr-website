import React, { useState } from 'react'
import '../../../../Assets/Styles/pages/Home/OffersSection.css'
import { useNavigate } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const OffersSection = () => {
  const navigate = useNavigate()
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  const handleSelectChange = (event) => {
    setSelectedButton(Number(event.target.value));
  };

  const buttonStyles = {
    1: { background: '#F39CAD', border: '0.5px solid #000' },
    2: { background: '#82D38F', border: '0.5px solid #000' },
    3: { background: '#E9B986', border: '0.5px solid #000' },
    4: { background: '#9B8CEA', border: '0.5px solid #000' },
  };


  const handleNavigate = () => {
    navigate('/architecture')
  }
  return (
    <div className='OffersTab_sec space-container '>

     
      <div className="OffersTab_sec_top">
        <h2>What <span style={{ color: '#666AE5' }}>we offer</span> & <span style={{ color: '#666AE5' }}>How we do it?</span> </h2>
      </div>


      <div className='mobile_accordian'>

{/*mobile accordians  */}

<Accordion >
  <AccordionSummary id="panel-header" 
   expandIcon={<ExpandMoreIcon/>} style={{background:'#F39CAD'}} aria-controls="panel-content">
    <span className='accordian_headings'>
    Customizable Single-Tenant Apps</span>
  </AccordionSummary>
  <AccordionDetails >

    <div className='OffersTab_sec_bottom_img_container'>
      <img src='Images/Tenant.png' alt='unable to load Images' />
    </div>
    <h3 className='tabsMinHeadings'><span style={{ color: '#666AE5' }}> Open and Customizable</span> Single Tenant Applications</h3>
      <p className='accordian_para' >Experience unparalleled flexibility with our single-tenant SAAS applications,that is open and tailored to your unique business needs. Explore our robust backend platform and cutting-edge technology, delivering microservices-based enterprise apps with comprehensive operations management.</p>
  </AccordionDetails>
</Accordion>


{/* accordian two */}
<Accordion>
  <AccordionSummary   expandIcon={<ExpandMoreIcon/>}  id="panel-header" style={{background:'#82D38F'}} aria-controls="panel-content">
  <span className='accordian_headings'>
  High-Quality Zero Tech Debt
  </span>
  </AccordionSummary>
  <AccordionDetails >

    <div className='OffersTab_sec_bottom_img_container'>
      <img src='Images/TechDebt.png' alt='unable to load Images' />
    </div>
    <h3 className='tabsMinHeadings'  >High Quality Application with <span style={{ color: '#666AE5' }}>Zero Tech Debt</span></h3>
<p className='accordian_para'>At PTR Technology, for every use case that we develop, we follow a robust and efficient software development process designed to deliver high-quality solutions tailored to meet our clients' unique needs. Our approach combines industry best practices with innovative techniques to ensure that every use case is reliable, scalable, and secure and contains all software artifacts.</p>
     
  </AccordionDetails>
</Accordion>

{/* accordian three  */}
<Accordion>
  <AccordionSummary   expandIcon={<ExpandMoreIcon/>}  id="panel-header" style={{background:'#E9B986'}} aria-controls="panel-content">
  <span className='accordian_headings'>
  Modern Cloud-Native Apps
  </span>
  </AccordionSummary>
  <AccordionDetails >
    
  <div className='OffersTab_sec_bottom_img_container'>
 <img src='Images/nativeArchitectures.png' alt='unable to load Images' />
    </div>

   <h3 className='tabsMinHeadings' >Apps built with Most <span style={{ color: '#666AE5' }}>modern cloud native</span> architectures</h3>
  
      <p className='accordian_para'>Whether you're a writing a small mobility App or a large scale enterprise product, we have something for you. Explore our architecture central to learn about the principles, patterns, practices, and tools that we follow to deliver you the solution that is simple, promotes reusability and flexibility and of course very cost effective.</p>

      <button onClick={handleNavigate} className="read_more_btn accordian_read_more_btn">
              Read More
            </button>
    
  </AccordionDetails>
</Accordion>


{/* accordian four */}
<Accordion>
  <AccordionSummary   expandIcon={<ExpandMoreIcon/>} id="panel-header" style={{background:'#9B8CEA'}} aria-controls="panel-content">
    <span className='accordian_headings'>
  On-Demand Engineering Teams
    </span>
  </AccordionSummary>
  <AccordionDetails >
    
  <div className='OffersTab_sec_bottom_img_container'>
      <img src='Images/EngineeringTeams.png' alt='unable to load Images' />
    </div>
   <h3 className='tabsMinHeadings' ><span style={{ color: '#666AE5' }}>On-Demand</span> Engineering Teams</h3>


   <p className='accordian_para'>Hire Certified Engineers Instantly
<br />
<br />
Need additional engineering resources? Hire a complete engineering team on demand through our portal. Our pool of certified professionals is ready to join your project instantly, ensuring you have the talent you need, when you need it.We understand the importance of predictable outcomes. That’s why our teams work with a clear delivery plan and a billing model that is driven by results. You only pay for the value delivered, ensuring cost-effectiveness and transparency.</p>
  </AccordionDetails>
</Accordion>

</div>

      {/* offer table bottom */}


     

      <div className='OffersTab_sec_bottom'>
        {/* button contaienr */}
        <div className='OffersTab_sec_bottom_btn_container '>

          <button onClick={() => handleButtonClick(1)}
            style={{
              background: selectedButton === 1 ? '#F39CAD' : '#F3C4CD',
              border: selectedButton === 1 ? '1.5px solid #000' : 'none'
            }}
            className='tab_btn'>
            <img alt='icon' src='icons/buttonone.svg' />
            <span>Customizable Single-Tenant Apps</span>
          </button>


          <button onClick={() => handleButtonClick(2)}
            style={{
              background: selectedButton === 2 ? '#82D38F' : '#D4FADA',
              border: selectedButton === 2 ? '1.5px solid #000' : 'none'
            }}
            className='tab_btn'>
            <img alt='icon' src='icons/buttontwo.svg' />
            <span>High-Quality Zero Tech Debt</span>
          </button>


          <button onClick={() => handleButtonClick(3)}
            style={{
              background: selectedButton === 3 ? '#E9B986' : '#FDE3C7',
              border: selectedButton === 3 ? '1.5px solid #000' : 'none'
            }}
            className='tab_btn'>
            <img alt='icon' src='icons/buttonthree.svg' />
            <span>Modern Cloud-Native Apps</span>
          </button>

          <button onClick={() => handleButtonClick(4)}
            style={{
              background: selectedButton === 4 ? '#9B8CEA' : '#C9BFFE',
              border: selectedButton === 4 ? '1.5px solid #000' : 'none'
            }}
            className='tab_btn'>
            <img alt='icon' src='icons/buttonfour.svg' />
            <span>On-Demand Engineering Teams</span>
          </button>
        </div>

        <div className='OffersTab_sec_bottom_img_container'>

          {selectedButton === 1 && <img src='Images/Tenant.png' alt='unable to load Images' />}
          {selectedButton === 2 && <img src='Images/TechDebt.png' alt='unable to load Images' />}
          {selectedButton === 3 && <img src='Images/nativeArchitectures.png' alt='unable to load Images' />}
          {selectedButton === 4 && <img src='Images/EngineeringTeams.png' alt='unable to load Images' />}

        </div>

        {/* 3rd */}
        <div className='tabs_3rd'>
          {selectedButton === 1 && <h3 className='tabsMinHeadings'><span style={{ color: '#666AE5' }}> Open and Customizable</span> Single Tenant Applications</h3>}
          {selectedButton === 2 && <h3 className='tabsMinHeadings'  >High Quality Application with <span style={{ color: '#666AE5' }}>Zero Tech Debt</span></h3>}
          {selectedButton === 3 && <h3 className='tabsMinHeadings' >Apps built with Most <span style={{ color: '#666AE5' }}>modern cloud native</span> architectures</h3>}
          {selectedButton === 4 && <h3 className='tabsMinHeadings' ><span style={{ color: '#666AE5' }}>On-Demand</span> Engineering Teams</h3>}

          {selectedButton === 1 &&
            <p>Experience unparalleled flexibility with our single-tenant SAAS applications,that is open and tailored to your unique business needs. Explore our robust backend platform and cutting-edge technology, delivering microservices-based enterprise apps with comprehensive operations management.</p>
          }
          {selectedButton === 2 &&
            <p>At PTR Technology, for every use case that we develop, we follow a robust and efficient software development process designed to deliver high-quality solutions tailored to meet our clients' unique needs. Our approach combines industry best practices with innovative techniques to ensure that every use case is reliable, scalable, and secure and contains all software artifacts.</p>
          }
          {selectedButton === 3 &&
            <p>Whether you're a writing a small mobility App or a large scale enterprise product, we have something for you. Explore our architecture central to learn about the principles, patterns, practices, and tools that we follow to deliver you the solution that is simple, promotes reusability and flexibility and of course very cost effective.</p>
          }
          {selectedButton === 4 &&
            <p>Hire Certified Engineers Instantly

              Need additional engineering resources? Hire a complete engineering team on demand through our portal. Our pool of certified professionals is ready to join your project instantly, ensuring you have the talent you need, when you need it.We understand the importance of predictable outcomes. That’s why our teams work with a clear delivery plan and a billing model that is driven by results. You only pay for the value delivered, ensuring cost-effectiveness and transparency.</p>
          }



          {/* {selectedButton === 1 &&
 <button className="read_more_btn">
 Read More
</button>
} */}

          {/* {selectedButton === 2 &&
 <button className="read_more_btn">
 Read More
</button>
} */}

          {selectedButton === 3 &&
            <button onClick={handleNavigate} className="read_more_btn">
              Read More
            </button>
          }

          {/* {selectedButton === 4 &&
 <button className="read_more_btn">
 Read More
</button>
} */}










        </div>


      </div>


    </div>
  )
}

export default OffersSection
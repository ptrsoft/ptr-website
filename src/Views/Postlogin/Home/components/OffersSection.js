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
   const handleSaasArc = () => {
    navigate('/saas-architecture')
  }
  const handleProcess = () =>{
    navigate("/process")
  }
  return (
    <div className='OffersTab_sec space-container '>

     
      <div className="OffersTab_sec_top">
         <h2>AI-native <span style={{ color: '#666AE5' }}>capabilities</span>, such as:</h2>
       </div>


      <div className='mobile_accordian'>

{/*mobile accordians  */}

<Accordion >
  <AccordionSummary id="panel-header" 
   expandIcon={<ExpandMoreIcon/>} style={{background:'#F39CAD'}} aria-controls="panel-content">
    <span className='accordian_headings'>
    AI-Powered Automation</span>
  </AccordionSummary>
  <AccordionDetails >

    <div className='OffersTab_sec_bottom_img_container'>
      <img src='Images/Tenant.png' alt='unable to load Images' />
    </div>
    <h3 className='tabsMinHeadings'>Automate complex workflows & decision-making.</h3>
      <p className='accordian_para' >Unlock efficiency and scalability with our AI-powered automation solutions. We help businesses streamline complex workflows, eliminate manual tasks, and enhance decision-making using cutting-edge AI and machine learning. From intelligent process automation to predictive analytics, our solutions optimize operations, reduce costs, and improve accuracy. Seamlessly integrate AI into your existing systems and transform the way you work—faster, smarter, and more efficient than ever.</p>
      <button onClick={handleSaasArc} className="read_more_btn accordian_read_more_btn">
              Read More
            </button>
  </AccordionDetails>
</Accordion>


{/* accordian two */}
<Accordion>
  <AccordionSummary   expandIcon={<ExpandMoreIcon/>}  id="panel-header" style={{background:'#82D38F'}} aria-controls="panel-content">
  <span className='accordian_headings'>
  Real-Time Insights
  </span>
  </AccordionSummary>
  <AccordionDetails >

    <div className='OffersTab_sec_bottom_img_container'>
      <img src='Images/TechDebt.png' alt='unable to load Images' />
    </div>
    <h3 className='tabsMinHeadings'> AI-driven analytics for faster, smarter decisions.</h3>
<p className='accordian_para'>Turn data into actionable insights with AI-driven analytics. Our advanced AI models process vast amounts of data in real time, uncovering hidden patterns, trends, and predictions to drive smarter business decisions. From predictive analytics to automated reporting, our solutions empower organizations to optimize operations, enhance customer experiences, and maximize profitability. Stay ahead of the competition with data-driven intelligence that works faster, smarter, and more accurately than ever before.</p>
 <button onClick={handleProcess} className="read_more_btn accordian_read_more_btn">
              Read More
            </button>
     
  </AccordionDetails>
</Accordion>

{/* accordian three  */}
<Accordion>
  <AccordionSummary   expandIcon={<ExpandMoreIcon/>}  id="panel-header" style={{background:'#E9B986'}} aria-controls="panel-content">
  <span className='accordian_headings'>
  Seamless AI Integrations
  </span>
  </AccordionSummary>
  <AccordionDetails >
    
  <div className='OffersTab_sec_bottom_img_container'>
 <img src='Images/nativeArchitectures.png' alt='unable to load Images' />
    </div>

   <h3 className='tabsMinHeadings' >Plug into your existing systems with AI-first efficiency.</h3>
  
      <p className='accordian_para'>Seamlessly integrate AI into your existing systems to enhance efficiency, automate processes, and unlock new capabilities. Our AI integration services connect machine learning models, automation tools, and data-driven insights with your current workflows, ensuring a smooth and scalable transformation. Whether it's chatbots, predictive analytics, or intelligent automation, we help businesses leverage AI for smarter operations and better decision-making—without disrupting their existing infrastructure.</p>

      <button onClick={handleNavigate} className="read_more_btn accordian_read_more_btn">
              Read More
            </button>
    
  </AccordionDetails>
</Accordion>


{/* accordian four */}
<Accordion>
  <AccordionSummary   expandIcon={<ExpandMoreIcon/>} id="panel-header" style={{background:'#9B8CEA'}} aria-controls="panel-content">
    <span className='accordian_headings'>
    Custom AI Models
    </span>
  </AccordionSummary>
  <AccordionDetails >
    
  <div className='OffersTab_sec_bottom_img_container'>
      <img src='Images/EngineeringTeams.png' alt='unable to load Images' />
    </div>
   <h3 className='tabsMinHeadings' > Train and deploy AI models tailored for your business.</h3>


   <p className='accordian_para'>Empower your business with tailor-made AI models designed to solve your unique challenges. Our custom AI solutions leverage cutting-edge machine learning, deep learning, and NLP to deliver highly accurate, scalable, and efficient models. Whether you need predictive analytics, intelligent automation, or advanced data processing, we build AI models that seamlessly integrate with your workflows, driving better decisions, faster operations, and greater business impact.</p>
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
            <span> AI-Powered Automation</span>
          </button>


          <button onClick={() => handleButtonClick(2)}
            style={{
              background: selectedButton === 2 ? '#82D38F' : '#D4FADA',
              border: selectedButton === 2 ? '1.5px solid #000' : 'none'
            }}
            className='tab_btn'>
            <img alt='icon' src='icons/buttontwo.svg' />
            <span>Real-Time Insights</span>
          </button>


          <button onClick={() => handleButtonClick(3)}
            style={{
              background: selectedButton === 3 ? '#E9B986' : '#FDE3C7',
              border: selectedButton === 3 ? '1.5px solid #000' : 'none'
            }}
            className='tab_btn'>
            <img alt='icon' src='icons/buttonthree.svg' />
            <span>Seamless AI Integrations </span>
          </button>

          <button onClick={() => handleButtonClick(4)}
            style={{
              background: selectedButton === 4 ? '#9B8CEA' : '#C9BFFE',
              border: selectedButton === 4 ? '1.5px solid #000' : 'none'
            }}
            className='tab_btn'>
            <img alt='icon' src='icons/buttonfour.svg' />
            <span>Custom AI Models</span>
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
          {selectedButton === 1 && <h3 className='tabsMinHeadings'><span style={{ color: '#666AE5' }}>Automate</span> complex workflows & decision-making.</h3>}
          {selectedButton === 2 && <h3 className='tabsMinHeadings'  > AI-driven analytics for <span style={{color:"#666AE5"}}>faster</span>, <span style={{color:"#666AE5"}}>smarter</span> decisions.</h3>}
          {selectedButton === 3 && <h3 className='tabsMinHeadings' >Plug into your existing systems with <span style={{color:"#666AE5"}}>AI-first efficiency</span>.</h3>}
          {selectedButton === 4 && <h3 className='tabsMinHeadings' > Train and deploy <span style={{ color: '#666AE5' }}>AI models</span> tailored for your <span style={{ color: '#666AE5' }}>business</span>.</h3>}

          {selectedButton === 1 &&
            <p>Unlock efficiency and scalability with our AI-powered automation solutions. We help businesses streamline complex workflows, eliminate manual tasks, and enhance decision-making using cutting-edge AI and machine learning. From intelligent process automation to predictive analytics, our solutions optimize operations, reduce costs, and improve accuracy. Seamlessly integrate AI into your existing systems and transform the way you work—faster, smarter, and more efficient than ever.</p>
          }
          {selectedButton === 2 &&
            <p>Turn data into actionable insights with AI-driven analytics. Our advanced AI models process vast amounts of data in real time, uncovering hidden patterns, trends, and predictions to drive smarter business decisions. From predictive analytics to automated reporting, our solutions empower organizations to optimize operations, enhance customer experiences, and maximize profitability. Stay ahead of the competition with data-driven intelligence that works faster, smarter, and more accurately than ever before.</p>
          }
          {selectedButton === 3 &&
          <p>Seamlessly integrate AI into your existing systems to enhance efficiency, automate processes, and unlock new capabilities. Our AI integration services connect machine learning models, automation tools, and data-driven insights with your current workflows, ensuring a smooth and scalable transformation. Whether it's chatbots, predictive analytics, or intelligent automation, we help businesses leverage AI for smarter operations and better decision-making—without disrupting their existing infrastructure.</p>
           }
          {selectedButton === 4 &&
          <p>Empower your business with tailor-made AI models designed to solve your unique challenges. Our custom AI solutions leverage cutting-edge machine learning, deep learning, and NLP to deliver highly accurate, scalable, and efficient models. Whether you need predictive analytics, intelligent automation, or advanced data processing, we build AI models that seamlessly integrate with your workflows, driving better decisions, faster operations, and greater business impact. </p>
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
          {selectedButton === 1 &&
            <button onClick={handleSaasArc} className="read_more_btn">
              Read More
            </button>
          } 
          {selectedButton === 2 &&
          <div style={{width:"100%"}}>
             <button style={{marginTop:"20px"}} onClick={handleProcess} className="read_more_btn">
              Read More
            </button>
            </div>
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
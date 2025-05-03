import React, { useRef, useState } from 'react'
import { ArrowDown , Sparkles} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { Modal ,Box} from '@mui/material';

import marketingGirlImage from "../../../../Assets/Images/marketing.png"
import leftImg from "../../../../Assets/Images/marketingSecMan.svg"

import pos1 from "../../../../Assets/Images/Pos Svg/01.svg"
import pos2 from "../../../../Assets/Images/Pos Svg/02.svg"
import pos3 from "../../../../Assets/Images/Pos Svg/03.svg"
import pos4 from "../../../../Assets/Images/Pos Svg/04.svg"
import pos5 from "../../../../Assets/Images/Pos Svg/05..svg"
import pos6 from "../../../../Assets/Images/Pos Svg/06.svg"
import pos7 from "../../../../Assets/Images/Pos Svg/07.svg"
import pos8 from "../../../../Assets/Images/Pos Svg/08.svg"
import pos9 from "../../../../Assets/Images/Pos Svg/09.svg"
import pos10 from "../../../../Assets/Images/Pos Svg/10.svg"
import pos11 from "../../../../Assets/Images/Pos Svg/11.svg"
import pos12 from "../../../../Assets/Images/Pos Svg/12.svg"

const ServiceCard = ({ icon, title, subtitle ,bg , navigateTo , OnClick }) => {
  return (
   <div style={{background:bg}} className={`rounded-xl p-4 lg:p-6 text-center max-w-sm mx-auto hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}>
   {/* Icon */}
   <div className="flex bg-white w-[60px] h-[55px] lg:w-[75px] lg:h-[70px] items-center rounded-md m-auto justify-center mb-4">
   <img src={icon} alt="" className="w-[30px] lg:w-[40px]" />
   </div>

   {/* Title */}
   <h2 className="text-xl lg:text-2xl font-bold text-[#000000] mb-2">{title}</h2>

   {/* Subtitle */}
   <p className="text-sm lg:text-base text-[#414141] mb-4 lg:mb-6">
   {subtitle}
   </p>

   {/* Buttons */}
   <div className="flex justify-center gap-2 lg:gap-4">
     <button onClick={OnClick} className="bg-white text-gray-800 font-medium py-1 lg:py-2 px-4 lg:px-6 rounded-lg shadow hover:bg-gray-100 text-sm lg:text-base">
       Preview
     </button>
     <button onClick={() => window.open(navigateTo, "_blank")} className="bg-[#666AE5] text-white font-medium py-1 lg:py-2 px-4 lg:px-6 rounded-lg shadow hover:bg-gray-100 text-sm lg:text-base">
       Visit App
     </button>
   </div>
 </div>
 );
};

const MarketingSection = () => {
  const sliderRef = useRef(null); // Use ref to access the slider instance

  const [procurement,setProcurement] = useState(false)
  const [accounting,setAccounting] = useState(false)
  const [inventory,setInventory] = useState(false)
  const [ecom,setEcom] = useState(false)
  const [pos,setPos] = useState(false)

  const settings = {
        dots: true, // Show dots below the slider
        infinite: true, // Infinite looping of images
        speed: 500, // Transition speed
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: false, // Enable autoplay
        autoplaySpeed: 2000, // Time between each slide change
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
      }
    
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <div id='AI-Native' className='space-container global_padding bg-[#FFFFFF]'>

<div className='min-h-[90vh] flex flex-col lg:flex-row justify-between gap-8 lg:gap-0'>
{/* left  */}
<div className='w-full lg:w-[50%] relative flex-col flex justify-center items-center lg:items-start'> 

<img className='mb-3 w-full lg:w-[430px] mx-auto' src={leftImg} alt="" />

  <div className='bg-[#674FA31A] flex items-center gap-2 pl-4 pr-4 pt-2 pb-2 rounded-2xl mb-3'>
    <Sparkles className='text-[#666AE5] w-5 h-5'/>
    <span className='text-[#666AE5] font-bold text-[14px] lg:text-[24px] leading-[18px] lg:leading-[30px] whitespace-nowrap'>Revolutionizing Supply Chain Management</span>
  </div>
  <h2 className='mb-3 font-[poppins] font-bold text-[2rem] lg:text-[2.7rem] leading-[40px] lg:leading-[70px] tracking-normal capitalize text-center lg:text-left'>Our <span style={{color:"#666AE5"}}>AI-Native Ecommerce</span> & <span style={{color:"#666AE5"}}>Supply Chain</span> Platform</h2>

  <div onClick={() => handleScroll('ai-native-products')} className="bg-[#666AE51A] animate-bounce rounded-full flex items-center justify-center w-[50px] h-[50px] absolute cursor-pointer bottom-[-50px] lg:bottom-0 left-1/2 transform -translate-x-1/2">
    <ArrowDown className="w-9 h-9 text-[#666AE5]" />
  </div>
</div>

{/* right  */}
<div className='w-full lg:w-[50%] flex justify-center lg:justify-end items-center'>
<img className='w-full lg:w-[90%] mt-8 lg:mt-0' src={marketingGirlImage} alt="" />
</div>
</div>

{/* products */}
<div id='ai-native-products' className='grid pt-[70px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>  
  <ServiceCard bg="#B0C3C4" OnClick={()=> setProcurement(true)} navigateTo="/" icon="Images/Procurement.png" title={"Procurement"} subtitle={"Streamlining procurement processes to ensure timely and cost-effective sourcing."} />
  <ServiceCard OnClick={()=> setInventory(true)} bg="#D1D6E8" navigateTo="https://inventory.promodeagro.com" icon="Images/Inventry.png" title={"Inventory"} subtitle={"Optimizing inventory management for accuracy, efficiency, and real-time control"} />
  <ServiceCard OnClick={()=> setEcom(true)} bg="#EABFD4" navigateTo="https://www.promodeagro.com" icon="Images/ecommerce.png" title={"Ecommerce"} subtitle={"Empowering ecommerce operations with seamless integration and customer-focused solutions."} />
  <ServiceCard bg="#A7D6EB" navigateTo="/" icon="Images/Logistics.png" title={"Logistics"} subtitle={"Enhancing logistics operations for faster delivery, better tracking, and end-to-end visibility."} />
  <ServiceCard bg="#C0E8F3" navigateTo="/" icon="Images/CRM.png" title={"CRM"} subtitle={"Driving customer relationships with smart CRM solutions that boost engagement and retention."} />
  <ServiceCard OnClick={()=> setPos(true)} bg="#EABFD4" navigateTo="/" icon="Images/POS.png" title={"POS"} subtitle={"Streamlining transactions with advanced POS systems to boost sales and service."} />
</div>
</div>

    


 {/* Procurement Modal */}
 <Modal
        open={procurement}
        onClose={()=> setProcurement(false)}
 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>
          <div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setProcurement(false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

</div>
          <Slider  ref={sliderRef} {...settings}>
       
          <div>
             <img loading='lazy' src="https://images.promodeagro.com/Procurement/01.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img   loading='lazy'  src="https://images.promodeagro.com/Procurement/02.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>   
           <div>  
              <img   loading='lazy'   src="https://images.promodeagro.com/Procurement/03.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>   
           <div>  
              <img   loading='lazy'   src="https://images.promodeagro.com/Procurement/04.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>   
           <div>  
              <img   loading='lazy'   src="https://images.promodeagro.com/Procurement/05.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>   
           <div>  
              <img  loading='lazy'    src="https://images.promodeagro.com/Procurement/06.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
           <div>
             <img  loading='lazy' src="https://images.promodeagro.com/Procurement/07.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img  loading='lazy' src="https://images.promodeagro.com/Procurement/08.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Procurement/09.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
      
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Procurement/10.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Procurement/11.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img  loading='lazy' src="https://images.promodeagro.com/Procurement/12.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Procurement/13.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
      </Slider>

 
          </Box>

          
      </Modal>



   {/* inventory modal */}
  <Modal
        open={inventory}
        onClose={()=> setInventory(false)}
 
        aria-labelledby="modal-modal-title"         aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
            <div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setInventory(false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
   <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
 </svg>

 </div>
          <Slider  ref={sliderRef} {...settings}>
       
          
            <div>
              <img src="https://images.promodeagro.com/Inventory/Container%201%20Inventory.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          
            <div>
            <img src="https://images.promodeagro.com/Inventory/Container 2.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 3.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 4.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 5.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 6.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 7.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 8.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 9.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div> 

         <div>
            <img src="https://images.promodeagro.com/Inventory/Container 10.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
         </div>           
     </Slider>
         </Box>
     </Modal>   



      {/* Ecpmmerce modal  */}

  <Modal
        open={ecom}
        onClose={()=> setEcom(false)}
 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>
          <div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setEcom(false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
  <line x1="18" y1="6" x2="6" y2="18" />
     <line x1="6" y1="6" x2="18" y2="18" />
</svg>

</div>
           <Slider  ref={sliderRef} {...settings}>
     
        
            <div>
              <img loading='lazy' src="https://images.promodeagro.com/B2C/Home-page.svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
           </div>         
           <div>
              <img loading='lazy' src="https://images.promodeagro.com/B2C/Home-page (1).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
           </div>          
           <div>
              <img loading='lazy' src="https://images.promodeagro.com/B2C/Front-page.svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>         
  <div>
              <img loading='lazy' src="https://images.promodeagro.com/B2C/Bengali Vegetable page.svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
           </div>

       <div>
          <img loading='lazy' src="https://images.promodeagro.com/B2C/Bengali Homeneeds page.svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
       </div>

       <div>
          <img loading='lazy' src="https://images.promodeagro.com/B2C/Bengali Homeneeds page (1).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
       </div>
       <div>
          <img loading='lazy' src="https://images.promodeagro.com/B2C/Bengali Homeneeds page (2).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
       </div>
       <div>
          <img loading='lazy' src="https://images.promodeagro.com/B2C/Bengali Homeneeds page (3).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
       </div>
       <div>
          <img loading='lazy' src="https://images.promodeagro.com/B2C/Bengali Homeneeds page (4).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
       </div>

        
    </Slider>
    
          </Box>
       </Modal>

{/* accounting */}
  <Modal
        open={accounting}
        onClose={()=> setAccounting(false)}
 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>
<div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setAccounting(false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

</div>
          <Slider  ref={sliderRef} {...settings}>
       
          
           <div>
             <img  loading='lazy' src="https://images.promodeagro.com/Finance_and_management/01.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Finance_and_management/02.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Finance_and_management/03.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Finance_and_management/04.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Finance_and_management/05.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Finance_and_management/06.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img loading='lazy'  src="https://images.promodeagro.com/Finance_and_management/07.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 

          
           
          
      </Slider>
    
          </Box>
      </Modal> 


{/* POS */}

<Modal
        open={pos}
        onClose={()=> setPos(false)}
 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>
          <div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setPos(false)}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

</div>
          <Slider  ref={sliderRef} {...settings}>
       
          
           <div>
             <img src={pos1} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos2} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos3} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos4} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos5} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos6} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos7} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos8} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>

          <div>
             <img src={pos9} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos10} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={pos11} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>

          <div>
             <img src={pos12} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
          </div>



                    
      </Slider>
    
          </Box>
      </Modal>
      
     </>
  )
}

export default MarketingSection

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  maxWidth: "1200px",
  bgcolor: 'white',
  boxShadow: 24,
  borderRadius: 2,
  p: 2,
  '@media (min-width: 768px)': {
    p: 4,
  }
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{ ...style, display: "flex",color:"red", justifyContent:"center",alignItems:"center", width:"40px",height:"40px",borderRadius:"50%", background: "#666AE5" }}
    onClick={onClick}
  />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex",color:"red", justifyContent:"center",alignItems:"center", width:"40px",height:"40px",borderRadius:"50%", background: "#666AE5" }}
      onClick={onClick}
    />
  );
}


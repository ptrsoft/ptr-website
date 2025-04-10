import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

 // importing styling from assets / styles / pages /
import "../../../../Assets/Styles/pages/Home/MarketingSection.css"
import { Modal ,Box, Paper } from '@mui/material';
import Slider from 'react-slick';
import Ecomnmerce from "../../../../Assets/Images/Home-page.jpg"

// procurement Images 
import ProcurementImg1 from "../../../../Assets/Images/Procurement/01.svg"
import ProcurementImg2 from "../../../../Assets/Images/Procurement/02.svg"
import ProcurementImg3 from "../../../../Assets/Images/Procurement/03.svg"
import ProcurementImg4 from "../../../../Assets/Images/Procurement/04.svg"
import ProcurementImg5 from "../../../../Assets/Images/Procurement/05.svg"
import ProcurementImg6 from "../../../../Assets/Images/Procurement/06.svg"
import ProcurementImg7 from "../../../../Assets/Images/Procurement/07.svg"
import ProcurementImg8 from "../../../../Assets/Images/Procurement/08.svg"
import ProcurementImg9 from "../../../../Assets/Images/Procurement/09.svg"
 

// accointing images 
import Accounting1 from "../../../../Assets/Images/Finance and management/01.svg"
import Accounting2 from "../../../../Assets/Images/Finance and management/02.svg"
import Accounting3 from "../../../../Assets/Images/Finance and management/03.svg"
import Accounting4 from "../../../../Assets/Images/Finance and management/04.svg"
import Accounting5 from "../../../../Assets/Images/Finance and management/05.svg"
import Accounting6 from "../../../../Assets/Images/Finance and management/06.svg"

// inventor images 
import inventory1 from "../../../../Assets/Images/Inventory Svg Img/Container 1 Inventory.svg"
import inventory2 from "../../../../Assets/Images/Inventory Svg Img/Container 2.svg"
import inventory3 from "../../../../Assets/Images/Inventory Svg Img/Container 3.svg"
import inventory4 from "../../../../Assets/Images/Inventory Svg Img/Container 4.svg"
import inventory5 from "../../../../Assets/Images/Inventory Svg Img/Container 5.svg"
import inventory6 from "../../../../Assets/Images/Inventory Svg Img/Container 6.svg"
import inventory7 from "../../../../Assets/Images/Inventory Svg Img/Container 7.svg"
import inventory8 from "../../../../Assets/Images/Inventory Svg Img/Container 8.svg"
import inventory9 from "../../../../Assets/Images/Inventory Svg Img/Container 9.svg"
import inventory10 from "../../../../Assets/Images/Inventory Svg Img/Container 10.svg"

// Ecomnmerce images 
 import ecom1 from "../../../../Assets/Images/B2C Svg/Bengali Homeneeds page (1).svg"
 import ecom2 from "../../../../Assets/Images/B2C Svg/Bengali Homeneeds page (2).svg"
 import ecom3 from "../../../../Assets/Images/B2C Svg/Bengali Homeneeds page (3).svg"
 import ecom4 from "../../../../Assets/Images/B2C Svg/Bengali Homeneeds page (4).svg"
 import ecom5 from "../../../../Assets/Images/B2C Svg/Home-page.svg"
 import ecom6 from "../../../../Assets/Images/B2C Svg/Front-page.svg"
 import ecom7 from "../../../../Assets/Images/B2C Svg/Home-page (1).svg"

//  pos images
import pos1 from "../../../../Assets/Images/POS SVG/Login Page.svg"
 const MarketingSection = () => {
   // Settings for the slick carousel
   const [open,setOpen] = useState(false)
   const sliderRef = useRef(null); // Use ref to access the slider instance

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

 
  
  //  // Handle previous and next button clicks
  //  const goToPrev = () => {
  //   sliderRef.current.slickPrev(); // Navigate to previous slide
  // };

  // const goToNext = () => {
  //   sliderRef.current.slickNext(); // Navigate to next slide
  // };

const [procurement,setProcurement] = useState(false)
const [accounting,setAccounting] = useState(false)
const [inventory,setInventory] = useState(false)
const [ecom,setEcom] = useState(false)

  return (
    <div id='AI-Native' className='marketing_sec space-container'>

{/* left */}
<div className="marketing_sec_left">
<h2 className=''>Our Complete <a style={{color:'#666AE5'}}>AI-Native</a> E-commerce, Supply Chain & Farmer-Consumer Connection Platform</h2>

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
<div className="marketing_sec_right flex flex-col">
<div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-5">

<button
                 className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
                  transition-all duration-300 hover:-translate-y-1 border border-gray-100
                  hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
                  text-left"
                  onClick={()=> setEcom(true)}

              >
                <div className="space-y-3">
                  <div className="h-10 w-10 bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
                  🛒 

                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
                    {"Ecommerce"}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </button>
              
<button
                 className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
                  transition-all duration-300 hover:-translate-y-1 border border-gray-100
                  hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
                  text-left"
                  onClick={()=> setProcurement(true)}

              >
                <div className="space-y-3">
                  <div className="h-10 w-10 bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
                  📝
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
                    {"Procurement"}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </button>

              <button
                 className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
                  transition-all duration-300 hover:-translate-y-1 border border-gray-100
                  hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
                  text-left"
                  onClick={()=> setAccounting(true)}

              >
                <div className="space-y-3">
                  <div className="h-10 w-10 bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
                  💵
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
                    {"Accounting"}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </button>

              <button
                 className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
                  transition-all duration-300 hover:-translate-y-1 border border-gray-100
                  hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
                  text-left"
                  onClick={()=> setInventory(true)}

              >
                <div className="space-y-3">
                  <div className="h-10 w-10 text-[2rem] bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
                📦
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
                    {"Inventory"}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </button> 
              
            


             
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

          <Slider  ref={sliderRef} {...settings}>
       
          <div>
             <img src={ProcurementImg1} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img src={ProcurementImg2} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={ProcurementImg3} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img src={ProcurementImg4} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img src={ProcurementImg5} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img src={ProcurementImg6} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img src={ProcurementImg7} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
          <div>
             <img src={ProcurementImg8} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={ProcurementImg9} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          
      </Slider>
    
          </Box>
      </Modal>


{/* accounting Modal  */}
<Modal
        open={accounting}
        onClose={()=> setAccounting(false)}
 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>

          <Slider  ref={sliderRef} {...settings}>
       
          
           <div>
             <img src={Accounting1} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 

           <div>
             <img src={Accounting2} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 

           <div>
             <img src={Accounting3} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  

          <div>
             <img src={Accounting4} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  

          <div>
             <img src={Accounting5} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  

          <div>
             <img src={Accounting6} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>  
           
          
      </Slider>
    
          </Box>
      </Modal>{/* accounting Modal  */}


      {/* inventory modal */}
<Modal
        open={inventory}
        onClose={()=> setInventory(false)}
 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={modalStyle}>

          <Slider  ref={sliderRef} {...settings}>
       
          
           <div>
             <img src={inventory1} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 

          <div>
             <img src={inventory2} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={inventory3} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={inventory4} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={inventory5} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={inventory6} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={inventory7} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={inventory8} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={inventory9} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={inventory10} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
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

          <Slider  ref={sliderRef} {...settings}>
       
          
           <div>
             <img src={ecom5} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>
          <div>
             <img src={ecom7} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>     
              <div>
             <img src={ecom6} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div>
          
          
          <div>
             <img src={ecom1} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 

          <div>
             <img src={ecom2} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={ecom3} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src={ecom4} alt={'Image Not found'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
            


        
           
          
      </Slider>
    
          </Box>
      </Modal>




    </div>
  )
}

export default MarketingSection


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


// The modal styles can be customized using the Box component
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  // height:"80%",
  bgcolor: 'white',
   boxShadow: 24,borderRadius:2,
  p: 4,
};

 


// import React from 'react';

// const MarketingSection = () => {
//   const products = [
//     "Wireless Headphones",
//     "Smart Watches",
//     "Bluetooth Speakers",
//     "E-Readers",
//     "Fitness Trackers",
//     "VR Headsets",
//     "Action Cameras",
//     "Drone Cameras",
//     "Gaming Consoles"
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="space-container  mx-auto">
//         <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
//           {/* Left Content */}
//           <div className="flex-1 space-y-8">
//             <div className="space-y-6">
//               <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
//               Our Complete AI-Native E-commerce, Supply Chain & Farmer-Consumer Connection Platform
//               </h2>
           
//             </div>

//             <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-6">
//                 Premium Benefits
//               </h3>
//               <ul className="space-y-5">
//                 <li className="flex items-center space-x-4">
//                   <div className="p-2 bg-blue-100 rounded-lg">
//                     <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                   </div>
//                   <span className="text-gray-600">24-month extended warranty</span>
//                 </li>
//                 <li className="flex items-center space-x-4">
//                   <div className="p-2 bg-purple-100 rounded-lg">
//                     <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>
//                   </div>
//                   <span className="text-gray-600">Fast 24h delivery</span>
//                 </li>
//                 <li className="flex items-center space-x-4">
//                   <div className="p-2 bg-green-100 rounded-lg">
//                     <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
//                     </svg>
//                   </div>
//                   <span className="text-gray-600">Premium support team</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Products Grid */}
//           <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-5">
//             {products.map((product, index) => (
//               <button
//                 key={index}
//                 className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
//                   transition-all duration-300 hover:-translate-y-1 border border-gray-100
//                   hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
//                   text-left"
//               >
//                 <div className="space-y-3">
//                   <div className="h-10 w-10 bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
//                     <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
//                     </svg>
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
//                     {product}
//                   </h3>
//                 </div>
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                   </svg>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarketingSection;
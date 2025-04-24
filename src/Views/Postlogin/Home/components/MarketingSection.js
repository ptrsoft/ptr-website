 
import React, { useRef, useState } from 'react'
import { ArrowDown , Sparkles} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { Modal ,Box} from '@mui/material';

//  // importing styling from assets / styles / pages /
// import "../../../../Assets/Styles/pages/Home/MarketingSection.css"
// import { Modal ,Box, Paper } from '@mui/material';
// import Slider from 'react-slick';
// import Ecomnmerce from "../../../../Assets/Images/Home-page.jpg"

import marketingGirlImage from "../../../../Assets/Images/marketing.png"
import leftImg from "../../../../Assets/Images/marketingSectionImg.svg"

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
 
  
//  const MarketingSection = () => {
//    // Settings for the slick carousel
//    const [open,setOpen] = useState(false)
//    const sliderRef = useRef(null); // Use ref to access the slider instance

//    const settings = {
//     dots: true, // Show dots below the slider
//     infinite: true, // Infinite looping of images
//     speed: 500, // Transition speed
//     slidesToShow: 1, // Number of slides to show at once
//     slidesToScroll: 1, // Number of slides to scroll at once
//     autoplay: false, // Enable autoplay
//     autoplaySpeed: 2000, // Time between each slide change
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
    
//   }

 
  
//   //  // Handle previous and next button clicks
//   //  const goToPrev = () => {
//   //   sliderRef.current.slickPrev(); // Navigate to previous slide
//   // };

//   // const goToNext = () => {
//   //   sliderRef.current.slickNext(); // Navigate to next slide
//   // };

// const [procurement,setProcurement] = useState(false)
// const [accounting,setAccounting] = useState(false)
// const [inventory,setInventory] = useState(false)
// const [ecom,setEcom] = useState(false)
// const [pos,setPos] = useState(false)

//   return (
//     <div id='AI-Native' className='marketing_sec space-container'>

 

// {/* right */}
// <div className="marketing_sec_right flex flex-col">
// <h2 className='mb-[30px] pt-[50px]' >  </h2>
// <div className="OffersTab_sec_top pb-7">
//           <h2 className='text-balance '>Our AI-Native <span style={{ color: '#666AE5' }}>Commerce</span>  and <span style={{ color: '#666AE5' }}>Supply Chain</span> platform </h2>
//       </div>
// <div className="grid grid-cols-3  gap-3">
//    {/* grid grid-cols-2 lg:grid-cols-3 gap-5 */}
   
//    <button
//   className="group relative p-6 w-[400px] bg-white rounded-xl shadow-sm hover:shadow-lg 
//   transition-all duration-300 hover:-translate-y-1 border border-gray-100
//   hover:border-indigo-100  
//   text-left"
//  >
//   <div className="space-y-3">
//     <div className="flex justify-between items-start">
//       <div className="h-10 w-10 bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
//         🛒
//       </div>
//       <div className="flex space-x-2">
//         <button 
//           className="px-3 py-1 text-xs font-bold bg-gray-200 hover:bg-gray-200 rounded-md transition-colors"
//           onClick={() => setEcom(true)}
//         >
//           View Screenshot
//         </button>
//         <button 
//           className="px-3 py-1 font-bold text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-md transition-colors"
//          onClick={()=> { window.open("https://www.promodeagro.com", "_blank", "noopener,noreferrer");
//          }}
//         >
//           Visit
//         </button>
//       </div>
//     </div>
//     <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
//       {"Ecommerce"}
//     </h3>
//   </div>
//   <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//     <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//     </svg>
//   </div>
// </button>
 
              
// <button
//                  className="group  w-[400px] relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
//                   transition-all duration-300 hover:-translate-y-1 border border-gray-100
//                   hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
//                   text-left"
//                   onClick={()=> setProcurement(true)}

//               >
//                 <div className="space-y-3">
//                   <div className="h-10 w-10 bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
//                   📝
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
//                     {"Procurement"}
//                   </h3>
//                 </div>
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                   </svg>
//                 </div>
//               </button>

//               <button
//                  className="group w-[400px]  relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
//                   transition-all duration-300 hover:-translate-y-1 border border-gray-100
//                   hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
//                   text-left"
//                   onClick={()=> setAccounting(true)}

//               >
//                 <div className="space-y-3">
//                   <div className="h-10 w-10 bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
//                   💵
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
//                     {"Accounting"}
//                   </h3>
//                 </div>
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                   </svg>
//                 </div>
//               </button>

//               <button
//                  className="group w-[400px]  relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
//                   transition-all duration-300 hover:-translate-y-1 border border-gray-100
//                   hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
//                   text-left"
//                   onClick={()=> setInventory(true)}

//               >
//                 <div className="space-y-3">
//                   <div className="h-10 w-10 text-[2rem] bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
//                 📦
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
//                     {"Inventory"}
//                   </h3>
//                 </div>
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                   </svg>
//                 </div>
//               </button> 
              
            
//               <button
//                  className="group w-[400px]  relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
//                   transition-all duration-300 hover:-translate-y-1 border border-gray-100
//                   hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
//                   text-left"
//                   onClick={()=> setPos(true)}

//               >
//                 <div className="space-y-3">
//                   <div className="h-10 w-10 text-[2rem] bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
//                 📦
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
//                     {"POS"}
//                   </h3>
//                 </div>
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                   </svg>
//                 </div>
//               </button> 

//               <button
//                  className="group w-[400px]  relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
//                   transition-all duration-300 hover:-translate-y-1 border border-gray-100
//                   hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
//                   text-left"
//                   onClick={()=> setPos(true)}

//               >
//                 <div className="space-y-3">
//                   <div className="h-10 w-10 text-[2rem] bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
//                 📦
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
//                     {"POS"}
//                   </h3>
//                 </div>
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                   </svg>
//                 </div>
//               </button> 

//               <button
//                  className="group w-[400px]  relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
//                   transition-all duration-300 hover:-translate-y-1 border border-gray-100
//                   hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
//                   text-left"
//                   onClick={()=> setPos(true)}

//               >
//                 <div className="space-y-3">
//                   <div className="h-10 w-10 text-[2rem] bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
//                 📦
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
//                     {"POS"}
//                   </h3>
//                 </div>
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                   </svg>
//                 </div>
//               </button> 

//               <button
//                  className="group w-[400px]  relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
//                   transition-all duration-300 hover:-translate-y-1 border border-gray-100
//                   hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
//                   text-left"
//                   onClick={()=> setPos(true)}

//               >
//                 <div className="space-y-3">
//                   <div className="h-10 w-10 text-[2rem] bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
//                 📦
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
//                     {"POS"}
//                   </h3>
//                 </div>
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                   </svg>
//                 </div>
//               </button> 

//               <button
//                  className="group w-[400px]  relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg 
//                   transition-all duration-300 hover:-translate-y-1 border border-gray-100
//                   hover:border-indigo-100 hover:bg-gradient-to-br from-white to-indigo-50
//                   text-left"
//                   onClick={()=> setPos(true)}

//               >
//                 <div className="space-y-3">
//                   <div className="h-10 w-10 text-[2rem] bg-indigo-100 group-hover:bg-indigo-200 rounded-lg flex items-center justify-center transition-colors">
//                 📦
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
//                     {"POS"}
//                   </h3>
//                 </div>
//                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
//                   </svg>
//                 </div>
//               </button> 
//           </div>

//  </div>

//  {/* Procurement Modal */}
//  <Modal
//         open={procurement}
//         onClose={()=> setProcurement(false)}
 
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//           <Box sx={modalStyle}>
//           <div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setProcurement(false)}>
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
//   <line x1="18" y1="6" x2="6" y2="18" />
//   <line x1="6" y1="6" x2="18" y2="18" />
// </svg>

// </div>
//           <Slider  ref={sliderRef} {...settings}>
       
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/01.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div>  
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/02.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/03.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/04.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/05.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/06.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/07.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/08.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/09.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
      
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/10.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/11.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/12.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
//           <div>
//              <img src="https://images.promodeagro.com/Procurement/13.svg" alt={'Procurement Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
//       </Slider>
    
//           </Box>
//       </Modal>


{/* accounting Modal  */}
{/* <Modal
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
             <img src="https://images.promodeagro.com/Finance_and_management/01.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src="https://images.promodeagro.com/Finance_and_management/02.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src="https://images.promodeagro.com/Finance_and_management/03.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src="https://images.promodeagro.com/Finance_and_management/04.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src="https://images.promodeagro.com/Finance_and_management/05.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src="https://images.promodeagro.com/Finance_and_management/06.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 
          <div>
             <img src="https://images.promodeagro.com/Finance_and_management/07.svg" alt={'Accounts Image'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
          </div> 

          
           
          
      </Slider>
    
          </Box>
      </Modal> */}
// 
// {/* accounting Modal  */}


//       {/* inventory modal */}
// <Modal
//         open={inventory}
//         onClose={()=> setInventory(false)}
 
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//           <Box sx={modalStyle}>
//           <div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setInventory(false)}>
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
//   <line x1="18" y1="6" x2="6" y2="18" />
//   <line x1="6" y1="6" x2="18" y2="18" />
// </svg>

// </div>
//           <Slider  ref={sliderRef} {...settings}>
       
          
//            <div>
//              <img src="https://images.promodeagro.com/Inventory/Container%201%20Inventory.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 
          
//             <div>
//              <img src="https://images.promodeagro.com/Inventory/Container 2.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 

//           <div>
//              <img src="https://images.promodeagro.com/Inventory/Container 3.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 

//           <div>
//              <img src="https://images.promodeagro.com/Inventory/Container 4.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 

//           <div>
//              <img src="https://images.promodeagro.com/Inventory/Container 5.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 

//           <div>
//              <img src="https://images.promodeagro.com/Inventory/Container 6.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 

//           <div>
//              <img src="https://images.promodeagro.com/Inventory/Container 7.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 

//           <div>
//              <img src="https://images.promodeagro.com/Inventory/Container 8.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 

//           <div>
//              <img src="https://images.promodeagro.com/Inventory/Container 9.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div> 

//           <div>
//              <img src="https://images.promodeagro.com/Inventory/Container 10.svg" alt={'inventory Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div>           
//       </Slider>
    
//           </Box>
//       </Modal>   
      
//    {/* Ecpmmerce modal  */}
// <Modal
//         open={ecom}
//         onClose={()=> setEcom(false)}
 
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//           <Box sx={modalStyle}>
//           <div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setEcom(false)}>
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
//   <line x1="18" y1="6" x2="6" y2="18" />
//   <line x1="6" y1="6" x2="18" y2="18" />
// </svg>

// </div>
//           <Slider  ref={sliderRef} {...settings}>
       
          
//            <div>
//              <img src="https://images.promodeagro.com/B2C/Home-page.svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div>
           
//           <div>
//              <img src="https://images.promodeagro.com/B2C/Home-page (1).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div>  
          
//           <div>
//              <img src="https://images.promodeagro.com/B2C/Front-page.svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div>
           
//  <div>
//              <img src="https://images.promodeagro.com/B2C/Bengali Vegetable page.svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div>

//           <div>
//              <img src="https://images.promodeagro.com/B2C/Bengali Homeneeds page.svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div>

//           <div>
//              <img src="https://images.promodeagro.com/B2C/Bengali Homeneeds page (1).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div>
//           <div>
//              <img src="https://images.promodeagro.com/B2C/Bengali Homeneeds page (2).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div>
//           <div>
//              <img src="https://images.promodeagro.com/B2C/Bengali Homeneeds page (3).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div>
//           <div>
//              <img src="https://images.promodeagro.com/B2C/Bengali Homeneeds page (4).svg" alt={'Ecommerce Images'} style={{ width: '90%' , margin:"auto", height:"auto" }} />
//           </div>

        

         

         
           


        
           
          
//       </Slider>
    
//           </Box>
//       </Modal>


// {/* POS */}

// <Modal
//         open={pos}
//         onClose={()=> setPos(false)}
 
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//           <Box sx={modalStyle}>
//           <div className='flex justify-end absolute top-2 right-4 cursor-pointer' onClick={()=>  setPos(false)}>
// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
//   <line x1="18" y1="6" x2="6" y2="18" />
//   <line x1="6" y1="6" x2="18" y2="18" />
// </svg>

// </div>
//           <Slider  ref={sliderRef} {...settings}>
       
          
//            <div>
//              <img src={pos1} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
//           </div>
//           <div>
//              <img src={pos2} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
//           </div>
//           <div>
//              <img src={pos3} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
//           </div>
//           <div>
//              <img src={pos4} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
//           </div>
//           <div>
//              <img src={pos5} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
//           </div>
//           <div>
//              <img src={pos6} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
//           </div>
//           <div>
//              <img src={pos7} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
//           </div>
//           <div>
//              <img src={pos8} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
//           </div>

//           <div>
//              <img src={pos9} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
//           </div>
//           <div>
//              <img src={pos10} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
//           </div>
//           <div>
//              <img src={pos11} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
//           </div>

//           <div>
//              <img src={pos12} alt={'POS Images'} style={{ width: '90%' ,height:"100px", margin:"auto", height:"auto" }} />
//           </div>



                    
//       </Slider>
    
//           </Box>
//       </Modal>

//     </div>
//   )
// }

// export default MarketingSection


// // The modal styles can be customized using the Box component
// const modalStyle = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: "80%",
//   // height:"80%",
//   bgcolor: 'white',
//    boxShadow: 24,borderRadius:2,
//   p: 4,
// };

 
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









const ServiceCard = ({ icon, title, subtitle ,bg , navigateTo , OnClick }) => {
  return (
   <div style={{background:bg}} className={`rounded-xl p-6 text-center max-w-sm mx-auto hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}>
   {/* Icon */}
   <div className="flex bg-white w-[75px] h-[70px] items-center rounded-md m-auto justify-center mb-4 ">
   <img src={icon} alt="" />
   </div>


   {/* Title */}
   <h2 className="text-2xl font-bold text-[#000000] mb-2">{title}</h2>

   {/* Subtitle */}
   <p className="text-base text-[#414141] mb-6">
   {subtitle}
   </p>

   {/* Buttons */}
   <div className="flex justify-center gap-4">
     <button onClick={OnClick} className="bg-white text-gray-800 font-medium py-2 px-6 rounded-lg shadow hover:bg-gray-100">
       Preview
     </button>
     <button   onClick={() => window.open(navigateTo, "_blank")}
className="bg-[#666AE5] text-white font-medium py-2 px-6 rounded-lg shadowhover:bg-gray-100">
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
    <div id='AI-Native' className='space-container global_padding  bg-[#FFFFFF] '>

<div className=' min-h-[90vh] flex justify-between'>
{/* left  */}
<div className='w-[50%] relative flex-col flex justify-center items-start'> 

<img className='mb-3' src={leftImg} style={{width:"430px" , marginLeft:"auto" , marginRight:"auto"}} alt="" />

  <div className='bg-[#674FA31A] flex items-center gap-2 pl-4 pr-4 pr pt-2 pb-2 rounded-2xl mb-3'>
    <Sparkles className='text-[#666AE5] w-5 h-5'/>
    <span className='text-[#666AE5] font-bold text-[24px] leading-[30px]'>Revolutionizing Supply Chain Management</span>
  </div>
  <h2 className='mb-3 font-[poppins] font-bold text-[2.7rem] leading-[70px] tracking-normal capitalize'>Our <span style={{color:"#666AE5"}}>AI-Native Ecommerce</span> & <span style={{color:"#666AE5"}}>Supply Chain</span> Platform</h2>

  <div  onClick={() => handleScroll('ai-native-products')} className="bg-[#666AE51A] animate-bounce rounded-full flex items-center justify-center w-[50px] h-[50px] absolute   cursor-pointer bottom-0 left-1/2 transform -translate-x-1/2">
                          <ArrowDown className="w-9 h-9 text-[#666AE5] " />
                      </div>
</div>

{/* right  */}
<div className='w-[50%] o flex justify-end items-center'>
<img style={{width:"90%"}} src={marketingGirlImage} alt="" />

</div>


</div>


{/* products */}
<div id='ai-native-products' className='grid pt-[70px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6'>  
             <ServiceCard bg="#B0C3C4" OnClick={()=> setProcurement(true)}navigateTo="/" icon="Images/Procurement.png" title={"Procurement"} subtitle={"Streamlining procurement processes to ensure timely and cost-effective sourcing."} />
             <ServiceCard  OnClick={()=> setInventory(true)} bg="#D1D6E8" navigateTo="https://inventory.promodeagro.com" icon="Images/Inventry.png" title={"Inventory"} subtitle={"Optimizing inventory management for accuracy, efficiency, and real-time control"} />
             <ServiceCard OnClick={()=> setEcom(true)} bg="#EABFD4" navigateTo="https://www.promodeagro.com" icon="Images/ecommerce.png" title={"Ecommerce"} subtitle={"Empowering ecommerce operations with seamless integration and customer-focused solutions."} />
             <ServiceCard   bg="#A7D6EB" navigateTo="/" icon="Images/Logistics.png" title={"Logistics"} subtitle={"Enhancing logistics operations for faster delivery, better tracking, and end-to-end visibility."} />
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


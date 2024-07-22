
import React, { useState } from 'react'
import TextBox from './components/TextBox'
import TextRow from './components/TextRow'
import { Link } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import MarketingSection from './components/MarketingSection'
import HowItWorksSection from './components/HowItWorksSection'
import HowItsWorkSection from './components/HowItWorksSection'
import WhyChooseUse from './components/WhyChooseUse'
import OffersComponent from './components/OffersSection'


const offers = [
    {
      title: "Customizable Single-Tenant Apps",
      description: "Experience unparalleled flexibility with our single-tenant SaaS applications...",
      image: "Images/your-image-1.png",
    },
    {
      title: "High-Quality Zero Tech Debt",
      description: "Deliver the most advanced solutions without legacy baggage...",
      image: "Images/your-image-2.png",
    },
    {
      title: "Modern Cloud-Native Apps",
      description: "Harness modern technology to build resilient and scalable apps...",
      image: "Images/your-image-3.png",
    },
    {
      title: "On-Demand Engineering Teams",
      description: "Quickly scale your development efforts with our expert teams...",
      image: "Images/your-image-4.png",
    },
  ];
  
const Home = () => {
    const [selected, setSelected] = useState(0);
  
    const [selectedButton, setSelectedButton] = useState(1);

    const handleButtonClick = (buttonNumber) => {
      setSelectedButton(buttonNumber);
    };

    
  return (
    <>
    {/* // heroi section starts */}

<HeroSection/>

<MarketingSection/>

{/* tabs section 1 */}


<OffersComponent/>

<HowItsWorkSection/>

<WhyChooseUse/>

        </>
  )
}

export default Home
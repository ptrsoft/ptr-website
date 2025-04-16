
import React, { useState } from 'react'

import HeroSection from './components/HeroSection'
import MarketingSection from './components/MarketingSection'
import HowItsWorkSection from './components/HowItWorksSection'
import WhyChooseUse from './components/WhyChooseUse'
import OffersComponent from './components/OffersSection'

import {Helmet} from "react-helmet-async"
import OurProducts from './components/OurProducts'
import AINativecapabilities from './components/AINativecapabilities'

  
const Home = () => {

    
  return (
    <>
    <Helmet>
<title>Home</title>
<meta name='description' content='At PTR SAAS, we deliver fully open and customizable applications, empowering you to effortlessly add new features.'/>
<link rel="canonical" href="/" />
    </Helmet>
<HeroSection/>
<section>
<MarketingSection/>
{/* <OurProducts/> */}
</section>
<section>
{/* <OffersComponent/> */}
<AINativecapabilities/>
</section>
<section>
<HowItsWorkSection/>
</section>
<section>
<WhyChooseUse/>
</section>
        </>
  )
}

export default Home
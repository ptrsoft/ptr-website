import React from 'react'
import Header from '../../Components/Header'
import Service from '../../Components/Service'
import Footer from '../../Components/Footer'
import HeroSection from '../../Components/HeroSection'
import MarketingSection from '../../Components/BrightFuture'
import WhyChooseUs from '../../Components/WhyChooseUs'
import HowitWorks from '../../Components/HowitWorks'
import OffersComponent from '../../Components/OffersComponent'
import Marketing from '../../Components/Marketing'

const Home = () => {
    return (
        <div>
            <section style={{background:'#F5F3EF'}} className='Container'>
                <HeroSection/>
            </section>

            <div  className='Container'>
            <Marketing/>
            </div>


<div style={{background:'#F5F3EF'}}>
    <OffersComponent/>
</div>


            <div className='container' >
            </div>
            {/* <div style={{ background: '#FFF', alignItems:'center', height: '36.25rem', display:'flex'}}>
            <Service/>
            </div> */}
            
       
            <div >
            <HowitWorks/>
            </div>

            <div>
            <WhyChooseUs/>
            </div>

            <div>
            <Footer/>
            </div>
        </div>
    )
}

export default Home
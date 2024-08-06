import React from 'react'
import "../../../../Assets/Styles/pages/Home/HowItsWorkSection.css"
import { useNavigate } from 'react-router-dom'
const HowItsWorkSection = () => {
  const navigate =  useNavigate()
  const handleNavigate = ()=>{
      navigate('/contact-us')
  }
    return (
        <div className='HowItsWork_sec'>

            <div className="HowItsWork_sec_left">
                <img alt='unable to load Images' src='Images/HowItWorks.png' />

            </div>

            <div className="HowItsWork_sec_right">

                <div className='HowItsWork_sec_right_heading'>How It Works?</div>

                {/*txt row containr  */}
                <div className='text_row_container'>

                    <div className='text_box'>
                        <div>
                            <div className='text_box_head'>
                                <img className='blue_tick' src='/Images/blueRight.svg' alt='icon' />

                                Sign Up and Get Started:
                            </div>
                            <div className='text_box_para'>
                                Create an account on our platform and gain access to our suite of open and customizable applications.
                            </div>
                        </div>
                    </div>
                    <div className='text_box'>
                        <div>
                            <div className='text_box_head'>
                                <img className='blue_tick' src='/Images/blueRight.svg' alt='icon' />

                                Customize Your Application
                            </div>
                            <div className='text_box_para'>
                            Use our intuitive tools to add new features and tailor the application to your specific requirements.
                            </div>
                        </div>
                    </div>
                    <div className='text_box'>
                        <div>
                            <div className='text_box_head'>
                                <img className='blue_tick' src='/Images/blueRight.svg' alt='icon' />

                                Hire On-Demand Engineers
                            </div>
                            <div className='text_box_para'>
                            Browse our portal to find certified engineers with the skills you need. Hire a team instantly and get started on your project without delay.
                            </div>
                        </div>
                    </div>
                    <div className='text_box'>
                        <div>
                            <div className='text_box_head'>
                                <img className='blue_tick' src='/Images/blueRight.svg' alt='icon' />

                                Achieve Predictable Results 
                            </div>
                            <div className='text_box_para'>
                            Work with your dedicated team to ensure your project is delivered on time and within budget. Our outcome-driven billing model ensures you only pay for the results.
                            </div>
                        </div>
                    </div>





                </div>

                <button onClick={handleNavigate} className='get_start_btn'>get started</button>
            </div>

        </div>
    )
}

export default HowItsWorkSection
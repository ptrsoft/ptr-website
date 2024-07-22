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

                                Sign Up and Get Started:
                            </div>
                            <div className='text_box_para'>
                                Create an account on our platform and gain access to our suite of open and customizable applications.
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
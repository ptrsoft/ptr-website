import React from 'react'

const ContactForm = () => {
  return (
  <form action="">
      <input placeholder='Your Name' className='ContactUs_form_section_left_bottom_input' type="text"/>
  <input placeholder='Your Phone Number' className='ContactUs_form_section_left_bottom_input' type="tel"/>
  <input placeholder='Your Email' className='ContactUs_form_section_left_bottom_input' type="email"/>

<textarea className='ContactUs_form_section_left_bottom_text_area' placeholder='Message Here'></textarea>
  
  <button className='lets_talk_btn'>Let's Talks</button>
  </form>
  )
}

export default ContactForm
import React from 'react'

// import Logo from ""
const Header = () => {
  return (
    <div className='header_Wrappper' style={{zIndex:'12222' , position:'relative'}}>
   <header className='Container header'>
<nav>
    <ul>
        <li> <img width={132} src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Logo" />
        </li>
        <li> <a href='#'></a> Home </li>
        <li> <a href='#'></a> About Us </li>
        <li> <a href='#'></a> Products </li>
        <li> <a href='#'></a> Process </li>
        <li> <a href='#'></a> Blogs </li>
        <li> <a href='#'></a> Contact </li>
    </ul>
</nav>

<div style={{display:'flex' , justifyContent:'center' , gap:'2em' ,alignItems:'center'}}>
    <button className='login-btn'>Login</button>
    
    <button className='primary_btn'>Get In Touch</button>
</div>

   </header>
   </div>
  )
}

export default Header
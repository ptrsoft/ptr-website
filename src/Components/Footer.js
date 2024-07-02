import React from 'react';
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='container' style={{ height: '59.9375rem', background: '#674FA3', padding: '4rem' }}>
      <div className='footer_header' style={{ textAlign: 'center', color: '#fff' }}>
        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Ready to experience the flexibility and power of PTR Technologies</span>
        <span style={{ display: 'block', marginTop: '1rem', fontSize: '1.2rem' }}>Sign up now and start customizing your applications and hiring on-demand engineering teams.</span>
        <div style={{ marginTop: '1.56rem', display: 'flex', justifyContent: 'center', gap: '1.94rem' }}>
          <button className='footer_btns' style={footerButtonStyle}>GET STARTED</button>
          <button className='footer_btns' style={{ ...footerButtonStyle, backgroundColor: '#1FA4E5' }}>Request A Demo</button>
        </div>
        <div style={{ marginTop: '5.7rem', borderTop: '1px solid #fff', width: '100%' }}></div>
      </div>

      <footer style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '4rem', color: '#fff' }}>
        <ul style={{ textAlign: 'start', display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
          <li><img width={132} src={`${process.env.PUBLIC_URL}/PTRWhite.png`} alt="Logo" /></li>
          <li>we deliver fully open and customizable <br /> applications, empowering you to effortlessly add <br /> new features.</li>
          <li style={{ display: 'flex', gap: '1rem' }}>
            <FaFacebookF />
            <FaTelegramPlane />
            <FaInstagram />
            <FaLinkedinIn />
          </li>
        </ul>

        <div style={{ display: 'flex', gap: '4rem' }}>
          <ul style={footerColumnStyle}>
            <li style={footerColumnHeaderStyle}>Company</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Our Blog</li>
            <li>Contact Us</li>
            <li>Remote Work</li>
            <li>Version Control</li>
            <li>Project Task</li>
          </ul>

          <ul style={footerColumnStyle}>
            <li style={footerColumnHeaderStyle}>Product</li>
            <li>Integration</li>
            <li>Customers</li>
            <li>Pricing</li>
            <li>Help Center</li>
            <li>Backlog</li>
            <li>Typetalk</li>
            <li>Case Studies</li>
            <li>Download</li>
          </ul>

          <ul style={footerColumnStyle}>
            <li style={footerColumnHeaderStyle}>Legal</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Site Map</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Company</li>
          </ul>

          <ul style={footerColumnStyle}>
            <li style={footerColumnHeaderStyle}>Resources</li>
            <li>Developers</li>
            <li>Compare</li>
            <li>Diagram Examples</li>
            <li>Release Notes</li>
            <li>System Status</li>
            <li>Online Community</li>
            <li>Release Notes</li>
          </ul>
        </div>
      </footer>

      <div style={{ marginTop: '4rem', borderTop: '1px solid #fff', width: '100%' }}></div>
      <div style={{ textAlign: 'center', color: '#fff', marginTop: '1rem' }}>
        <span>2024 All Rights Reserved</span>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Disclosure</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #fff', width: '100%', marginTop: '1rem' }}></div>
    </div>
  );
};

const footerButtonStyle = {
  padding: '1rem 2rem',
  border: 'none',
  borderRadius: '0.5rem',
  backgroundColor: '#fff',
  color: '#674FA3',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const footerColumnStyle = {
  listStyle: 'none',
  textAlign: 'start',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
};

const footerColumnHeaderStyle = {
  fontWeight: 'bold',
  fontSize: '1.2rem'
};

export default Footer;

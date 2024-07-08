import React, { useState } from 'react';

const OffersComponent = () => {
  const [selectedOffer, setSelectedOffer] = useState(0);

  const offers = [
    {
      header: 'Open and Customizable Single Tenant Applications',
      title: "Customizable Single-Tenant Apps",
      text: "Experience unparalleled flexibility with our single-tenant SAAS applications, that is open and tailored to your unique business needs. Explore our robust backend platform and cutting-edge technology, delivering microservices-based enterprise apps with comprehensive operations management.",
      image: "pink.png",
      buttonImage: "pinkBtn.png" // Add button image
    },
    {
      header: 'High Quality Application with Zero Tech Debt',
      title: "High-Quality Zero Tech Debt",
      text: "At PTR Technology, for every use case that we develop, we follow a robust and efficient software development process designed to deliver high-quality solutions tailored to meet our clients' unique needs. Our approach combines industry best practices with innovative techniques to ensure that every use case is reliable, scalable, and secure and contains all software artifacts.",
      image: "green.png",
      buttonImage: "greenBtn.png" // Add button image
    },
    {
      header: 'Apps built with Most modern cloud native architectures',
      title: "Modern Cloud-Native Apps",
      text: "Whether you're a writing a small mobility App or a large scale enterprise product, we have something for you. Explore our architecture central to learn about the principles, patterns, practices, and tools that we follow to deliver you the solution that is simple, promotes reusability and flexibility and of course very cost effective.",
      image: "biskBtn.png",
      buttonImage: "bisBtnn.png" // Add button image
    },
    {
      header: 'On-Demand Engineering Teams',
      title: "On-Demand Engineering Teams",
      text: "Hire Certified Engineers Instantly Need additional engineering resources? Hire a complete engineering team on demand through our portal. Our pool of certified professionals is ready to join your project instantly, ensuring you have the talent you need, when you need it.We understand the importance of predictable outcomes. That’s why our teams work with a clear delivery plan and a billing model that is driven by results. You only pay for the value delivered, ensuring cost-effectiveness and transparency",
      image: "purple.png",
      buttonImage: "purpleBtn   .png" // Add button image
    },
  ];

  const getButtonStyle = (index) => {
    let backgroundColor = '#F39CAD'; // default color
    if (index === 1) backgroundColor = '#D4FADA';
    if (index === 2) backgroundColor = '#FDE3C7';
    if (index === 3) backgroundColor = '#C9BFFE';

    const isSelected = selectedOffer === index;
    return {
      color: '#000',
      fontFamily: 'Poppins',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '1.5rem', // 100%
      textTransform: 'capitalize',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem', // Increase gap to accommodate image
      width: '22.625rem',
      height: '3.5rem',
      padding: '1.375rem',
      borderRadius: '0.625rem',
      border: isSelected ? '1.5px solid #000' : 'none',
      background: backgroundColor,
    };
  };

  return (
    <div className='container' style={{ height: '51.875rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <span style={{ marginTop: '8.88rem' }} className='sec_headings'>
          What<span style={{ color: '#666AE5' }}> we offer</span> & <span style={{ color: '#666AE5' }}> How we do it? </span>
        </span>
        <span className='sec_headings'>
          {offers[selectedOffer].header}
        </span>
      </div>

      <div style={{ marginTop: '3rem', paddingInline: '5.985vw', justifyContent: 'center', display: "flex" }}>
        {/* .col 1 */}
        <div style={{ display: 'flex', width: '37%', flexDirection: 'column', gap: '3rem' }}>
          {offers.map((offer, index) => (
            <button
              key={index}
              style={getButtonStyle(index)}
              onClick={() => setSelectedOffer(index)}
            >
              <img src={`${process.env.PUBLIC_URL}/${offer.buttonImage}`} alt="Button Icon" style={{ width: '1rem', height: '1rem' }} /> {/* Adjust size as needed */}
              {offer.title}
            </button>
          ))}
        </div>

        {/* col 2 */}
        <div style={{ display: 'flex', width: '37%', justifyContent: "start", alignItems: 'center' }}>
          <img width="80%" src={`${process.env.PUBLIC_URL}/${offers[selectedOffer].image}`} alt="Offer Image" />
        </div>

        {/* col 3 */}
        <div style={{ display: 'flex', width: '37%', justifyContent: "center", flexDirection: 'column', alignItems: 'start' }}>
          <p style={{
            color: '#000',
            fontFamily: 'Poppins',
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '1.875rem',
          }}>
            {offers[selectedOffer].text}
          </p>
          <button className='primary_btn'>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default OffersComponent;
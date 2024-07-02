import React from 'react';

const MarketingSection = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    width:'80%',
    marginRight:'auto',

    marginLeft:'auto'
  };

  const textContainerStyle = {
    flex: 1
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const subHeadingStyle = {
    color: '#4c63b6'
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0
  };

  const listItemStyle = {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center'
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#4c63b6'
  };

  const imageContainerStyle = {
    flex: 1,
    textAlign: 'center'
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto'
  };

  return (
    <div>
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>
          Our Platform Is Built To Provide{' '}
          <span style={subHeadingStyle}>Maximum Flexibility</span>, Ensuring It
          Meets Your Unique Business Requirements.
        </h1>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={iconStyle}>+</span> Single Tenant App - Fully Private, Fully Customizable
          </li>
          <li style={listItemStyle}>
            <span style={iconStyle}>+</span> Zero Tech Debt - App With All Artifacts
          </li>
          <li style={listItemStyle}>
            <span style={iconStyle}>+</span> Complete Open - You Own It, You Change It With No Limit
          </li>
          <li style={listItemStyle}>
            <span style={iconStyle}>+</span> Highest Flexibility - Any Cloud / Any Changes
          </li>
          <li style={listItemStyle}>
            <span style={iconStyle}>+</span> One Click E2E Engineering Team - Available On Demand To Make Changes
          </li>
          <li style={listItemStyle}>
            <span style={iconStyle}>+</span> Vendor Friendly - Deliver Apps To Your Own Customers
          </li>
        </ul>
      </div>
      <div style={imageContainerStyle}>
        <img
          style={imageStyle}
          src={`${process.env.PUBLIC_URL}/Sideimg.png`}   
               alt="Engagement and flexibility"
        />
      </div>
    </div>
    </div>
  );
};

export default MarketingSection;

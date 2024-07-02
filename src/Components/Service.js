import React from 'react';

const Service = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#F9F9F9'
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    headerTitle: {
      fontSize: '2rem',
      fontWeight: 'bold'
    },
    headerSubtitle: {
      fontSize: '1.5rem',
      color: '#674FA3'
    },
    main: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1200px',
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '8px',
    //   border: '1px solid #E0E0E0' // Added border to distinguish the main container
    },
    services: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    serviceItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
      borderRadius: '8px',
      backgroundColor: 'white',
      border: '1px solid #E0E0E0' // Added border to distinguish the service items
    },
    icon: {
      marginRight: '1rem',
      fontSize: '1.5rem'
    },
    content: {
      maxWidth: '500px',
      textAlign: 'left'
    },
    contentP: {
      marginBottom: '1rem'
    },
    button: {
      padding: '0.75rem 1.5rem',
      backgroundColor: '#674FA3',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      textAlign: 'center'
    }
  };

  const serviceItems = [
    { color: '#F28B82', text: 'Customizable Single-Tenant Apps', icon: '🛠' },
    { color: '#81C995', text: 'High-Quality Zero Tech Debt', icon: '✅' },
    { color: '#FFD966', text: 'Modern Cloud-Native Apps', icon: '☁️' },
    { color: '#AECBFA', text: 'On-Demand Engineering Teams', icon: '👨‍💻' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>What We Offer & How We Do It?</h1>
        <h2 style={styles.headerSubtitle}>Open And Customizable Single Tenant Applications</h2>
      </div>
      <div style={styles.main}>
        <div style={styles.services}>
          {serviceItems.map((item, index) => (
            <div key={index} style={{ ...styles.serviceItem, backgroundColor: item.color }}>
              <span style={styles.icon}>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        <img src="path/to/your/image.png" alt="Service Illustration" style={{ width: '200px', height: 'auto' }} />
        <div style={styles.content}>
          <p style={styles.contentP}>
            Experience unparalleled flexibility with our single-tenant SAAS applications, that is open and tailored to your unique business needs. Explore our robust backend platform and cutting-edge technology, delivering microservices-based enterprise apps with comprehensive operations management.
          </p>
          <button style={styles.button}>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Service;

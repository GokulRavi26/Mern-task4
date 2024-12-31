import React from 'react';

const Aboutus = () => {
  return (
    <div style={{
      backgroundImage: 'url("/abpg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      color: 'white',
    }}>
      <h2>About Us</h2>
      
      {/* Card Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: '20px' 
      }}>
      
      </div>
    </div>
  );
};

export default Aboutus;

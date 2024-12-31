import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';

function Gokul() {
  const goToHomePage = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.href = '/'; // Navigate to the home page
  };

  return (
    <>
      <Router>
        {/* Header Section */}
        <header style={{ backgroundColor: '#f8f9fa', padding: '10px 0', display: 'flex', alignItems: 'center' }}>
          {/* Logo with left margin */}
          <img
            src="/logo.png" // Replace with the path to your logo
            alt="Logo"
            style={{ marginLeft: '20px', height: '50px' }} // Adjust the size of the logo as needed
          />
          
          {/* ABC as a go to home button near the logo */}
          <a
            href="#"
            onClick={goToHomePage} // Updated to navigate to home
            style={{
              textDecoration: 'none',
              color: '#007bff',
              marginLeft: '20px', // Space between logo and ABC
              fontSize: '1.2rem', // Font size for ABC
              fontWeight: 'bold', // Make ABC text bold
            }}
          >
            ABC
          </a>

          <h1 style={{ flexGrow: 1, textAlign: 'center', margin: '0' }}>Welcome to my Leetcode</h1>

          <nav>
            <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
              <li style={{ margin: '0 15px' }}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname === '/') {
                      window.location.reload(); // Refresh if already on Home
                    } else {
                      window.location.href = '/'; // Navigate to Home
                    }
                  }}
                  style={{ textDecoration: 'none', color: '#007bff' }}
                >
                  Home
                </a>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/Aboutus" style={{ textDecoration: 'none', color: '#007bff' }}>Aboutus</Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/Contactus" style={{ textDecoration: 'none', color: '#007bff' }}>Contactus</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content Section */}
        <main style={{ padding: '20px', minHeight: '60vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Contactus" element={<Contactus />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <footer style={{ backgroundColor: '#343a40', color: '#fff', textAlign: 'center', padding: '10px 0' }}>
          <p>&copy; 2024 Leetcode. All rights reserved.</p>
        </footer>
      </Router>
    </>
  );
}

export default Gokul;

// Header.js
import React, { useState } from 'react';
import './SecHeader.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

const SecHeader = () => {

    return (
      
          <>
            <nav className="nav">
                <ul>
                <li><Link to="/">Home</Link></li>
                    <li><Link Link to="/about">About</Link></li>
                    <li><Link Link to="/services">services</Link></li>
                    <li><Link Link to="/contact">contact</Link></li>
                    <li><Link to="/ShippingSystem">Track shipment</Link></li>
                </ul>
            </nav>
            
  
            
        
        </>
    );
};

export default SecHeader;
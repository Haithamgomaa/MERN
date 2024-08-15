import React, { useState } from 'react';
import GoogleMap from '../components/GoogleMap ';

const ShippingSystem = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [shipmentDetails, setShipmentDetails] = useState(null);

    const trackShipment = () => {
        // Make API call to fetch shipment details based on tracking number
        // For demonstration purposes, let's assume we receive the following data
        const shipmentData = {
            trackingNumber: trackingNumber,
            status: 'In transit',
            location: 'Warehouse A',
            estimatedDelivery: 'August 10, 2024',
            deliveryDate: 'August 10, 2024',
            totalCost: 100.00
        };
        displayShipmentDetails(shipmentData);
    };

    const displayShipmentDetails = (data) => {
        setShipmentDetails(data);
    };

    return (
        <div>
            <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px 0' }}>
                <h1>  Track your shipment</h1>
            </header>
            <div style={{ maxWidth: '800px', margin: '20px auto', padding: '0 20px' }}>
                {/* <h2>Track Shipment</h2> */}
                <label htmlFor="tracking-number">Enter Tracking Number:</label>
                <input type="text" id="tracking-number" placeholder="Enter tracking number..." value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} />
                <button onClick={trackShipment}>Track</button>
                {shipmentDetails && (
                    <div>
                        <h3>Shipment Details</h3>
                        <p><strong>Tracking Number:</strong> {shipmentDetails.trackingNumber}</p>
                        <p><strong>Status:</strong> {shipmentDetails.status}</p>
                        <p><strong>Location:</strong> {shipmentDetails.location}</p>
                        <p><strong>Delivery Date:</strong> {shipmentDetails.deliveryDate}</p>
                        <p><strong>Total Cost:</strong> ${shipmentDetails.totalCost}</p>
                    </div>
                )}
            </div>
            <GoogleMap/>

        </div>
    );
};

export default ShippingSystem;
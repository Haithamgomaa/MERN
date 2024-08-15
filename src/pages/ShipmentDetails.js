import React from 'react';
import Invoice from '../components/Invoice';

const ShipmentDetails = () => {
    // Mock shipment details data
    const shipmentDetails = {
        id: '123456',
        sender: 'John Doe',
        recipient: 'Jane Smith',
        shippingAddress: '123 Main St, City, Country',
        deliveryDate: 'August 10, 2024',
        totalCost: 100.00
    };

    return (
        <div>
            <h1>Shipment Details</h1>
            <Invoice shipmentDetails={shipmentDetails} />
        </div>
    );
};

export default ShipmentDetails;
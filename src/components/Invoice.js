import React from 'react';

const Invoice = ({ shipmentDetails }) => {
    return (
        <div>
            <h2>Invoice</h2>
            <p><strong>Shipment ID:</strong> {shipmentDetails.id}</p>
            <p><strong>Sender:</strong> {shipmentDetails.sender}</p>
            <p><strong>Recipient:</strong> {shipmentDetails.recipient}</p>
            <p><strong>Shipping Address:</strong> {shipmentDetails.shippingAddress}</p>
            <p><strong>Delivery Date:</strong> {shipmentDetails.deliveryDate}</p>
            <p><strong>Total Cost:</strong> ${shipmentDetails.totalCost}</p>
        </div>
    );
};

export default Invoice;
import React from "react";
import { useParams } from "react-router-dom";
const OrderSummaryPage: React.FC = () => {
  const { orderId } = useParams();
  return (
    <div>
      <h2>Order Summary</h2>
      <p>Order ID: {orderId}</p>
      <p>[Order details summary here]</p>
    </div>
  );
};
export default OrderSummaryPage;

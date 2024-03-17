import CheckoutView from "../components/Checkout/checkoutView";
import React from 'react';
import { useLocation } from 'react-router-dom';

function Checkout() {
    const { state } = useLocation();
    const arrayData = state && state.arrayData;
  return (
    <div className="section">
        <CheckoutView cart = {arrayData}/>
    </div>
  );
}

export default Checkout;
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useContext } from 'react';
import { CartContext } from './CartProvider';

const stripePromise = loadStripe('pk_test_51S3ATSPAVnqdea8RIqoQOGwifV2KEdlt762tRrSyU5rcnvYJQ8oqkVsxbside04WYHjHkeDhWJLQbq31AnLs201q00RCl3HgRy');


const CheckoutPage = () => {
  const {totalPrice} = useContext(CartContext);
  return (
    <div className="pt-24 pb-10 min-h-screen bg-gray-50"> {/* 👈 Add spacing here */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Checkout</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm amount = {Math.round(totalPrice*100)} /> 
      </Elements>
    </div>
  );
};

export default CheckoutPage;
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';
import { useContext } from 'react';
import { CartContext } from './CartProvider';

import stripePromise, {isDev} from '../components/StripeLoader';


const CheckoutPage = () => {
  const {totalPrice} = useContext(CartContext);

     // Disable Stripe completely in production
  if (!isDev) {
    return (
      <div className="pt-24 pb-10 min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Payments are turned off in this version
        </h2>
        <p className="text-gray-600">
          This feature is available only during local development.
        </p>
      </div>
    );
  }

   
     // Otherwise, show your normal payment form
  return (
    <div className="pt-24 pb-10 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Checkout</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={Math.round(totalPrice * 100)} />
      </Elements>
    </div>
  );
};


export default CheckoutPage;
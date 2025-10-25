import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${API_URL}/create-payment-intent`, {
        amount
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });

      if (result.error) {
        console.error("Payment failed:", result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        console.log("✅ Payment successful!");
        // You can now call a function to save the order to your backend
      }
    } catch (err) {
      console.error("Checkout failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
      <button type="submit" disabled={!stripe} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Pay ${amount}
      </button>
    </form>
  );
};

export default CheckoutForm;
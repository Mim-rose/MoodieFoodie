// src/StripeLoader.jsx
import { loadStripe } from '@stripe/stripe-js';

const isDev = import.meta.env.MODE === 'development';
// publishable key - exists only in .env.local or Vercel env
const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '';

const stripePromise = (isDev && publishableKey) ? loadStripe(publishableKey) : null;

export default stripePromise;
export { isDev, publishableKey };

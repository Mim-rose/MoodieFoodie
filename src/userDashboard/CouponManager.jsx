import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const API_URL = import.meta.env.VITE_API_URL;

const CouponManager = () => {
  const { user } = useContext(AuthContext);
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/coupons/${user.uid}`)
      .then(res => res.json())
      .then(data => setCoupons(data));
  }, [user]);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Available Coupons</h2>
      {coupons.length === 0 ? <p>No coupons available.</p> : (
        <ul className="space-y-2">
          {coupons.map(coupon => (
            <li key={coupon.code} className="border p-3 rounded">
              <p><strong>Code:</strong> {coupon.code}</p>
              <p><strong>Discount:</strong> {coupon.discount * 100}%</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CouponManager;
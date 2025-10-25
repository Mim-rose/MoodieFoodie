import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const AdminCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [newCoupon, setNewCoupon] = useState({ code: '', discount: '', expiry: '' });

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const res = await axios.get(`${API_URL}/admin/coupons`);
      setCoupons(res.data);
    } catch (err) {
      console.error('Error fetching coupons:', err);
    }
  };

  const handleCreateCoupon = async () => {
    const { code, discount, expiry } = newCoupon;
    if (!code || isNaN(discount) || !Date.parse(expiry)) {
      alert("Please enter valid coupon data.");
      return;
    }

    try {
      await axios.post(`${API_URL}/admin/coupons`, newCoupon);
      setNewCoupon({ code: '', discount: '', expiry: '' });
      fetchCoupons();
    } catch (err) {
      console.error("Failed to create coupon:", err);
    }
  };

  const handleDeleteCoupon = async (id) => {
    if (!window.confirm("Are you sure you want to delete this coupon?")) return;
    try {
      await axios.delete(`${API_URL}/admin/coupons/${id}`);
      fetchCoupons();
    } catch (err) {
      console.error("Failed to delete coupon:", err);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🏷️ Admin Coupons</h2>

      {/* Create Coupon Form */}
      <div className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Code"
          value={newCoupon.code}
          onChange={e => setNewCoupon({ ...newCoupon, code: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Discount (%)"
          value={newCoupon.discount}
          onChange={e => setNewCoupon({ ...newCoupon, discount: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="date"
          value={newCoupon.expiry}
          onChange={e => setNewCoupon({ ...newCoupon, expiry: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleCreateCoupon}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Coupon
        </button>
      </div>

      {/* Coupon Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Code</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Discount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Expiry</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {coupons.map(coupon => (
              <tr key={coupon._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{coupon.code}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{coupon.discount}%</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {new Date(coupon.expiry).toLocaleDateString()}
                </td>
                <td className={`px-6 py-4 text-sm font-semibold ${coupon.status === 'expired' ? 'text-red-600' : 'text-green-600'}`}>
                  {coupon.status}
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleDeleteCoupon(coupon._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {coupons.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No coupons available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCoupons;
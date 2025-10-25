import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';

const API_URL = import.meta.env.VITE_API_URL;

const AdminInventory = () => {
  const { token } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    food_name: '',
    description: '',
    food_category: '',
    food_type: '',
    food_image: '',
    price: '',
    tags: '',
    average_rating: ''
  });
  const [editingItem, setEditingItem] = useState(null);

  // Fetch inventory items
  const fetchItems = async () => {
    try {
      const res = await axios.get(`${API_URL}/admin/inventory`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching inventory:', err);
    }
  };

  useEffect(() => {
    if (token) fetchItems();
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = async () => {
    try {
      const formattedItem = {
        ...newItem,
        price: parseFloat(newItem.price),
        average_rating: parseFloat(newItem.average_rating),
        tags: newItem.tags.split(',').map(tag => tag.trim())
      };
      await axios.post(`${API_URL}/admin/inventory`, formattedItem, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNewItem({
        food_name: '',
        description: '',
        food_category: '',
        food_type: '',
        food_image: '',
        price: '',
        tags: '',
        average_rating: ''
      });
      fetchItems();
    } catch (err) {
      console.error('Error adding item:', err);
    }
  };

  const handleDelete = async (id) => {
    console.log("Deleting item with id:", id);
    if (!window.confirm("Delete this item?")) return;
    try {
      await axios.delete(`${API_URL}/admin/inventory/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchItems();
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingItem(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const updatedItem = {
        ...editingItem,
        price: parseFloat(editingItem.price),
        average_rating: parseFloat(editingItem.average_rating),
        tags: editingItem.tags.split(',').map(tag => tag.trim())
      };
      await axios.put(`${API_URL}/admin/inventory/${editingItem._id}`, updatedItem, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setEditingItem(null);
      fetchItems();
    } catch (err) {
      console.error('Error updating item:', err);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">🍽️ Admin Inventory</h2>

      {/* Add Item Form */}
      <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-white p-6 rounded-lg shadow">
        <h3 className="col-span-full text-xl font-semibold text-gray-700">Add New Item</h3>
        {Object.keys(newItem).map((key) => (
          <input
            key={key}
            name={key}
            value={newItem[key]}
            onChange={handleInputChange}
            placeholder={key.replace('_', ' ').toUpperCase()}
            type={key === 'price' || key === 'average_rating' ? 'number' : 'text'}
            step={key === 'average_rating' ? '0.1' : undefined}
            required
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
        <button type="submit" className="col-span-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Add Item</button>
      </form>

      {/* Edit Item Form */}
      {editingItem && (
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-yellow-50 p-6 rounded-lg shadow">
          <h3 className="col-span-full text-xl font-semibold text-yellow-800">Editing: {editingItem.food_name}</h3>
          {Object.keys(editingItem).map((key) => (
            <input
              key={key}
              name={key}
              value={editingItem[key]}
              onChange={handleEditChange}
              placeholder={key.replace('_', ' ').toUpperCase()}
              type={key === 'price' || key === 'average_rating' ? 'number' : 'text'}
              step={key === 'average_rating' ? '0.1' : undefined}
              required
              className="border border-yellow-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          ))}
          <div className="col-span-full flex gap-4">
            <button type="submit" className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition">Save Changes</button>
            <button type="button" onClick={() => setEditingItem(null)} className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition">Cancel</button>
          </div>
        </form>
      )}

      {/* Inventory Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {['Image', 'Name', 'Description', 'Category', 'Type', 'Price', 'Rating', 'Tags', 'Actions'].map((header) => (
                <th key={header} className="px-6 py-3 text-left text-sm font-semibold text-gray-700">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map(item => (
              <tr key={item._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4"><img src={item.food_image} alt={item.food_name} className="w-20 h-20 object-cover rounded" /></td>
                <td className="px-6 py-4">{item.food_name}</td>
                <td className="px-6 py-4">{item.description}</td>
                <td className="px-6 py-4">{item.food_category}</td>
                <td className="px-6 py-4">{item.food_type}</td>
                <td className="px-6 py-4 text-green-600 font-semibold">${item.price}</td>
                <td className="px-6 py-4">{item.average_rating}</td>
                <td className="px-6 py-4">{item.tags?.join(', ')}</td>
                <td className="px-6 py-4  space-x-2">
                  <button onClick={() => setEditingItem({ ...item, tags: item.tags.join(',') })} className="bg-indigo-600 text-white px-3 py-1 m-2 rounded hover:bg-indigo-700">Edit</button>
                  <button onClick={() => handleDelete(item._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan="9" className="px-6 py-4 text-center text-gray-500">No items found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminInventory;
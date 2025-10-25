import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase.config'; // Adjust path as needed

const API_URL = import.meta.env.VITE_API_URL;

const ProfileView = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!user || !user.uid) return;

    fetch(`${API_URL}/user/${user.uid}`)
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error("Profile fetch failed:", err));
  }, [user]);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/user/${user.uid}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    })
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        setIsEditing(false);
      })
      .catch(err => console.error("Profile update failed:", err));
  };

  const handlePasswordReset = () => {
    if (user?.email) {
      sendPasswordResetEmail(auth, user.email)
        .then(() => alert("Password reset email sent."))
        .catch(err => console.error("Password reset failed:", err));
    }
  };

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>

      {!isEditing ? (
        <>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>DOB:</strong> {profile.dob}</p>
            <p><strong>Age:</strong> {profile.age}</p>
            <p><strong>Sex:</strong> {profile.sex}</p>
            <p><strong>Skin Type:</strong> {profile.skinType}</p>
            <p className="col-span-2"><strong>Address:</strong> {profile.address}</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Edit Profile
            </button>
            <button
              onClick={handlePasswordReset}
              className="bg-gray-600 text-white px-4 py-2 rounded"
            >
              Change Password
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleProfileUpdate} className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            placeholder="Name"
            className="border p-2 rounded"
          />
          <input
            type="text"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            placeholder="Phone"
            className="border p-2 rounded"
          />
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            placeholder="Email"
            className="border p-2 rounded"
          />
          <input
            type="text"
            value={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            placeholder="DOB"
            className="border p-2 rounded"
          />
          <input
            type="number"
            value={profile.age}
            onChange={(e) => setProfile({ ...profile, age: e.target.value })}
            placeholder="Age"
            className="border p-2 rounded"
          />
          <input
            type="text"
            value={profile.sex}
            onChange={(e) => setProfile({ ...profile, sex: e.target.value })}
            placeholder="Sex"
            className="border p-2 rounded"
          />
          <input
            type="text"
            value={profile.skinType}
            onChange={(e) => setProfile({ ...profile, skinType: e.target.value })}
            placeholder="Skin Type"
            className="border p-2 rounded"
          />
          <textarea
            value={profile.address}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
            placeholder="Address"
            className="col-span-2 border p-2 rounded"
          />
          <div className="col-span-2 flex gap-4 mt-4">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileView;
import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/menu`)
      .then(res => res.json())
      .then(data => {
        setMenu(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch menu:', err);
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};

export default useMenu;
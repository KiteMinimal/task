import React, { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/Home.css';

interface User {
  id: string;
  username: string;
}

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('/me');
        setUser(res.data);
      } catch (err) {
        console.error('Failed to fetch user');
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="home-container">
      <h2>Welcome to the Home Page</h2>
      {user ? (
        <div className="user-card">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Username:</strong> {user.username}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Home;

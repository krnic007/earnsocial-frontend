import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    name: 'Rohit Mehta',
    username: 'rohitmehta',
    profession: 'Electrician',
    avatar: '/placeholder/80/80',
    coins: 120,
    followers: 120,
    following: 85
  });

  const updateUser = (data) => {
    setUser({ ...user, ...data });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
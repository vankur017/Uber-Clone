import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();

const UserDataProvider  = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    fullname: {
      fisrtname: '',
      lastname: '',
    },
  });
  // console.log(user);
  

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider ;
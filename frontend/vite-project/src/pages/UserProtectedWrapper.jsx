import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    // console.log(token);
    
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const { user, setUser } = useContext(UserDataContext);

    useEffect(() => {
        let isMounted = true; // For cleanup

        if (!token) {
            navigate('/login');
            return; // Early return
        }
      
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            if (response.data && isMounted) {
             
              setUser(response.data.user);

              setIsLoading(false);
            }
          })
          .catch((err) => {
            console.error(err.response?.data || err.message);
            localStorage.removeItem('token');
            if (isMounted) {
              setIsLoading(false);
              navigate('/login');
            }
          });

        return () => {
          isMounted = false; // Cleanup function
        };
    }, [token]);

    if (isLoading) {
        return <div>Loading...</div>; 
    }

    return <>{children}</>;
};

export default UserProtectedWrapper;

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Verify token validity with an API call
            axios.get('http://localhost:4000/api/verifyToken')
                .then(response => {
                    if (response.status === 200) {
                        setIsAuthenticated(true);
                        setUserId(response.data.userId);
                    } else {
                        setIsAuthenticated(false);
                        setUserId(null);
                    }
                })
                .catch(error => {
                    console.error('Token verification error:', error);
                    setIsAuthenticated(false);
                    setUserId(null);
                });
        }
    }, []);

    const login = (token, userId) => {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        setIsAuthenticated(true);
        setUserId(userId);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setIsAuthenticated(false);
        setUserId(null);
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;

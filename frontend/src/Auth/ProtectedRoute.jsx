import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './AuthContext';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        // alert("Please log in to continue");
        return <Navigate to="/login" />;
    }

    return element;
};

ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired,
};

export default ProtectedRoute;

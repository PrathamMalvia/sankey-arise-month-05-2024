import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        element
    ) : (
        <>
            {alert("You need to be logged in to access this page. Redirecting to login.")}
            <Navigate to="/login" />
        </>
    );
};

ProtectedRoute.propTypes = {
    element: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;

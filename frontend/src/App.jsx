import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { AuthProvider } from './Auth/AuthProvider';
// import ProtectedRoute from './Auth/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/homepage" element={<ProtectedRoute element={<HomePage />} />} /> */}
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;

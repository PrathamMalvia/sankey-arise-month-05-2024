import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AuthProvider from './Auth/AuthProvider';
import ProtectedRoute from './Auth/ProtectedRoute';
import TransitionComponent from './components/TransitionComponent';

const App = () => {
  return (
    <AuthProvider>
      <TransitionComponent>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homepage" element={<ProtectedRoute element={<HomePage />} />} />
          {/* <Route path="/homepage" element={<HomePage />} /> */}
        </Routes>
      </TransitionComponent>
    </AuthProvider>
  );
};

export default App;

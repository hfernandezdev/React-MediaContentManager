import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContentLibraryPage from './pages/ContentLibraryPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import CreateCategoryPage from './pages/CreateCategoryPage';
import CreateThemePage from './pages/CreateThemePage';
import AddContentPage from './pages/AddContentPage';
import { AuthProvider, useAuth } from './context/AuthContext';

import './App.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <ConditionalNavbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/content-library" element={<ContentLibraryPage />} />
              <Route path="/admin-dashboard" element={AdminDashboardPage} />
              <Route path="/create-category" element={CreateCategoryPage} />
              <Route path="/create-theme" element={CreateThemePage} />
              <Route path="/add-content" element={AddContentPage} />
            </Routes>
          <ConditionalFooter />
      </Router>
    </AuthProvider>
  );
}

function ConditionalNavbar() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navbar /> : null;
}

function ConditionalFooter() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Footer /> : null;
}

function ProtectedRoute({ component: Component }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
}

export default App;

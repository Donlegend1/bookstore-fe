import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import DashboardHomePage from './pages/Dashboard/HomePage';
import BookListPage from './pages/Dashboard/Books/BooksPage';
import NewBookPage from './pages/Dashboard/Books/NewBookPage';
import { Context } from './auth/Context';
import PrivateRoute from './components/auths/PrivateRoute';

const App: React.FC = () => {
  const { user } = useContext(Context);
  console.log('user', user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardHomePage /></PrivateRoute>} />
        <Route path="/books" element={<PrivateRoute><BookListPage /></PrivateRoute>} />
        <Route path="/new-book" element={<PrivateRoute><NewBookPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;

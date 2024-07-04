import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import AuthorPage from './pages/AuthorPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import DashboardHomePage from './pages/Dashboard/HomePage';
import BookListPage from './pages/Dashboard/Books/BooksPage';
import NewBookPage from './pages/Dashboard/Books/NewBookPage';




const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/author/:id" element={<AuthorPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />


        
        <Route path="/dashboard" element={<DashboardHomePage />} />
        <Route path="/books" element={<BookListPage />} />
        <Route path="/new-book" element={<NewBookPage />} />

        


        
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import BookList from '../components/BookList';
import Layout from '../components/users/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
    
      <h1>Home Page</h1>
      <BookList />
    
      </Layout>
  );
};

export default HomePage;

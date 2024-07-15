import React, {useState} from 'react';
import Layout from '../../../components/users/Layout';
import Header from '../../../components/users/Header';
import BookList from '../../../components/admin/books/BookList';
import BreadCrumHeader from '../../../components/Layouts/Header';


const BooksPage = () => {
    
    return (
        <Layout>
            <div className="main-content page-content">
                
                <Header />
                  <div className="main-content-inner">
               <BreadCrumHeader />
                </div>
                <BookList />


                 </div>
        </Layout>
    );
}

export default BooksPage;

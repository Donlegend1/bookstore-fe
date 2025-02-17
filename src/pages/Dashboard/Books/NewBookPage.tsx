import React from 'react';
import Layout from '../../../components/users/Layout';
import Header from '../../../components/users/Header';
import BookList from '../../../components/admin/books/BookList';
import BookForm from '../../../components/admin/books/BookForm';
import BreadCrumHeader from '../../../components/Layouts/Header';



const NewBooksPage = () => {
    return (
        <Layout>
            <div className="main-content page-content">
                
                <Header />
                  <div className="main-content-inner">
               <BreadCrumHeader />
                </div>
                <BookForm />


                 </div>
        </Layout>
    );
}

export default NewBooksPage;

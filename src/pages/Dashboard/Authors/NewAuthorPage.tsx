import React from 'react';
import Layout from '../../../components/users/Layout';
import Header from '../../../components/users/Header';
import AuthorForm from '../../../components/admin/authors/AuthorForm';
import BreadCrumHeader from '../../../components/Layouts/Header';




const NewAuthorPage = () => {
    return (
        <Layout>
            <div className="main-content page-content">
                
                <Header />
                  <div className="main-content-inner">
               <BreadCrumHeader />
                </div>
                <AuthorForm />


                 </div>
        </Layout>
    );
}

export default NewAuthorPage;

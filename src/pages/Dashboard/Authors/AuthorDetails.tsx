import React from 'react';
import Layout from '../../../components/users/Layout';
import Header from '../../../components/users/Header';
import AuthorDetail from '../../../components/admin/authors/AuthorDetails';
import BreadCrumHeader from '../../../components/Layouts/Header';



const AuthorDetails: React.FC = () => {
    
    return (
       
             <Layout>
            <div className="main-content page-content">
                
                <Header />
                  <div className="main-content-inner">
               <BreadCrumHeader />
                </div>
                <AuthorDetail />


                 </div>
        </Layout>
       
    );
}

export default AuthorDetails;

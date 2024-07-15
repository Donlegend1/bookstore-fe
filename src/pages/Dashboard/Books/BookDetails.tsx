import React from 'react';
import Layout from '../../../components/users/Layout';
import Header from '../../../components/users/Header';
import BreadCrumHeader from '../../../components/Layouts/Header';
import BookDetail from '../../../components/admin/books/BookDetail';

const BookDetails:React.FC = () => {
    return (
        
              <Layout>
            <div className="main-content page-content">
                
                <Header />
                  <div className="main-content-inner">
               <BreadCrumHeader />
                </div>
             <BookDetail />


                 </div>
        </Layout>
            
        
    );
}

export default BookDetails;

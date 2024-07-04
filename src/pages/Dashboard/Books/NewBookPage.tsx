import React from 'react';
import Layout from '../../../components/users/Layout';
import Header from '../../../components/users/Header';
import BookList from '../../../components/admin/BookList';
import BookForm from '../../../components/admin/BookForm';



const NewBooksPage = () => {
    return (
        <Layout>
            <div className="main-content page-content">
                
                <Header />
                  <div className="main-content-inner">
                <div className="col-md-12 rt_subheader">
                <div className="rt_subheader_main">
                    <h3 className="rt_subheader_title mb-mob-2">Hello David Jhon!</h3>
                    <div className="rt_breadcrumb mb-mob-2">
                    <a href="#" className="rt_breadcrumb_home_icon"><i className="feather ft-home" /></a>
                    <span className="rt_breadcrumb_separator"><i className="feather ft-chevrons-right" /></span>
                    <a href="" className="breadcrumb_link"> Home </a>
                    <span className="rt_breadcrumb_separator"><i className="feather ft-chevrons-right" /></span>
                    <a href="" className="breadcrumb_link"> Main Dashboard </a>
                    </div>
                </div>
                <div className="subheader_btns">
                    <a href="#" className="btn btn-sm btn-primary btn-inverse-primary"><i className="feather ft-edit mr-0" /></a>
                    <a href="#" className="btn btn-sm btn-primary btn-inverse-primary"><i className="feather ft-watch mr-0" /></a>
                    <a href="#" className="btn btn-sm btn-primary btn-inverse-primary">
                    <span>Today:</span>&nbsp;
                    <span>Jan 21</span>
                    <i className="feather ft-calendar ml-2" />
                    </a>
                </div>
                    </div>
                </div>
                <BookForm />


                 </div>
        </Layout>
    );
}

export default NewBooksPage;

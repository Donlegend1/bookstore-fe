import React from 'react';
import Layout from '../../components/users/Layout';
import Header from '../../components/users/Header';
import BookList from '../../components/admin/BookList';

const HomePage = () => {
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
                <div className="row mt-4">
                <div className="col-lg-3 col-md-6 stretched_card pl-mob-3 mb-mob-4">
                    <div className="card bg-primary analytics_card">
                    <div className="card-body">
                        <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                        <div className="icon-rounded">
                            <i className="feather ft-trending-up text-primary" />
                        </div>
                        <div className="text-white">
                            <p className="mt-xl-0 text-xl-left mb-2">Total Book</p>
                            <div className="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                            <h3 className="mb-0 mb-md-1 mb-lg-0 mr-1 text-white">600</h3>
                            <small className="stats_icon">3% <span className="feather ft-chevron-up" /></small>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 stretched_card mb-mob-4">
                    <div className="card bg-success analytics_card">
                    <div className="card-body">
                        <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                        <div className="icon-rounded">
                            <i className="feather ft-shopping-bag text-success" />
                        </div>
                        <div className="text-white">
                            <p className="mt-xl-0 text-xl-left mb-2"> Categories</p>
                            <div className="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                            <h3 className="mb-0 mb-md-1 mb-lg-0 mr-1 text-white">2300</h3>
                            <small className="stats_icon">5% <span className="feather ft-chevron-up" /></small>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 stretched_card mb-xs-mob-4">
                    <div className="card bg-danger analytics_card">
                    <div className="card-body">
                        <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                        <div className="icon-rounded">
                            <i className="feather ft-users text-danger" />
                        </div>
                        <div className="text-white">
                            <p className="mt-xl-0 text-xl-left mb-2"> Total Authors</p>
                            <div className="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                            <h3 className="mb-0 mb-md-1 mb-lg-0 mr-1 text-white">2765</h3>
                            <small className="stats_icon">2% <span className="feather ft-chevron-up" /></small>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 stretched_card pr-mob-3">
                    <div className="card bg-dark analytics_card">
                    <div className="card-body">
                        <div className="d-flex flex-md-column flex-xl-row flex-wrap  align-items-center justify-content-between">
                        <div className="icon-rounded">
                            <i className="feather ft-box text-dark" />
                        </div>
                        <div className="text-white">
                            <p className="mt-xl-0 text-xl-left mb-2">Total Users</p>
                            <div className="d-flex flex-md-column flex-xl-row flex-wrap align-items-baseline align-items-md-center align-items-xl-baseline">
                            <h3 className="mb-0 mb-md-1 mb-lg-0 mr-1 text-white">628</h3>
                            <small className="stats_icon">7% <span className="feather ft-chevron-up" /></small>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
              
             
            <BookList />
            </div>

        </div>
        </Layout>
        
    );
}

export default HomePage;

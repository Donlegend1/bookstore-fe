import React from 'react';
import Layout from '../../components/users/Layout';
import Header from '../../components/users/Header';

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
              
             
                <div className="row">
                {/* Progress Table start */}
                <div className="col-12 mt-4">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card_title">Recent Books</h4>
                        <div className="single-table">
                        <div className="table-responsive">
                            <table className="table table-hover progress-table text-center">
                            <thead className="text-uppercase">
                                <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Book name</th>
                                <th scope="col">Autho</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Price</th>
                                <th scope="col">status</th>
                                <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">6583</th>
                                <td>Mark Spence</td>
                                <td>Macbook Pro</td>
                                <td>09 / 07 / 2018</td>
                                <td>672.56$</td>
                                <td><span className="badge badge-primary">Progress</span></td>
                                <td>
                                    <ul className="d-flex justify-content-center">
                                    <li className="mr-3"><button type="button" className="btn btn-inverse-primary"><i className="fa fa-edit" /></button></li>
                                    <li><button type="button" className="btn btn-inverse-danger"><i className="ti-trash" /></button></li>
                                    </ul>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">4652</th>
                                <td>David Rebon</td>
                                <td>iPhone X</td>
                                <td>09 / 07 / 2018</td>
                                <td>672.56$</td>
                                <td><span className="badge badge-warning">Pending</span></td>
                                <td>
                                    <ul className="d-flex justify-content-center">
                                    <li className="mr-3"><button type="button" className="btn btn-inverse-primary"><i className="fa fa-edit" /></button></li>
                                    <li><button type="button" className="btn btn-inverse-danger"><i className="ti-trash" /></button></li>
                                    </ul>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">7292</th>
                                <td>Jhon Doe</td>
                                <td>Samsung</td>
                                <td>09 / 07 / 2018</td>
                                <td>672.56$</td>
                                <td><span className="badge badge-success">Completed</span></td>
                                <td>
                                    <ul className="d-flex justify-content-center">
                                    <li className="mr-3"><button type="button" className="btn btn-inverse-primary"><i className="fa fa-edit" /></button></li>
                                    <li><button type="button" className="btn btn-inverse-danger"><i className="ti-trash" /></button></li>
                                    </ul>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">7826</th>
                                <td>Jessica Roy</td>
                                <td>Exercise Machine</td>
                                <td>09 / 07 / 2018</td>
                                <td>672.56$</td>
                                <td><span className="badge badge-danger">Stopped</span></td>
                                <td>
                                    <ul className="d-flex justify-content-center">
                                    <li className="mr-3"><button type="button" className="btn btn-inverse-primary"><i className="fa fa-edit" /></button></li>
                                    <li><button type="button" className="btn btn-inverse-danger"><i className="ti-trash" /></button></li>
                                    </ul>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">2638</th>
                                <td>Malika Jhon</td>
                                <td>Machine</td>
                                <td>09 / 07 / 2018</td>
                                <td>483.56$</td>
                                <td><span className="badge badge-primary">Progress</span></td>
                                <td>
                                    <ul className="d-flex justify-content-center">
                                    <li className="mr-3"><button type="button" className="btn btn-inverse-primary"><i className="fa fa-edit" /></button></li>
                                    <li><button type="button" className="btn btn-inverse-danger"><i className="ti-trash" /></button></li>
                                    </ul>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">9374</th>
                                <td>David Jess</td>
                                <td>Laptop</td>
                                <td>09 / 07 / 2018</td>
                                <td>473.56$</td>
                                <td><span className="badge badge-success">Completed</span></td>
                                <td>
                                    <ul className="d-flex justify-content-center">
                                    <li className="mr-3"><button type="button" className="btn btn-inverse-primary"><i className="fa fa-edit" /></button></li>
                                    <li><button type="button" className="btn btn-inverse-danger"><i className="ti-trash" /></button></li>
                                    </ul>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Progress Table end */}
                </div>
            </div>

        </div>
        </Layout>
        
    );
}

export default HomePage;

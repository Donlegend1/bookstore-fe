import React from 'react';
import Layout from '../../components/users/Layout';

const HomePage = () => {
    return (
        <Layout>
        <div className="main-content page-content">
  {/*==================================*
             Header Section
  *====================================*/}
  <div className="header-area">
    <div className="row align-items-center">
      <div className="mobile-logo d_none_lg">
        <a href="/dashboard"><img src="/users/images/mobile-logo.png" alt="logo" /></a>
      </div>
      {/*==================================*
                   Navigation and Search
          *====================================*/}
      <div className="col-md-6 d_none_sm d-flex align-items-center">
        <div className="nav-btn pull-left">
          <span />
          <span />
          <span />
        </div>
        <div className="search-box pull-left">
          <form action="#">
            <i className="ti-search" />
            <input type="text" name="search" placeholder="Search..." required />
          </form>
        </div>
      </div>
      {/*==================================*
                   End Navigation and Search
          *====================================*/}
      {/*==================================*
                   Notification Section
          *====================================*/}
      <div className="col-md-6 col-sm-12">
        <ul className="notification-area pull-right">
          <li>
            <span className="nav-btn pull-left d_none_lg">
              <span />
              <span />
              <span />
            </span>
          </li>
          <li id="full-view" className="d_none_sm"><i className="feather ft-maximize" /></li>
          <li id="full-view-exit" className="d_none_sm"><i className="feather ft-minimize" /></li>
          <li className="dropdown">
            <i className="ti-bell dropdown-toggle" data-toggle="dropdown"><span /></i>
            <div className="dropdown-menu bell-notify-box notify-box">
              <span className="notify-title">You have 3 new notifications <a href="#">view all</a></span>
              <div className="nofity-list">
                <a href="#" className="notify-item">
                  <div className="notify-thumb"><i className="ti-map-alt bg_blue" /></div>
                  <div className="notify-text">
                    <h3>You added your Location</h3>
                    <span>Just Now</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb"><i className="ti-bolt-alt bg_warning" /></div>
                  <div className="notify-text">
                    <h3>Your Subscription Expired</h3>
                    <span>30 Seconds ago</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb"><i className="ti-heart bg_danger" /></div>
                  <div className="notify-text">
                    <h3>Some special like you</h3>
                    <span>Just Now</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb"><i className="ti-comments bg_info" /></div>
                  <div className="notify-text">
                    <h3>New Commetns On Post</h3>
                    <span>30 Seconds ago</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb"><i className="ti-settings bg_secondary" /></div>
                  <div className="notify-text">
                    <h3>You changed your Settings</h3>
                    <span>Just Now</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb"><i className="ti-image bg_success" /></div>
                  <div className="notify-text">
                    <h3>Image Uploaded Successfully</h3>
                    <span>Just Now</span>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <i className="fa fa-envelope-o dropdown-toggle" data-toggle="dropdown"><span /></i>
            <div className="dropdown-menu notify-box nt-enveloper-box">
              <span className="notify-title">You have 3 new Messages<a href="#">view all</a></span>
              <div className="nofity-list">
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img src="images/author/author-img1.jpg" alt="image" />
                  </div>
                  <div className="notify-text">
                    <h3>Jhon Doe</h3>
                    <span className="msg">Hello are you there?</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img src="images/author/author-img2.jpg" alt="image" />
                  </div>
                  <div className="notify-text">
                    <h3>David Boos</h3>
                    <span className="msg">Waiting for your Response...</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img src="images/user.jpg" alt="image" />
                  </div>
                  <div className="notify-text">
                    <h3>Jason Roy</h3>
                    <span className="msg">Hi there, Hope you are well</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img src="images/author/author-img4.jpg" alt="image" />
                  </div>
                  <div className="notify-text">
                    <h3>Malika Roy</h3>
                    <span className="msg">Your Product Dispatched form Warehouse...</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img src="images/author/author-img2.jpg" alt="image" />
                  </div>
                  <div className="notify-text">
                    <h3>Raven Jhon</h3>
                    <span className="msg">Please recieve your parcel from our store</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img src="images/author/author-img1.jpg" alt="image" />
                  </div>
                  <div className="notify-text">
                    <h3>Angela Yo</h3>
                    <span className="msg">You recieved a new message...</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
                <a href="#" className="notify-item">
                  <div className="notify-thumb">
                    <img src="images/user.jpg" alt="image" />
                  </div>
                  <div className="notify-text">
                    <h3>Rebecca Jhon</h3>
                    <span className="msg">Hey I am waiting for you...</span>
                    <span>3:15 PM</span>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="settings-btn d_none_sm">
            <i className="ti-more" />
          </li>
          <li className="user-dropdown">
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="d_none_sm">Jessica <i className="ti-angle-down" /></span>
                <img src="/users/images/user.jpg" alt='' className="img-fluid" />
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#"><i className="ti-user" /> Profile</a>
                <a className="dropdown-item" href="#"><i className="ti-settings" /> Account Settings</a>
                <span role="separator" className="divider" />
                <a className="dropdown-item" href="#"><i className="ti-power-off" />Logout</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/*==================================*
                   End Notification Section
          *====================================*/}
    </div>
  </div>
  {/*==================================*
             End Header Section
  *====================================*/}
  {/*==================================*
             Main Section
  *====================================*/}
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
                <p className="mt-xl-0 text-xl-left mb-2">Total Traffic</p>
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
                <p className="mt-xl-0 text-xl-left mb-2">Total Orders</p>
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
                <p className="mt-xl-0 text-xl-left mb-2">New Customers</p>
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
                <p className="mt-xl-0 text-xl-left mb-2">Total Products</p>
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
      <div className="col-lg-8 stretched_card mt-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card_title">Sales By Profit</h4>
            <div className="d-flex mt-2 total_sales_sec mt-3">
              <div className="col-md-5">
                <p className="h1 lh-10 m-0 fw-300"><span>43,759</span>
                </p><small className="small text-success fs-11">Total Sales</small>
              </div>
              <div className="col-md-7 row no-gutters mt-2">
                <div className="col-sm-6">
                  <div className="sales-info"><span className="sales-info-box bg-success mr-2" />
                    <div className="sales-info-body">
                      <h6>Total Orders</h6><small><span className="text-success"><i className="feather ft-chevron-up" /> 17%</span> this month</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="sales-info"><span className="sales-info-box bg-primary mr-2" />
                    <div className="sales-info-body">
                      <h6>Total Products</h6><small><span className="text-danger"><i className="feather ft-chevron-down" /> 23%</span> this month</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="morris_line" />
          </div>
        </div>
      </div>
      <div className="col-lg-4 stretched_card mt-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card_title">Vist by Country</h4>
            <div id="country_map" />
            <div className="country_vists">
              <div className="country_vists_item">
                <div className="country_vists_wrapper">
                  <div className="country_vists_title">
                    San Francisco
                  </div>
                  <div className="country_vists_value">
                    65%
                  </div>
                </div>
                <div className="country_vists_progress">
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{"width":"70%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              <div className="country_vists_item">
                <div className="country_vists_wrapper">
                  <div className="country_vists_title">
                    Germany
                  </div>
                  <div className="country_vists_value">
                    40%
                  </div>
                </div>
                <div className="country_vists_progress">
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{"width":"40%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              <div className="country_vists_item">
                <div className="country_vists_wrapper">
                  <div className="country_vists_title">
                    France
                  </div>
                  <div className="country_vists_value">
                    60%
                  </div>
                </div>
                <div className="country_vists_progress">
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{"width":"60%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              <div className="country_vists_item">
                <div className="country_vists_wrapper">
                  <div className="country_vists_title">
                    Turkey
                  </div>
                  <div className="country_vists_value">
                    75%
                  </div>
                </div>
                <div className="country_vists_progress">
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{"width":"75%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              <div className="country_vists_item">
                <div className="country_vists_wrapper">
                  <div className="country_vists_title">
                    Nepal
                  </div>
                  <div className="country_vists_value">
                    50%
                  </div>
                </div>
                <div className="country_vists_progress">
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{"width":"50%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 mt-4 stretched_card">
        <div className="card">
          <div className="card-body">
            <div className="dropdown float-right">
              <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                <i className="ion-ios-more-outline" />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="javascript:void(0);" className="dropdown-item">Weekly Report</a>
                <a href="javascript:void(0);" className="dropdown-item">Monthly Report</a>
                <a href="javascript:void(0);" className="dropdown-item">Action</a>
                <a href="javascript:void(0);" className="dropdown-item">Settings</a>
              </div>
            </div>
            <h4 className="card_title mb-3">Recent Activities</h4>
            <div className="table-responsive">
              <table className="table table-centered table-hover mb-0">
                <tbody>
                  <tr>
                    <td>
                      <div className="media recent_activity mt-2">
                        <img className="mr-3 rounded-circle" src="images/team/member1.jpg" width={50} alt="Activity Image" />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">Jhon Doe
                            <small className="font-weight-normal d-block mt-1">18 Jan 2019 11:28
                              pm
                            </small>
                          </h6>
                          <span className="mt-2 d-block">Many desktop publishing</span>
                        </div>
                      </div>
                    </td>
                    <td className="table-action text-center">
                      <div className="dropdown">
                        <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                          <i className="ion-ios-more-outline" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          {/* item*/}
                          <a href="javascript:void(0);" className="dropdown-item">Settings</a>
                          {/* item*/}
                          <a href="javascript:void(0);" className="dropdown-item">Action</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="media recent_activity mt-2">
                        <img className="mr-3 rounded-circle" src="images/team/member2.jpg" width={50} alt="Activity Image" />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">David Ron
                            <small className="font-weight-normal d-block mt-1">18 Jan 2019 11:28
                              pm
                            </small>
                          </h6>
                          <span className="mt-2 d-block">Many desktop publishing</span>
                        </div>
                      </div>
                    </td>
                    <td className="table-action text-center">
                      <div className="dropdown">
                        <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                          <i className="ion-ios-more-outline" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          {/* item*/}
                          <a href="javascript:void(0);" className="dropdown-item">Settings</a>
                          {/* item*/}
                          <a href="javascript:void(0);" className="dropdown-item">Action</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="media recent_activity mt-2">
                        <img className="mr-3 rounded-circle" src="images/team/member3.jpg" width={50} alt="Activity Image" />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">Mike Hussey
                            <small className="font-weight-normal d-block mt-1">18 Jan 2019 11:28
                              pm
                            </small>
                          </h6>
                          <span className="mt-2 d-block">Many desktop publishing</span>
                        </div>
                      </div>
                    </td>
                    <td className="table-action text-center">
                      <div className="dropdown">
                        <a href="#" className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
                          <i className="ion-ios-more-outline" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          {/* item*/}
                          <a href="javascript:void(0);" className="dropdown-item">Settings</a>
                          {/* item*/}
                          <a href="javascript:void(0);" className="dropdown-item">Action</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> {/* end table-responsive*/}
          </div> {/* end card body*/}
        </div>
      </div>
      <div className="col-lg-4 mt-4 stretched_card">
        <div className="card">
          <div className="card-body">
            <div className="card_title">AVERAGE SALE SIZE</div>
            <div className="avg_sale_card">
              <span className="badge badge-pill mb-2 badge-danger"><span className="feather ft-chevron-down mr-2" />23.36%</span>
              <h1 className="mt-2">$956.78</h1>
              <h4 className="mb-2">PER SALE</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis dolor.</p>
            </div>
            <canvas id="avg-sale" className="chartjs-render-monitor" />
          </div>
        </div>
      </div>
      <div className="col-lg-4 mt-4 stretched_card">
        <div className="card">
          <div className="card-body">
            <h4 className="card_title">Traffic By Browsers</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid assumenda aut.</p>
            <div className="traffic_progress">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <span className="mb-1 title">Google Chrome</span>
                </div>
                <div className="d-flex flex-column text-right">
                  <span className="d-flex mr-1">
                    <span className="badge badge-pill mb-2 badge-success">80% <i className="feather ft-arrow-up text-white" /></span>
                  </span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{"width":"80%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="traffic_progress mt-4">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <span className="mb-1 title">Firefox</span>
                </div>
                <div className="d-flex flex-column text-right">
                  <span className="d-flex mr-1">
                    <span className="badge badge-pill mb-2 badge-danger">60% <i className="feather ft-arrow-down text-white" /></span>
                  </span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-danger" role="progressbar" style={{"width":"60%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="traffic_progress mt-4 mb-3">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <span className="mb-1 title">Microsoft Edge</span>
                </div>
                <div className="d-flex flex-column text-right">
                  <span className="d-flex mr-1">
                    <span className="badge badge-pill mb-2 badge-success">70% <i className="feather ft-arrow-up text-white" /></span>
                  </span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{"width":"70%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="traffic_progress mt-4">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <span className="mb-1 title">Safari</span>
                </div>
                <div className="d-flex flex-column text-right">
                  <span className="d-flex mr-1">
                    <span className="badge badge-pill mb-2 badge-danger">30% <i className="feather ft-arrow-down text-white" /></span>
                  </span>
                </div>
              </div>
              <div className="progress">
                <div className="progress-bar bg-danger" role="progressbar" style={{"width":"30%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
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
            <h4 className="card_title">Orders Overview</h4>
            <div className="single-table">
              <div className="table-responsive">
                <table className="table table-hover progress-table text-center">
                  <thead className="text-uppercase">
                    <tr>
                      <th scope="col">Order ID</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Product</th>
                      <th scope="col">Date</th>
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
  {/*==================================*
             End Main Section
  *====================================*/}
            </div>
            </Layout>
        
    );
}

export default HomePage;

import React, { useState, useContext } from 'react';
import endpoint from '../../auth/endpoint';
import { Context } from "../../auth/Context";

const Header: React.FC = () => {
    
    const [loading, setLoading] = useState(false)
    const { dispatch } = useContext(Context);
    
    const logOut = async () => {
         try {
      const res = await endpoint.post("/logout-api");
      if (res.data) {
        setLoading(false);
          dispatch({type: "LOGOUT"});
    localStorage.removeItem("user")
    window.location.reload()
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error.response?.data);
    }
        
    }
  return (
    <div className="header-area">
            <div className="row align-items-center">
                <div className="mobile-logo d_none_lg">
                    <a href="index.html"><img src="/images/mobile-logo.png" alt="logo" /></a>
                </div>

              
                <div className="col-md-6 d_none_sm d-flex align-items-center">
                    <div className="nav-btn pull-left">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="search-box pull-left">
                        <form action="#">
                            <i className="ti-search"></i>
                            <input type="text" name="search" placeholder="Search..." required />
                        </form>
                    </div>
                </div>
        
                <div className="col-md-6 col-sm-12">
                    <ul className="notification-area pull-right">
                        <li>
                            <span className="nav-btn pull-left d_none_lg">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </li>
                        <li id="full-view" className="d_none_sm"><i className="feather ft-maximize"></i></li>
                        <li id="full-view-exit" className="d_none_sm"><i className="feather ft-minimize"></i></li>
                        <li className="dropdown">
                            <i className="ti-bell dropdown-toggle" data-toggle="dropdown"><span></span></i>
                            <div className="dropdown-menu bell-notify-box notify-box">
                                <span className="notify-title">You have 3 new notifications <a href="#">view all</a></span>
                                <div className="nofity-list">
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-map-alt bg_blue"></i></div>
                                        <div className="notify-text">
                                            <h3>You added your Location</h3>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-bolt-alt bg_warning"></i></div>
                                        <div className="notify-text">
                                            <h3>Your Subscription Expired</h3>
                                            <span>30 Seconds ago</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-heart bg_danger"></i></div>
                                        <div className="notify-text">
                                            <h3>Some special like you</h3>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-comments bg_info"></i></div>
                                        <div className="notify-text">
                                            <h3>New Commetns On Post</h3>
                                            <span>30 Seconds ago</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-settings bg_secondary"></i></div>
                                        <div className="notify-text">
                                            <h3>You changed your Settings</h3>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                    <a href="#" className="notify-item">
                                        <div className="notify-thumb"><i className="ti-image bg_success"></i></div>
                                        <div className="notify-text">
                                            <h3>Image Uploaded Successfully</h3>
                                            <span>Just Now</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown">
                            <i className="fa fa-envelope-o dropdown-toggle" data-toggle="dropdown"><span></span></i>
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
                            <i className="ti-more"></i>
                        </li>
                        <li className="user-dropdown">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="d_none_sm"><span className='fa fa-user'></span> <i className="ti-angle-down"></i></span>
                                    <img src="images/user.jpg" alt="" className="img-fluid" />
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                                    <a className="dropdown-item" href="#"><i className="ti-user"></i> Profile</a>
                                    <a className="dropdown-item" href="#"><i className="ti-settings"></i> Account Settings</a>
                                  <span role="separator" className="divider"></span>
                                    <button onClick={logOut}><i className="ti-power-off" onClick={logOut}></i>Logout</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
              

            </div>
        </div>
  )
}
export default Header

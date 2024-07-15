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
                    <a href="/dashboard"><img src="/users/images/mobile-logo.png" alt="logo"  className='fa fa-avatar'/></a>
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
                       
                        <li className="settings-btn d_none_sm">
                            <i className="ti-more"></i>
                        </li>
                        <li className="user-dropdown">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="d_none_sm"><span className='fa fa-user'></span> <i className="ti-angle-down"></i></span>
                                    <img src="/users/images/user.jpg" alt="" className="img-fluid" />
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                                    <a className="dropdown-item" href="/profile"><i className="ti-user"></i> Profile</a>
                                  <span role="separator" className="divider"></span>
                                    <button 
                                        className="btn btn-danger rounded d-flex align-items-center" 
                                        onClick={logOut}
                                        style={{ gap: '5px' }}
                                    >
                                        <i className="fa fa-power-off"></i>
                                        Logout
                                    </button>
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

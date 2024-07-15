import React from 'react';
type Props = {
    logOut: () => void; 
};

const SideBar:React.FC <Props> = ({logOut}) => {
    return (
       <div className="sidebar-menu">
  <div className="sidebar-header">
  
    <div className="logo">
            <a href="/dashboard">
              <h5 className='text-white'> Book Store</h5>
              {/* <img src="/users/images/logo.png" alt="logo" /> */}
            </a>
    </div>
 
  </div>
 
  <div className="main-menu">
    <div className="menu-inner" id="sidebar_menu">
      <nav>
        <ul className="metismenu" id="menu">
          <li className="active">
            <a href="/dashboard">
              <i className="ti-home" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="fa fa-book" />
              <span>Books</span>
            </a>
            <ul className="collapse">
              <li><a href="/books"><i className="ti-alert" /><span> Book Lists</span></a></li>
              <li><a href="/new-book"><i className="ti-alert" /><span> New Book</span></a></li>

           
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="fa fa-users" />
              <span>Authors</span>
            </a>
            <ul className="collapse">
              <li><a href="/authors"><i className="fa fa-users" /> <span>Authors List</span></a></li>
              <li><a href="/new-author"><i className="ti-layout-media-overlay-alt-2" /> <span>New Author</span></a></li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="ti-settings" />
              <span>Settings</span>
            </a>
            <ul className="collapse">
              <li><a href="/profile"><i className="ti-user" /> <span> Profile</span></a></li>
                    <li>
                      <button 
                        className="btn btn-danger rounded d-flex align-items-center" 
                        onClick={logOut}
                        style={{ gap: '5px' }}
                    >
                        <i className="fa fa-power-off"></i>
                        Logout
                    </button>
                    </li>
            </ul>
          </li>
    
        </ul>
      </nav>
    </div>
  </div>
</div>
    );
}

export default SideBar;

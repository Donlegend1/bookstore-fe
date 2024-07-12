import React from 'react';
type Props = {
    logOut: () => void; 
};

const SideBar:React.FC <Props> = ({logOut}) => {
    return (
       <div className="sidebar-menu">
  <div className="sidebar-header">
    {/*=========================*
                    Logo
      *===========================*/}
    <div className="logo">
      <a href="/dashboard"><img src="/users/images/logo.png" alt="logo" /></a>
    </div>
 
  </div>
  {/*=========================*
             Main Menu
  *===========================*/}
  <div className="main-menu">
    <div className="menu-inner" id="sidebar_menu">
      <nav>
        <ul className="metismenu" id="menu">
          <li className="active">
            <a href="/dashboard">
              <i className="feather ft-home" />
              <span>Dashboard</span>
            </a>
          </li>
          {/*=========================*
                            UI Features
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-gitlab" />
              <span>Books</span>
            </a>
            <ul className="collapse">
              <li><a href="/books"><i className="ti-alert" /><span> Book Lists</span></a></li>
              <li><a href="/new-book"><i className="ti-alert" /><span> New Book</span></a></li>

           
            </ul>
          </li>
          {/*=========================*
                            Advance Kit
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-briefcase" />
              <span>Authors</span>
            </a>
            <ul className="collapse">
              <li><a href="/authors"><i className="ti-layout-cta-left" /> <span>Authors List</span></a></li>
              <li><a href="/new-author"><i className="ti-layout-media-overlay-alt-2" /> <span>New Author</span></a></li>
            </ul>
          </li>
          {/*=========================*
                            Icons
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-award" />
              <span>Settings</span>
            </a>
            <ul className="collapse">
              <li><a href="/profile"><i className="ti-flag-alt" /> <span> Profile</span></a></li>
              <li> <button onClick={logOut}><i className="ti-power-off" onClick={logOut}></i>Logout</button></li>
            </ul>
          </li>
    
        </ul>
      </nav>
    </div>
  </div>
  {/*=========================*
            End Main Menu
  *===========================*/}
</div>
    );
}

export default SideBar;

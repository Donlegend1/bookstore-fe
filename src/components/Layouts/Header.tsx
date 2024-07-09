import React from 'react';

const Header = () => {
    return (
        <header>
  {/* header inner */}
  <div className="header">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
          <div className="full">
            <div className="center-desk">
              <div className="logo"> <a href="index.html"><img src="images/logo.png" alt="#" /></a> </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
          <div className="menu-area">
            <div className="limit-box">
              <nav className="main-menu">
                <ul className="menu-area-main">
                  <li className="active"> <a href="index.html">Home</a> </li>
                  <li> <a href="about.html">About us</a> </li>
                  <li><a href="books.html">Our Books</a></li>
                  <li><a href="library.html">library</a></li>
                  <li><a href="contact.html">Contact us</a></li>
                  <li className="mean-last"> <a href="#"><img src="images/search_icon.png" alt="#" /></a> </li>
                  <li className="mean-last"> <a href="#"><img src="images/top-icon.png" alt="#" /></a> </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end header inner */}
</header>
    );
}

export default Header;

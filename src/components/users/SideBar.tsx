import React from 'react';

const SideBar:React.FC = () => {
    return (
       <div className="sidebar-menu">
  <div className="sidebar-header">
    {/*=========================*
                    Logo
      *===========================*/}
    <div className="logo">
      <a href="/dashboard"><img src="/users/images/logo.png" alt="logo" /></a>
    </div>
    {/*=========================*
                  End Logo
      *===========================*/}
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
              <span>UI Features</span>
            </a>
            <ul className="collapse">
              <li><a href="alert.html"><i className="ti-alert" /><span>Alert</span></a></li>
              <li><a href="accordion.html"><i className="ti-layout-accordion-separated" /><span>Accordion</span></a></li>
              <li><a href="buttons.html"><i className="icon-focus" /><span>Buttons</span></a></li>
              <li><a href="badges.html"><i className="icon-ribbon" /><span>Badges</span></a></li>
              <li><a href="cards.html"><i className="ti-id-badge" /><span>Cards</span></a></li>
              <li><a href="carousel.html"><i className="ti-layout-slider" /><span>Carousels</span></a></li>
              <li><a href="dropdown.html"><i className="icon-layers" /><span>Dropdown</span></a></li>
              <li><a href="list-group.html"><i className="ti-list" /><span>List Group</span></a></li>
              <li><a href="modals.html"><i className="ti-layers-alt" /><span>Modals</span></a></li>
              <li><a href="pagination.html"><i className="ion-android-more-horizontal" /><span>Pagination</span></a></li>
              <li><a href="popover.html"><i className="ion-ios-photos" /><span>Popover</span></a></li>
              <li><a href="progressbar.html"><i className="ion-ios-settings-strong" /><span>Progressbar</span></a></li>
              <li><a href="tabs.html"><i className="ti-layout-tab" /><span>Tabs</span></a></li>
              <li><a href="typography.html"><i className="ti-smallcap" /><span>Typography</span></a></li>
              <li><a href="grid.html"><i className="ti-layout-grid4" /><span>Grid</span></a></li>
            </ul>
          </li>
          {/*=========================*
                            Advance Kit
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-briefcase" />
              <span>Advance Kit</span>
            </a>
            <ul className="collapse">
              <li><a href="toastr.html"><i className="ti-layout-cta-left" /> <span>Toastr</span></a></li>
              <li><a href="sweet-alert.html"><i className="ti-layout-media-overlay-alt-2" /> <span>Sweet Alert</span></a></li>
              <li><a href="cropper.html"><i className="ion-crop" /> <span>Image Cropper</span></a></li>
              <li><a href="loaders.html"><i className="ion-load-a" /> <span>Css Loaders</span></a></li>
              <li><a href="app-tour.html"><i className="ti-flag-alt" /> <span>App Tour</span></a></li>
              <li><a href="ladda-button.html"><i className="ion-load-b" /> <span>Ladda Button</span></a></li>
              <li><a href="dropzone.html"><i className="ti-layout-placeholder" /> <span>Dropzone</span></a></li>
            </ul>
          </li>
          {/*=========================*
                            Icons
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-award" />
              <span>Icons</span>
            </a>
            <ul className="collapse">
              <li><a href="font-awesome.html"><i className="ti-flag-alt" /> <span>Font Awesome</span></a></li>
              <li><a href="themify.html"><i className="ti-themify-favicon" /><span>Themify</span></a></li>
              <li><a href="ionicons.html"><i className="ion-ionic" /><span>Ionicons V2</span></a></li>
              <li><a href="et-line.html"><i className="icon-basket" /><span>ET Line Icons</span></a></li>
            </ul>
          </li>
          {/*=========================*
                                Maps
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-map-pin" />
              <span>Maps</span>
            </a>
            <ul className="collapse">
              <li><a href="google-maps.html"><i className="icon-map" /><span>Google Maps</span></a></li>
              <li><a href="am-maps.html"><i className="icon-map-pin" /><span>AM Chart Maps</span></a></li>
            </ul>
          </li>
          {/*=========================*
                            Tables
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-credit-card" />
              <span>Tables</span>
            </a>
            <ul className="collapse">
              <li><a href="basic-table.html"><i className="ion-ios-grid-view" /><span>Basic Tables</span></a></li>
              <li><a href="datatable.html"><i className="ti-layout-slider-alt" /><span>Datatable</span></a></li>
              <li><a href="js-grid.html"><i className="ti-view-list-alt" /><span>Js Grid Table</span></a></li>
            </ul>
          </li>
          {/*=========================*
                               Forms
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-clipboard" />
              <span>Forms</span>
            </a>
            <ul className="collapse">
              <li><a href="form-basic.html"><i className="ion-edit" /><span>Basic ELements</span></a></li>
              <li><a href="form-layouts.html"><i className="ti-layout-grid2-thumb" /><span>Form Layouts</span></a></li>
              <li><a href="form-groups.html"><i className="ion-ios-paper" /><span>Input Groups</span></a></li>
              <li><a href="form-validation.html"><i className="ion-android-cancel" /><span>Form Validation</span></a></li>
            </ul>
          </li>
          {/*=========================*
                            Editors
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-edit" />
              <span>Editors</span>
            </a>
            <ul className="collapse">
              <li><a href="text-editor.html"><i className="ti-uppercase" /><span>Text Editor</span></a></li>
              <li><a href="code-editor.html"><i className="ion-code" /><span>Code Editor</span></a></li>
            </ul>
          </li>
          {/*=========================*
                            Calendar
                  *===========================*/}
          <li>
            <a href="full-calendar.html">
              <i className="feather ft-calendar" />
              <span>Calendar</span>
            </a>
          </li>
          {/*=========================*
                            Charts
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-pie-chart" />
              <span>Charts</span>
            </a>
            <ul className="collapse">
              <li><a href="chart-js.html"><i className="feather ft-bar-chart" /><span>Chart Js</span></a></li>
              <li><a href="morris-charts.html"><i className="feather ft-bar-chart-2" /><span>Morris Chart Js</span></a></li>
              <li><a href="c3-chart.html"><i className="feather ft-bar-chart-line" /><span>C3 Chart Js</span></a></li>
              <li><a href="chartist.html"><i className="feather ft-bar-chart-line-" /><span>Chartist Js</span></a></li>
            </ul>
          </li>
          {/*=========================*
                            Email
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-mail" />
              <span>Email</span>
            </a>
            <ul className="collapse">
              <li><a href="inbox.html"><i className="ion-ios-folder-outline" /><span>Inbox</span></a></li>
              <li><a href="compose.html"><i className="ti-pencil-alt" /><span>Compose Email</span></a></li>
              <li><a href="read-mail.html"><i className="ti-bookmark-alt" /><span>Read Email</span></a></li>
            </ul>
          </li>
          {/*=========================*
                            Gallery
                  *===========================*/}
          <li>
            <a href="gallery.html">
              <i className="feather ft-image" />
              <span>Gallery</span>
            </a>
          </li>
          {/*=========================*
                            Session
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-users" />
              <span>Session</span>
            </a>
            <ul className="collapse">
              <li>
                <a href="login.html">
                  <i className="feather ft-log-in" />
                  <span>Login</span>
                </a>
              </li>
              <li><a href="register.html"><i className="ion-person-add" /><span>Register</span></a></li>
              <li><a href="lock.html"><i className="ti-lock" /><span>Lock Screen</span></a></li>
              <li>
                <a href="reset-password.html">
                  <i className="feather ft-lock" />
                  <span>Reset Password</span>
                </a>
              </li>
              <li><a href="forgot-password.html"><i className="ti-bookmark-alt" /><span>Forgot Password</span></a></li>
            </ul>
          </li>
          {/*=========================*
                            Error Pages
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-anchor" />
              <span>Error Pages</span>
            </a>
            <ul className="collapse">
              <li><a href="404.html"><i className="ti-unlink" /><span>404</span></a></li>
              <li><a href="500.html"><i className="ti-close" /><span>500</span></a></li>
              <li><a href="505.html"><i className="ti-na" /><span>505</span></a></li>
            </ul>
          </li>
          {/*=========================*
                            Other Pages
                  *===========================*/}
          <li>
            <a href="javascript:void(0)" aria-expanded="true">
              <i className="feather ft-file-plus" />
              <span>Other Pages</span>
            </a>
            <ul className="collapse">
              <li>
                <a href="blank.html">
                  <i className="feather ft-file" />
                  <span>Blank Page</span>
                </a>
              </li>
              <li>
                <a href="invoice.html">
                  <i className="feather ft-paperclip" />
                  <span>Invoice</span>
                </a>
              </li>
              <li>
                <a href="pricing.html">
                  <i className="feather ft-dollar-sign" />
                  <span>Pricing</span>
                </a>
              </li>
              <li>
                <a href="profile.html"><i className="feather ft-user-check" /><span>Profile</span></a>
              </li>
              <li><a href="timeline.html"><i className="feather ft-clock" /><span>Timeline</span></a></li>
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

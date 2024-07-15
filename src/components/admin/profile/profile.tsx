import React, {useContext} from 'react';
import { Context } from "../../../auth/Context";
import ProfileUpdate from "../../../components/admin/profile/ProfileUpdate"

const Profile = () => {

    const { user } = useContext(Context);
    return (
        <div className="main-content-inner">
  <div className="profile_page">
    <div className="row">
      <div className="col-lg-12">
        <div className="cover-profile">
          <div className="profile-bg-img" style={{"background":"url('/users/images/lock-bg.jpg') no-repeat"}}>
            <div className="card-block user-info">
              <div className="col-md-12">
                <div className="media-left">
                  <a href="#" className="profile-image">
                    <img className="user-img img-radius" src="/users/images/team/member2.jpg" alt="user-img" />
                  </a>
                </div>
                <div className="media-body row">
                  <div className="col-lg-12">
                    <div className="user-title">
                      <h2>{user?.fullname}</h2>
                      <span className="text-white">Writer</span>
                    </div>
                  </div>
                  <div>
                    <div className="pull-right cover-btn">
                      <button type="button" className="btn btn-light m-r-10 m-b-5"><i className="icofont icofont-plus" /> Follow</button>
                      <button type="button" className="btn btn-light"><i className="icofont icofont-ui-messaging" /> Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="tab-header card mb-4">
          <ul className="nav nav-tabs md-tabs tab-timeline" role="tablist" id="mytab">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#personal" role="tab" aria-expanded="true">Personal Info</a>
              <div className="slide" />
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#user_info" role="tab" aria-expanded="false">Update Information</a>
              <div className="slide" />
            </li>
          
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane active" id="personal" role="tabpanel" aria-expanded="true">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card_title mb-0">About Me</h5>
              </div>
              <div className="card-block">
                <div className="view-info">
                  <div className="general-info">
                    <div className="row">
                      <div className="col-lg-12 col-xl-6">
                        <div className="table-responsive">
                          <table className="table m-0">
                            <tbody>
                              <tr>
                                <th scope="row">Full Name</th>
                                <td>{user?.fullname}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-6">
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <th scope="row">Email</th>
                                <td><a href="#!">{user?.email}</a></td>
                              </tr>
                            
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
          <div className="tab-pane" id="user_info" role="tabpanel" aria-expanded="false">
            <div className="card">
              <div className="card-header">
                <h5 className="card-header-text mb-0">Update profile</h5>
              </div>
            <ProfileUpdate />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default Profile;

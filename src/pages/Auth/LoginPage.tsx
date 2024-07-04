import React, {useState, useEffect} from 'react';
import Layout from '../../components/users/Layout';
interface UserAuthObject{
    email: string,
    password: string,

}

const Login: React.FC = () => {
      const [userData, setUserData] = useState<UserAuthObject>({
        email: "",
        password: "",
      });
  const LoginUser = () => {
    console.log('====================================');
    console.log(userData);
    console.log('====================================');
    if (userData.email && userData.password) {
        window.location.href = "/dashboard";
    }
    };

    return (
        <div className="wrapper">
  <div className="container-fluid">
    <div className="row">
      <div className="login-bg">
        <div className="login-overlay" />
        <div className="login-left">
          <img src="images/logo-login.png" alt="Logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus elit.</p>
          <a href="javascript:void(0);" className="btn btn-primary">Learn More</a>
        </div>
      </div>
      <div className="login-form">
          <div className="login-form-body">
            <div className="form-gp">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" id="exampleInputEmail1" onChange={(e)=>setUserData({...userData, email: e.target.value })} />
              <i className="ti-email" />
            </div>
            <div className="form-gp">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" id="exampleInputPassword1"onChange={(e)=>setUserData({...userData, password: e.target.value })}/>
              <i className="ti-lock" />
            </div>
            <div className="row mb-4 rmber-area">
              <div className="col-6">
                <div className="custom-control custom-checkbox primary-checkbox mr-sm-2">
                  <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                  <label className="custom-control-label" htmlFor="customControlAutosizing">Remember Me</label>
                </div>
              </div>
              <div className="col-6 text-right">
                <a href="#" className="text-primary">Forgot Password?</a>
              </div>
            </div>
            <div className="submit-btn-area">
              <button id="form_submit" type="submit" className="btn btn-primary" onClick={LoginUser}>Submit <i className="ti-arrow-right" /></button>
              <div className="login-other row mt-4">
                <div className="col-6">
                  <a className="fb-login" href="#"><span className="login_txt">Log in with</span>  <i className="fa fa-facebook" /></a>
                </div>
                <div className="col-6">
                  <a className="google-login" href="#"><span className="login_txt">Log in with</span>  <i className="fa fa-google" /></a>
                </div>
              </div>
            </div>
            <div className="form-footer text-center mt-5">
              <p className="text-muted">Don't have an account? <a href="/register" className="text-primary">Sign up</a></p>
            </div>
          </div>
       
      </div>
    </div>{/*row*/}
  </div>
</div>
    );
}

export default Login;

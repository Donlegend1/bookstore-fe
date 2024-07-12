import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/users/Layout';
import endpoint from "../../auth/endpoint";
import { Context } from "../../auth/Context";
import { ErrorAlert, SuccessAlert } from "../../Toast/Toast";
import Loader from '../../Loader/Loader';

interface UserAuthObject {
  login: string;
  password: string;
}

const Login: React.FC = () => {
  const [userData, setUserData] = useState<UserAuthObject>({ login: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(Context);


  //function to login
  const handleSubmit = async () => {
    dispatch({ type: "LOGIN_START" });
    setLoading(true);
    try {
      const res = await endpoint.post("/login-api", userData);
      if (res.data) {
        setLoading(false);
           SuccessAlert(res.data.message)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        window.location.replace('/dashboard');
      }
    } catch (error: any) {
      dispatch({ type: "LOGIN_FAILURE" });
      setLoading(false);
      ErrorAlert(error.response.data.errors.login[0])
      console.log(error.response);
    }
  };

  return (
    <div className="wrapper">
      <div className="container-fluid">
       
        <div className="row">
          <div className="login-bg">
            <div className="login-overlay" />
            <div className="login-left">
              <img src="/users/images/logo-login.png" alt="Logo" />
              <p>Fill in your credentials to login.</p>
              <a href="javascript:void(0);" className="btn btn-primary">Learn More</a>
            </div>
            </div>
             

            <div className="login-form">
              {loading ? <Loader /> :
            <div className="login-form-body">
              <div className="form-gp">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" id="exampleInputEmail1" onChange={(e) => setUserData({ ...userData, login: e.target.value })} />
                <i className="ti-email" />
              </div>
              <div className="form-gp">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" id="exampleInputPassword1" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
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
                <button id="form_submit" type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit <i className="ti-arrow-right" /></button>
                <div className="login-other row mt-4">
                  <div className="col-6">
                    <a className="fb-login" href="#"><span className="login_txt">Log in with</span> <i className="fa fa-facebook" /></a>
                  </div>
                  <div className="col-6">
                    <a className="google-login" href="#"><span className="login_txt">Log in with</span> <i className="fa fa-google" /></a>
                  </div>
                </div>
              </div>
              <div className="form-footer text-center mt-5">
                <p className="text-muted">Don't have an account? <a href="/register" className="text-primary">Sign up</a></p>
              </div>
              </div>
             }
            </div>
          
          </div>
       
      </div>
    </div>
  );
}

export default Login;

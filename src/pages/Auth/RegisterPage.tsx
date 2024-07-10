import React, {useState, useEffect, useContext} from 'react';
import Layout from '../../components/users/Layout';
import endpoint from "../../auth/endpoint";
import { Context } from "../../auth/Context";
import { ErrorAlert, SuccessAlert } from "../../Toast/Toast";

interface UserObject{
fullname: string,
email: string,
password: string,
password_confirmation: string,

}
const Register: React.FC = () => {
const [userData, setUserData] = useState<UserObject>({
	fullname: "",
	email: "",
	password: "",
	password_confirmation: "",
	});
	const { dispatch } = useContext(Context);
	const [loading, setLoading] = useState(false);

const handleRegisterUser = async () => {
    try {
        if (userData.password === userData.password_confirmation) {
            setLoading(true);
            const res = await endpoint.post(`/register-api`, userData);
          if (res.data) {
                dispatch({ type: "LOGIN_START" });
                setLoading(false);
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
                SuccessAlert(res.data.message);
                window.location.replace('/dashboard');
            }
        } else {
            ErrorAlert("Password and confirm password do not match");
        }
    } catch (err: any) {
        setLoading(false);
        const errors = err.response.data.errors;
        const formattedErrors = Object.entries(errors).map(([key, value]) => {
            return `${key}: ${(value as string[]).join(' ')}`;
        }).join('\n');
        console.log('====================================');
        console.log(err);
        console.log('====================================');
        ErrorAlert(formattedErrors);
    }
}




	return (
	<div className="wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="register-bg">
					<div className="login-overlay" />
					<div className="login-left">
						<img src="/users/images/logo-login.png" alt="Logo" />
						<p>Readers are Leaders, explore the best books.</p>
						<a href="javascript:void(0);" className="btn btn-primary">Learn More</a>
					</div>
				</div>
				<div className="login-form">

					<div className="login-form-body">
						<div className="form-gp">
							<label htmlFor="exampleInputName1">Full Name</label>
							<input type="text" id="exampleInputName1" onChange={(e)=>setUserData({...userData, fullname: e.target.value
							})}/>
							<i className="ti-user" />
						</div>
						<div className="form-gp">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input type="email" id="exampleInputEmail1" onChange={(e)=>setUserData({...userData, email: e.target.value })}
							/>
							<i className="ti-email" />
						</div>
						<div className="form-gp">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input type="password" id="exampleInputPassword1" onChange={(e)=>setUserData({...userData, password:
							e.target.value })} />
							<i className="ti-lock" />
						</div>
						<div className="form-gp">
							<label htmlFor="exampleInputPassword2">Confirm Password</label>
							<input type="password" id="exampleInputPassword2" onChange={(e)=>setUserData({...userData, password_confirmation:
							e.target.value })}/>
							<i className="ti-lock" />
						</div>
						<div className="submit-btn-area">
							<button id="form_submit" className="btn btn-primary" type="submit" onClick={handleRegisterUser}>Submit <i
									className="ti-arrow-right" /></button>
							<div className="login-other row mt-4">
								<div className="col-6">
									<a className="fb-login" href="#"><span className="login_txt">Sign up with</span> <i
											className="fa fa-facebook" /></a>
								</div>
								<div className="col-6">
									<a className="google-login" href="#"><span className="login_txt">Sign up with</span> <i
											className="fa fa-google" /></a>
								</div>
							</div>
						</div>
						<div className="form-footer text-center mt-5">
							<p className="text-muted">Don't have an account? <a href="/login">Sign in</a></p>
						</div>
					</div>

				</div>{/*login-form*/}
			</div>{/*row*/}
		</div>{/*container-fluid*/}
	</div>

	);
	}

	export default Register;

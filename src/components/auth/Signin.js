import React, {useState} from 'react'

import {MdVisibility, MdVisibilityOff,MdFacebook } from "react-icons/md";
import {FcGoogle} from "react-icons/fc";


const Login = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        showPassword: false
    })
    const {email, password, showPassword} = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]:e.target.value
        });
    }

    const ShowPassword = () => {
        setFormData({
          ...formData,
          showPassword: !showPassword,
        });
      };
    return (

        <form className="Login">
            <div className="Login__header">
                Sign In
            </div>
            <div className="Login__OtherDomain">
                <FcGoogle className="Login__OtherDomain__Logo"/>
                <div className="Login__OtherDomain__Text">Login with Google</div>
            </div>
            <div className="Login__OtherDomain">
                <MdFacebook className="Login__OtherDomain__Logo"/>
                <div className="Login__OtherDomain__Text">Login with Facebook</div>
            </div>
            <input
                className="Login__text"
                name="email"
                placeholder="Please enter your email address."
                value={email}
                onChange={handleChange}
            />
            <div className="Login__password">
                <input
                 type={showPassword ? 'text' : 'password'}
                 className ='Login__password__text' 
                 placeholder="Password"
                 name='password'
                 value={password}
                 onChange={handleChange}
                 />
                 {showPassword ? 
                 <MdVisibilityOff onClick={ShowPassword } className="Login__password__Icon"/> 
                 : 
                 <MdVisibility onClick={ShowPassword} className="Login__password__Icon"/>}
            </div>
            <div className="Login__forget">Forget your password?</div>
            
            <button className="Login__Signin">Sign In</button>
            <div className="Login__Signup">
                <p>Haven't got an account?</p>
                <div className="Login__Signup__Redirect">Sign Up</div>
            </div>
        </form>
    )
}

export default Login;


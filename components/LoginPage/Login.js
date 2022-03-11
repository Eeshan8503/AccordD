import React, { useState, createContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
// import classes from './style.module.css'

// import './styles.css'
// import Logo from './../../assets/Accord-logo.svg'
// import Lottie from 'react-lottie';
// import animationData from './../../lotties/LoginpL.json'
// import leaves from './../../lotties/leaves.json'
// import leavesR from './../../lotties/leavesR.json'
const clientId = "740313692705-66409pi5h12j1nrisa60nfrqsk0vukqc.apps.googleusercontent.com";
// const interact = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice"
//     }
//   };
//   const fallingLeaf = {
//     loop: true,
//     autoplay: true,
//     animationData: leaves,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice"
//     }
//   };
//   const fallingLeafR = {
//     loop: true,
//     autoplay: true,
//     animationData: leavesR,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice"
//     }
//   };
function Login(props) {

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
      console.log('Login Success:', res.profileObj);
      setShowloginButton(false);
      setShowlogoutButton(true);
      window.location.href='./Intrest'
  };

  const onLoginFailure = (res) => {
      console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
      alert("You have been logged out successfully");
      console.clear();
      setShowloginButton(true);
      setShowlogoutButton(false);
  };

    return (
       <div style={{display:'inline'}}>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    render={renderProps => (
                        <button className="panel-button" 
                        // style={this.props.buttonStyle}
                        // onMouseEnter={this.props._buttonColour}
                        // onMouseLeave={this.props._buttonColour}
                        onClick={renderProps.onClick}
                        >{props.val}
                    </button>
                      )}
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    // isSignedIn={true}
                /> : null}
            </div>
    );
}
export default Login;
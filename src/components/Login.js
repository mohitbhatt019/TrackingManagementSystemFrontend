import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/LoginSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {
    
    const initData = {
        username: "",
        password: "",
    };
    const dispatch = useDispatch();
    const [loginForm, setLoginForm] = useState(initData);
    const navigate=useNavigate();
    const loginError = useSelector((state) => state.app.error);
    const tokenn = useSelector((state) => state.app.token);
    const [showAlert, setShowAlert] = useState(false);
   
  //this change handler will store  login data in login form
  const loginChangeHandler = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  //console.log(loginError,"loginError")
  
  const loginClick = () => {
    
    // Dispatch the loginUser action
    dispatch(loginUser(loginForm));
    if (loginError !== null) {
      setShowAlert(true);}
    // Delayed execution using setTimeout
    setTimeout(() => {
      
      // Hide the alert after 1 second
      let timeoutId;
      if (showAlert) {
        timeoutId = setTimeout(() => {
          setShowAlert(false);
        }, 1000);
      }
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, ); // Delay of 2 seconds
  };


  useEffect(()=>{
    debugger
    if (tokenn !== "" || loginError === "") {
      navigate("/companyList");
    }
  },[tokenn])
  

    //this useffect is to diplay login error after some time
    // useEffect(() => {
    // debugger
    //     let timeoutId;
    //     if (showAlert) {
    //       timeoutId = setTimeout(() => {
    //         setShowAlert(false);
    //       }, 6000);
    //     }
    
    //     return () => {
    //       clearTimeout(timeoutId);
    //     };
    //   }, [showAlert]);
  return (
    <div>
        {showAlert && (
        <div className="alert alert-danger" role="alert">
          Login error! Please try again.
        </div>
      )}
      {" "}
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                alt="Login Form Illustration"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button
                    type="button"
                    class="btn btn-primary btn-floating mx-1"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary btn-floating mx-1"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary btn-floating mx-1"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div class="form-outline mb-4">
                  <input
                     onChange={loginChangeHandler}
                    required
                    name="username"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label class="form-label" for="username">
                    Username
                  </label>
                  {/* // <p className="text-danger">{loginFormError.username}</p> */}
                </div>

                <div class="form-outline mb-3">
                  <input
                    type="password"
                    onChange={loginChangeHandler}
                    required
                    id="password"
                    name="password"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                  />

                  <label class="form-label" for="password">
                    Password
                  </label>
                  {/* //<p className="text-danger">{loginFormError.password}</p> */}
                </div>

                <input
                  type="hidden"
                  id="id"
                  name="applicationUserId"
                  // value={id}
                    onChange={loginChangeHandler}
                  class="form-control form-control-lg"
                  placeholder="Enter password"
                />

                <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check mb-0">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label class="form-check-label" for="form2Example3"></label>
                  </div>
                  <a href="#!" class="text-body">
                    Forgot password?
                  </a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button
                     onClick={loginClick}
                    type="button"
                    class="btn btn-primary btn-lg"
                  >
                    Login
                  </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="#!" class="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div class="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>

          <div>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="#!" class="text-white">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

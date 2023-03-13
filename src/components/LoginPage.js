import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Facebook, Google, Linkedin } from "../AllSvgs";
import "./LoginPage.css";

const LoginPage = () => {
  const [loginError, setLoginError] = useState(null); // New state variable for error message
  const [signupData, setSignupData] = useState();

  //Function to retrieve saved signup data from local storage
  const getSignupData = () => {
    const data = localStorage.getItem("signupData");
    if (data) {
      setSignupData(JSON.parse(data));
    }
  };

  // Call getSignupData on component mount
  useEffect(() => {
    getSignupData();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = (data) => {
    // Check if email and password match the aved data
    if (
      signupData &&
      data.email === signupData.email &&
      data.password === signupData.password
    ) {
      // If match, log in user

      console.log("Logged in successfully");
      setLoginError(null);
    } else {
      // If not match, show error message
      console.log("Email or password is incorrect");
      setLoginError("Email or password is incorrect"); // Set error message
    }
  };

  return (
    <div className="Login">
      <div className="bg">
        <div className="title">
          <div className="left1">
            <div>
              <span>login</span>
            </div>
            <div>
              <span>Sign Into Your Account</span>
            </div>
            <div>
              <Facebook width={20} />
              <Google width={10} />
              <Linkedin width={20} />{" "}
            </div>
            <div>
              <span>or use email for registration:</span>
            </div>
            <div className="login">
              <form className="signin" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  name="email"
                  {...register("email")}
                  placeholder="Email"
                />
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password do not match",
                    minLength: {
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                      maxLength: {
                        value: 20,
                        message: "Password must be at most 20 characters long",
                      },
                    },
                    validate: (value) => {
                      return (
                        value === watch("password") || "Password do not match"
                      );
                    },
                  })}
                  placeholder="Password"
                />
                {errors.password && (
                  <span className="errorMsg">{errors.password.message}</span>
                )}

                <button>forgot your password?</button>
                <input type={"submit"} value="LOGIN" className="button1" />
              </form>

              {loginError && <span className="errorMsg1">{loginError}</span>}
            </div>
          </div>
          <div className="right1">
            <div>
              <span>Hello Friend!</span>
            </div>
            <div>
              <span>Enter your personal details </span>
              <span>and start journey with us</span>
            </div>
            <Link to="/">
              <div className="btn">sign up</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

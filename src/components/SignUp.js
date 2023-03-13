import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Facebook, Google, Linkedin } from "../AllSvgs";
import "./SignUp.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./input";

// const schema = yup.object({
//   username: yup.string().required("Username is a required field"),
//   email: yup.string().required("email is required").email("Email is not valid"),
//   gender: yup.string().required(),
//   password: yup.string().min(6, "Password must be at least 6 characters"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password")], "password must be matched"),
// });

const SignUp = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  console.log(errors);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      navigate("/login", { replace: true }); // <-- redirect
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  return (
    <div className="container">
      <div className="bg">
        <div className="title">
          <div className="right">
            <div>
              <span>log in</span>
            </div>
            <div>
              <span>Welcome Back!</span>
            </div>
            <div>
              <span>To keep connected with us please</span>
            </div>
            <div>
              <span>login with your personal info</span>
            </div>

            <Link to="/login">
              <div className="btn">LOGIN</div>
            </Link>
          </div>
          <div className="left">
            <div>
              <span>Create Account</span>
            </div>
            <div>
              <Facebook width={20} />
              <Google width={10} />
              <Linkedin width={20} />{" "}
            </div>
            <div>
              <span>or use email for registration</span>
            </div>
            <form className="signin" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                id="username"
                {...register("username", { required: "Username is required" })}
                placeholder="Username"
              />
              {errors.username && (
                <span className="errorMsg">{errors.username.message}</span>
              )}
              <select id="gender" name="gender" {...register("gender")}>
                <option value="">Gender...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                type="text"
                id="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
              />
              {errors.email && (
                <span className="errorMsg">{errors.email.message}</span>
              )}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be at most 20 characters long",
                  },
                })}
                placeholder="Password"
              />
              {errors.password && (
                <span className="errorMsg">{errors.password.message}</span>
              )}
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Password do not match",
                  validate: (value) => {
                    return (
                      value === watch("password" )|| "Password do not match"
                    );
                  },
                })}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <span className="errorMsg">
                  {errors.confirmPassword.message}
                </span>
              )}
              <input type={"submit"} value="SIGN IN" className="button1" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

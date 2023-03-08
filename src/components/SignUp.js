import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Facebook, Google, Linkedin } from "../AllSvgs";
import "./SignUp.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              <div className="btn">SIGN IN</div>
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
                name="name"
                {...register("name")}
                placeholder="names"
              />
              <select name="gender" {...register("gender")}>
                <option value="">Gender...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                type="text"
                name="email"
                {...register("email")}
                placeholder="Email"
              />
              <input
                type="number"
                name="phone"
                {...register("phone")}
                placeholder="Phone No."
              />
              <input
                type="password"
                name="password"
                {...register("password")}
                placeholder="password"
              />
              <input type={"submit"} value="SIGN IN" className="button1" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import { useForm } from "react-hook-form";
import { Facebook, Google, Linkedin } from "../AllSvgs";
import "./LoginPage.css";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                  name="password"
                  {...register("password")}
                  placeholder="Password"
                />
                <button>forgot your password?</button>
                <input type={"submit"} className="button1" />
              </form>
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
            <div className="btn">sign up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

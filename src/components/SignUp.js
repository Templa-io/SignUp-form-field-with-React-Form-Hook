import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Facebook, Google, Linkedin } from "../AllSvgs";
import "./SignUp.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required(),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

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
                {...register("username")}
                placeholder="Username"
              />
              <select name="gender" {...register("gender")}>
                <option value="">Gender...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input
                type="text"
                id="email"
                {...register("email")}
                placeholder="Email"
              />
              <input
                type="password"
                id="password"
                {...register("password")}
                placeholder="Password"
              />
              <input
                type="password"
                id="ConfirmPassword"
                {...register("ConfirmPassword")}
                placeholder="ConfirmPassword"
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

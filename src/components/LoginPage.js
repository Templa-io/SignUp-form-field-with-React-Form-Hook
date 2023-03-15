import React, { useEffect, useState , useRef,useContext} from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Facebook, Google, Linkedin } from "../AllSvgs";
import "./LoginPage.css";
import AuthContext from "../context/AuthProvider"

import axios from '../api/axios'
const LOGIN = '/auth';

const LoginPage = () => {
  const {setAuth} = useContext(AuthContext)
const userRef = useRef()
const errRef =useRef()

  const [user, setUser] = useState(''); 
  const [pwd, setPwd] = useState('');
  const[errMsg,  setErrMsg] =useState()
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    //calling the focus method on the userRef
    //set focus on user input
userRef.current && userRef.current.focus()
  }, []);

  useEffect(() => {
   //empty out user pasword when changed
  setErrMsg('')
  }, [user, pwd])


  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  

  const onSubmit = async (event) => {
    console.log(event)

    try{
const response = await axios.post('/login' , JSON.stringify({user, pwd}),//appends the baseURL automaically in the 
{

  headers:{'Content-Type': 'application/json'},
  withCredentials:true
}
)
console.log(JSON.stringify(response?.data))
console.log(JSON.stringify(response))
const accessToken  = response?.data?.accessToken
const roles = response?.data?.roles
setAuth({user, pwd, roles, accessToken})
setSuccess(true)
    
    setUser('')
    setPwd('')
    setSuccess(true)
    console.log(user, pwd)
    }catch(err){
if (!err?.response){
  setErrMsg('No Server Response')
}else if(err.response?.status === 400){
  setErrMsg('Missing Username or Password')
}else if(err.response?.status === 401){
  setErrMsg('Unauthorized')
}else {
  setErrMsg('Login Failed')
}
errRef.current.focus()

    }
    

    
  };

  return (
  <>
  
  {/* {success ? (
    <div className="bg">
<br/>
<h2> you are logged in</h2>
<br/>
<button className="btn">
  <a href="/">go to home</a>
</button>
    </div>
  ):( */}


   
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
              <form className="signin" onSubmit={(event) => handleSubmit(onSubmit)(event)}>
                <input
                  type="text"
                  id="email"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  placeholder="Email"
                
                />
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  // {...register("password", {
                  //   required: "Password do not match",
                  //   minLength: {
                  //     minLength: {
                  //       value: 8,
                  //       message: "Password must be at least 8 characters long",
                  //     },
                  //     maxLength: {
                  //       value: 20,
                  //       message: "Password must be at most 20 characters long",
                  //     },
                  //   },
                  //   validate: (value) => {
                  //     return (
                  //       value === watch("password") || "Password do not match"
                  //     );
                  //   },
                  // })}
                  placeholder="Password"
                />
                {errors.password && (
                  <span className="errorMsg">{errors.password.message}</span>
                )}

                <button>forgot your password?</button>
                <input type={"submit"} value="LOGIN" className="button1" />
                {/* <input type={"submit"} value="LOGIN" className="button1" /> */}
              </form>
<p ref={errRef} className={errMsg ? "errorMsg1" : "offscreen"} aria-live="assertive">{errMsg}</p>
             
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
  {/* )} */}
</>
  );
};

export default LoginPage;

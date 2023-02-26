import { Facebook, Google, Linkedin } from "./AllSvgs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <div>
          <span className="stroke-text">TPLR-IO</span>
          <span> Login</span>
        </div>
        <div>
          <span> by </span>
          <span>
            <a href="">humphrey</a>
          </span>
        </div>
      </div>
      <hr />
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

              <div className="btn">SIGN IN</div>
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
              <form className="signin">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="number" />
                <input type={"submit"} className="button" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

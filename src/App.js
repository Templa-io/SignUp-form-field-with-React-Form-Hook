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
                <span>logo</span>
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
            <div className="left">left</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

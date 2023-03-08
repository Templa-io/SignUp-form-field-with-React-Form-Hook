import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";

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
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;

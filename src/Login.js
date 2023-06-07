import React from "react";
import './componets/login.css'

function Login() {
    return (
        <>
        <div className="b1">
            <div className="main3">
    <input type="checkbox" id="chk" aria-hidden="true" />
    <div className="signup">
      <form>
        <label htmlFor="chk" aria-hidden="true" className="ha">
          Sign up
        </label>
        <input type="text" name="txt" placeholder="User name" required="" className="op"/>
        <input type="email" name="email" placeholder="Email" required="" className="op"/>
        <input type="password" name="pswd" placeholder="Password" required="" className="op"/>
        <button>Sign up</button>
      </form>
    </div>
    <div className="login">
      <form>
        <label htmlFor="chk" aria-hidden="true" className="ha">
          Login
        </label>
        <input type="email" name="email" placeholder="Email" required="" className="op"/>
        <input type="password" name="pswd" placeholder="Password" required="" className="op"/>
        <button>Login</button>
      </form>
    </div>
  </div>
  </div>
        </>
    );
};

export default Login;
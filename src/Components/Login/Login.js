import React, { useState, useEffect } from 'react';
import './Login.css'

const Login = () => {
  // const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');

  
  const login = async (e) => {
    e.preventDefault();
    if (email.length ==0) {
                   
        alert('Please fill email id')
                    return;
                }
                else{
                    alert('Login sucessfully');
                }
    // const res = await fetch(`${API_URL}/api/auth/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     // name: name,
    //     email:email,
    //     password: password,
    //   }),
    // });

  }

  return (
    <div>
      <div className=" login_container ">
        <div className="login-grid">
          <div className="login-text">
            <h2>Login</h2>
          </div>
          <div>
            Are you a new member? <span><a href="#" style={{ color: '#2190FF' }}> Sign Up Here</a></span>
          </div>
          <br />
          <div className="login-form">
            <form onSubmit={login}>
              <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
              </div>

              <div >
                <button type="submit" >Login</button>
                <button type="reset">Reset</button>
              </div>
              <br />
              <div style={{textAlign:'center'}}>
                Forgot Password?
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;

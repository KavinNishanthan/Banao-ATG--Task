// Importing packges
import React from 'react';

// Importing Assets
import Register from '../../assets/svg/Register.svg';

const Login = ({ handleSignup }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="div1">
        <div className="h3">Sign In</div>
        <div className="mt-3">
          <div className="input-group" style={{ width: '300px' }}>
            <input
              type="text"
              className="form-control rounded-0 bg-light"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Email"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              className="form-control rounded-0 bg-light"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="mt-3">
          <div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary mb-4 rounded-5 mt-2" type="button">
                Sign In
              </button>
              <button className="btn rounded-1" type="button" style={{ backgroundColor: '#EDEEF0' }}>
                Sign up with Facebook
              </button>
              <button className="btn rounded-1" type="button" style={{ backgroundColor: '#EDEEF0' }}>
                Sign up with Google
              </button>
            </div>
            <div className="mt-4" style={{ textAlign: 'center' }}>
              <a href="#" style={{ fontSize: 10, textDecoration: 'none' }}>
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="mt-2" style={{ marginLeft: 'auto', fontSize: 13 }}>
          Don’t have an account yet?{' '}
          <button
            className="btn btn-link"
            style={{ color: 'blue', textDecoration: 'none', padding: 0, fontSize: 13 }}
            onClick={handleSignup}
          >
            Create new for free!
          </button>
        </div>
        <div>
          <img src={Register} alt="error" />
        </div>
      </div>
    </div>
  );
};

export default Login;

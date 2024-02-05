// Importing packges
import React from 'react';

// Importing Assets
import Register from '../../assets/svg/Register.svg';

const CreateAccount = ({ handleSignin }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="div1">
        <div className="h3">Create Account</div>
        <div className="mt-3">
          <div className="input-group " style={{ width: '300px' }}>
            <input type="text" className="form-control rounded-0 bg-light" placeholder="First Name" />
            <input type="text" className="form-control rounded-0 bg-light" placeholder="Last Name" />
          </div>
          <div className="input-group">
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
          <div className="input-group">
            <input
              type="password"
              className="form-control rounded-0 bg-light"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="mt-3">
          <div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary mb-4 rounded-5 mt-2" type="button">
                Create Account
              </button>
              <button className="btn rounded-1" type="button" style={{ backgroundColor: '#EDEEF0' }}>
                Sign up with Facebook
              </button>
              <button className="btn rounded-1" type="button" style={{ backgroundColor: '#EDEEF0' }}>
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="mt-2" style={{ marginLeft: 'auto', fontSize: 13 }}>
          Already have an account?{' '}
          <button
            className="btn btn-link"
            style={{ color: 'blue', textDecoration: 'none', padding: 0, fontSize: 13 }}
            onClick={handleSignin}
          >
            Sign in
          </button>
        </div>
        <div>
          <img src={Register} alt="error" />
        </div>
        <div style={{ marginLeft: 25, fontSize: 10, marginTop: -23 }}>
          By signing up, you agree to our Terms & conditions, Privacy policy
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;

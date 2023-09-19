import React from 'react'
import '../CSS/Login.css'
import { Link } from 'react-router-dom/dist'

export default function Login() {
  return (
    <div className='container'>
      <div className='login-container'>
        <div className="login-credentials">
          <h3 style={{ padding: '2%' }}>CamCraft</h3>
          <form
            className="login-form"
            id="new_user"
          >
            <fieldset>
              <div className="form-group email optional user_email" style={{ padding: '2%' }}>
                <input
                  className="form-control string email optional form-control-xl js-email-field"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              <div className="a-input-group js-show-password mb-1" style={{ padding: '2%' }}>
                <input
                  className="form-control form-control-xl js-password-field"
                  placeholder="Password"
                  type="password"
                  required
                />
                {/* <span className="a-input-group__action js-show-password-action" role="button">
                  <i className="a-icon-eye a-input-group__action-icon js-show-password-icon"></i>
                  <i className="a-icon-eye-slash a-input-group__action-icon d-none js-show-password-icon">
                    ::before
                  </i>
                </span> */}
              </div>

            </fieldset>
            <div className="btn-toolbar form-actions t-login-button" style={{ padding: '2%' }}>
              <button name="button" type="submit" className="a-button" >
                Log in
              </button>
            </div>
          </form>
          <div className='login-footer'>
            Don't Have an Account?
            <Link to={'/signup'}> SignUp</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

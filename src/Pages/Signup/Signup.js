import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    render() {
      return (
        <form
          className="SignupForm"
          // onSubmit={this.handleSubmitJwtAuth}
        >
          <div className='user_name'>
            <label >
              User name:
            </label>
            <input
              required
              name='user_name'/>
          </div>
          <div className='email'>
            <label>
              Email:
            </label>
            <input
              required
              name='email'/>
          </div> 
          <div className='phone_number'>
            <label>
              Phone Number:
            </label>
            <input
              required
              name='phone_number'/>
          </div>
          <div className='description'>
              <label>
                Description:
              </label>
              <input 
                required
                name='description'
                maxLength={150}/>
          </div>
          <div className='password'>
            <label>
              Password:
            </label>
            <input 
              required
              name='password'/>
          </div>
          <button type='submit'>
            Sign up
          </button>
        </form>
      );
    }
}

export default Signup;
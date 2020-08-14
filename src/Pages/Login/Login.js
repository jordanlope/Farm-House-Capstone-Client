import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    
    //state = { error: null }

    render() {
      //const { error } = this.state
      return (
        <form 
          className='LoginForm'
          // onSubmit={this.handleSubmitJwtAuth}
        >
          {/* <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div> */}
          <div className='user_name'>
            <label htmlFor='LoginForm__user_name'>
              User name:
            </label>
            <input
              required
              name='user_name'
              id='LoginForm__user_name'>
            </input>
          </div>
          <div className='password'>
            <label htmlFor='LoginForm__password'>
              Password:
            </label>
            <input
              required
              name='password'
              type='password'
              id='LoginForm__password'>
            </input>
          </div>
          <button type='submit'>
            Login
          </button>
        </form>
      );
    }
}

export default Login;
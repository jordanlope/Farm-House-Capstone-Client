import React, { Component } from 'react';
import './RegistrationForm.css';
import { withRouter } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';

class RegistrationForm extends Component {

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, email, number, description, password } = ev.target

    this.setState({ error: null })

    console.log(full_name, user_name, email, number, description, password)

    AuthApiService.postUser({
      full_name: full_name.value,
      user_name: user_name.value,
      email: email.value,
      number: number.value,
      description: description.value,
      password: password.value
    }).then(data => {
      console.log('Before push')
      full_name.value = ''
      user_name.value = ''
      email.value = ''
      number.value = ''
      description.value = ''
      password.value = ''

      this.props.history.push('/login')

    }).catch(res => {
      console.log(res.error)
      this.setState({ error: res.error })
    })
  }

  render() {
    return (
      <form
        className="RegistrationForm"
        onSubmit={this.handleSubmit}>
        <div className='user_name'>
          <label >
            User name:
          </label>
          <input
            type='text'
            required
            name='user_name'/>
        </div>
        <div className='full_name'>
          <label >
            Full name:
          </label>
          <input
            type='text'
            required
            name='full_name'/>
        </div>
        <div className='number'>
          <label >
            Number:
          </label>
          <input
            type='text'
            required
            name='number'/>
        </div>
        <div className='email'>
          <label>
            Email:
          </label>
          <input
            type='text'
            required
            name='email'/>
        </div> 
        <div className='description'>
            <label>
              Description:
            </label>
            <input 
              type='text'
              required
              name='description'
              maxLength={150}/>
        </div>
        <div className='password'>
          <label>
            Password:
          </label>
          <input 
            type='text'
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

export default withRouter(RegistrationForm);
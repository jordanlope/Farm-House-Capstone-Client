import React, { Component } from 'react';
import './RegistrationForm.css';
import { withRouter } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import RealtorContext from '../../contexts/RealtorContext';

class RegistrationForm extends Component {
  static contextType = RealtorContext

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, email, description, password } = ev.target

    this.setState({ error: null })

    console.log(full_name, user_name, email, description, password)

    AuthApiService.postUser({
      full_name: full_name.value,
      user_name: user_name.value,
      email: email.value,
      description: description.value,
      password: password.value
    }).then(data => {
      console.log('Before push')
      
      this.context.setRealtor({
        full_name: full_name.value,
        user_name: user_name.value,
        email: email.value,
        description: description.value
      })

      console.log(full_name.value)
      full_name.value = ''
      user_name.value = ''
      email.value = ''
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
            type='password'
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
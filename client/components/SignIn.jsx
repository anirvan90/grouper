import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import LoginForm from 'grommet/components/LoginForm'

class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      signedIn: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    delete event.rememberMe
    axios.post('/auth/signin', event)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('username', res.data.username)
      this.setState({ signedIn: true })
    })
    .catch((err) => {
      console.error('error submitting signin:', err)
    })
  }

  render () {
    if (this.state.signedIn) {
      return (<Redirect to={'/'} />)
    }

    return (
      <LoginForm onSubmit={this.handleSubmit}
        usernameType='text' />
    )
  }
}

export default SignIn

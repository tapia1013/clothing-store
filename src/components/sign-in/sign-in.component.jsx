import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';



class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }


  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' })
  }



  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value })
  }


  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In With Your Email And Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />

          <FormInput
            name='password'
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />

          <CustomButton type="submit" value='Submit Form'>
            Sign In
          </CustomButton>
        </form>
      </div>
    )
  }
}


export default SignIn;
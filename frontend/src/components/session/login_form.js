import React from 'react';
import { withRouter } from 'react-router-dom';
import loginCss from './login.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/dashboard');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the  if there are any
  renderErrors() {
    return(
      <ul id='errors'>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`} id='error'>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div id="main-log">
        <form onSubmit={this.handleSubmit} id="log-form">
          
          <div id="log-side-photo">
            <img src="https://assets.airmail.news/static/images/BAh7CEkiCGdpZAY6BkVUSSIzZ2lkOi8vYWlyLW1haWwvQXJ0aWNsZTo6UGhvdG8vNDU2NjU_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--d8b07e76cf3d5be88b616c16e3d90e90872020aa/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpQ1RneU1ENEdPd1pVT2hCaGRYUnZYMjl5YVdWdWRGUTZESEYxWVd4cGRIbHBhUT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--9f1042b9c088c6ba97f7b06fd8c724bd4cf39745/photo-1619795015.jpeg" id="log-photo"/>
          </div>
          
          <div id='log-inner'>
            <h1 id='log-title'>Sign In</h1>
            <br/>
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                id='log-inputs'
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                id='log-inputs'
              />
            <br/>
            <input type="submit" value="Submit" id="log-submit"/>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
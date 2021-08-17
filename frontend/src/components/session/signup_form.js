
import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      password2: '',
      phoneNumber: '',
      businessOwner: null,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2,
      phoneNumber: this.state.phoneNumber,
      businessOwner: this.state.businessOwner,
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                placeholder="Name"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
              <input type="text"
                value={this.state.phoneNumber}
                onChange={this.update('phoneNumber')}
                placeholder="Enter your phonenumber"
              />
            <br/>
              <input type="radio"
                value={true}
                onChange={this.update('businessOwner')}
                id='true'
              />
              <label for='true'> True </label>
            <br/>
            <br/>
              <input type="radio"
                value={false}
                onChange={this.update('businessOwner')}
                id='false'
              />
              <label for='false'> False </label>
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);

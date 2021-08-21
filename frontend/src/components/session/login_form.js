import React from 'react';
import { withRouter } from 'react-router-dom';
import loginCss from './login.css';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      // phoneNumber: '',
      // address: '',
      // businessOwner: null,
      errors: {},
      // userId: this.props.currentUser
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // componentDidMount(){

  //   this.props.fetchAllShipments(this.state.userId)
  // }

  
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

    this.props.login(user)
      // .then( () => this.props.fetchAllShipments(this.state.userId)) 
      // .then(console.log(this.props.currentUser))
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
            <img src="https://github.com/cyss0317/MERN-Project-PAQ/blob/main/frontend/src/css_images/mexico_day.jpeg?raw=true" id="log-photo"/>
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
            <h4 id='already1'>Don't have an account? <Link to='/signup'>‣ Sign Up</Link></h4>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
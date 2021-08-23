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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.customerDemoUser = this.customerDemoUser.bind(this);
    this.ownerDemoUser = this.ownerDemoUser.bind(this);
  }

  // componentDidMount(){

  //   this.props.fetchAllShipments(this.state.userId)
  // }

  
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
  //     this.props.history.push('/dashboard');
  //   }

  //   // Set or clear errors
  //   this.setState({errors: nextProps.errors})
  // }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  customerDemoUser(){
    const user = Object.assign({}, { email: "Demo_customer@PAQ.com", password:"password"})
    this.props.login(user)
  }

  ownerDemoUser(){
    const user = Object.assign({}, { email: "Demo_owner@PAQ.com", password: "password" })
    this.props.login(user)
  }


  // Handle form submission
  handleSubmit(e) {
    if (e.currentTarget.value === "Submit"){
      e.preventDefault();
  
      let user = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.login(user)
    } else {

    }
    // .catch(err => this.renderErrors(err))
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
            <br />
            <button onClick={this.customerDemoUser} id="log-submit">Demo_customer</button>
            <br />
            <button onClick={this.ownerDemoUser} id="log-submit">Demo_owner</button>
            {this.renderErrors()}
            <h4 id='already1'>Don't have an account? <Link to='/signup'>‣ Sign Up</Link></h4>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
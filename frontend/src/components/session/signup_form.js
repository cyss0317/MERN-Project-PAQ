import React from 'react';
import { withRouter } from 'react-router-dom';
import singupCss from './signup.css'
import { Link } from 'react-router-dom'

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
      errors: {},
      switch: '',
      address: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentDidMount(){
    // this.props.fetchUser(this.props.user._id); 
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
      address: this.state.address,
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`} id="sign-err">
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    // if(!this.props.user) return null; 
    return this.state.switch === '' ?
    (
       <div className="signup-form-container">
        <div className="signup-form">
          <div id="sign-side-photo">
          </div>
          <div id="sign-inner">
            <h1 id="sign-title">Sign Up</h1>
            <br/>
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                placeholder="Name"
                id="sign-inputs"
                />
            <br/>
              <input type="email"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                id="sign-inputs"
                />
            <br/>
            <input type="submit" value="Continue" id="sign-submit" onClick={this.update('switch')}/>
            {this.renderErrors()}
          <h4 id='already'>Already have an account? <Link to='/login'>‣ Log In</Link></h4>
          </div>
        </div>
      </div>
    )
    :
      (<div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div id="sign-inner">
            <h1 id="sign-title">Continued</h1>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              id="sign-inputs"
            />
            <br />
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
              id="sign-inputs"
            />
            <br />
            <input type="text"
              value={this.state.phoneNumber}
              onChange={this.update('phoneNumber')}
              placeholder="Phonenumber"
              id="sign-inputs"
            />
            <br />
            <input type="text"
              value={this.state.address}
              onChange={this.update('address')}
              placeholder="Address"
              id="sign-inputs"
            />
            <br />
            <div id='owner-select' >
              <h4 id='owner-title'>Are you a business owner?</h4>
              <select id='owner-selection' onChange={this.update('businessOwner')}>
                <option>Select</option>
                <option value={false} >No</option>
                <option value={true} >Yes</option>
              </select>
            </div>
            <br />
            <input type="submit" value="Submit" id="sign-submit" />
            {this.renderErrors()}
          </div>
          <div id="sign-side-photo1">
            <button value='' onClick={this.update('switch')} id='back-button'>Back</button>
          </div>
        </form>
      </div>);
  }
}

export default withRouter(SignupForm);

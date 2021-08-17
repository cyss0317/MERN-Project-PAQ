import React from 'react';
import { withRouter } from 'react-router-dom';
import singupCss from './signup.css'

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
      switch: ''
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
    return this.state.switch === '' ?
    (
       <div className="signup-form-container">
        <form onSubmit={this.update('switch')} className="signup-form">
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
            <input type="submit" value="Continue" id="sign-submit"/>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    )
    :
      (<div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div id="sign-inner">
            <h1 id="sign-title">Continued</h1>
            <br />
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
              placeholder="Enter your phonenumber"
              id="sign-inputs"
            />
            <br />
            <h4 id='owner-title'>Are you a business owner?</h4>
            <div id="owner-input">
              <div id="owner-true">
                <input type="checkbox"
                  value={true}
                  onChange={this.update('businessOwner')}
                  id='true'
                />
                <label htmlFor='true'> True </label>                
              </div>
              <div id='owner-false'>
                <input type="checkbox"
                  value={false}
                  onChange={this.update('businessOwner')}
                  id='false'
                />
                <label htmlFor='false'> False </label>                
              </div>
            </div>
            <br />
            <input type="submit" value="Submit" id="sign-submit" />
            {this.renderErrors()}
          </div>
          <div id="sign-side-photo1" />
        </form>
      </div>);
  }
}

export default withRouter(SignupForm);
// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import singupCss from './signup.css'

// class SignupForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       name: '',
//       password: '',
//       password2: '',
//       phoneNumber: '',
//       businessOwner: null,
//       errors: {},
//       switch: ''
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.clearedErrors = false;
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.signedIn === true) {
//       this.props.history.push('/login');
//     }

//     this.setState({errors: nextProps.errors})
//   }

//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     let user = {
//       email: this.state.email,
//       name: this.state.name,
//       password: this.state.password,
//       password2: this.state.password2,
//       phoneNumber: this.state.phoneNumber,
//       businessOwner: this.state.businessOwner,
//     };

//     this.props.signup(user, this.props.history); 
//   }

//   renderErrors() {
//     return(
//       <ul>
//         {Object.keys(this.state.errors).map((error, i) => (
//           <li key={`error-${i}`}>
//             {this.state.errors[error]}
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   render() {
//     return (
//       <div className="signup-form-container">
//         <form onSubmit={this.handleSubmit} className="signup-form">
//           <div id="sign-side-photo">
//           </div>
//           <div id="sign-inner">
//             <br/>
//               <input type="email"
//                 value={this.state.email}
//                 onChange={this.update('email')}
//                 placeholder="Email"
//                 id="sign-inputs"
//                 />
//             <br/>
//               <input type="text"
//                 value={this.state.name}
//                 onChange={this.update('name')}
//                 placeholder="Name"
//                 id="sign-inputs"
//                 />
//             <br/>
//               <input type="password"
//                 value={this.state.password}
//                 onChange={this.update('password')}
//                 placeholder="Password"
//                 id="sign-inputs"
//                 />
//             <br/>
//               <input type="password"
//                 value={this.state.password2}
//                 onChange={this.update('password2')}
//                 placeholder="Confirm Password"
//                 id="sign-inputs"
//                 />
//             <br/>
//               <input type="text"
//                 value={this.state.phoneNumber}
//                 onChange={this.update('phoneNumber')}
//                 placeholder="Enter your phonenumber"
//                 id="sign-inputs"
//               />
//             <br/>
//               <input type="radio"
//                 value={true}
//                 onChange={this.update('businessOwner')}
//                 id='true'
//               />
//               <label for='true'> True </label>
//             <br/>
//             <br/>
//               <input type="radio"
//                 value={false}
//                 onChange={this.update('businessOwner')}
//                 id='false'
//               />
//               <label for='false'> False </label>
//             <br/>
//             <input type="submit" value="Submit" id="sign-submit"/>
//             {this.renderErrors()}
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default withRouter(SignupForm);

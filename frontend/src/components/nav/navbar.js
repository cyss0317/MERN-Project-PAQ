import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import navbarCss from './nav.css'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.logoutUser = this.logoutUser.bind(this)

  }

  logoutUser() {
      // e.preventDefault();
      this.props.logout()
      this.props.history.push('/') 
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (

            <div> 
                <button onClick={ (e) => this.logoutUser()}>Logout</button>

              <div id='log-div'>
                  <Link to={`/users/${this.props.user._id}`}> Settings </Link>
                  <button onClick={this.logoutUser} id='logout-button'>Logout</button>
              </div>
            </div>
        );
      } else{
        return (
            <div id='auth-div'>
                <Link to={'/signup'} id='auth-li'>Signup</Link>
                <br />
                <p id='auth-li'>Or</p>
                <br />
                <Link to={'/login'} id='auth-li'>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div id='nav'>
          <div>
            <Link to={'/'}><img src="https://raw.githubusercontent.com/jangcla/Class-Work-Projects/main/week14/w14d3/paq%20images%20copy/Screen%20Shot%202021-08-18%20at%2010.39.10%20AM.png" id="logo-photo"/></Link>
          </div>
          
            { this.getLinks() }
        </div>
      );
  }
}

export default withRouter(NavBar);
import React from 'react';
import { Link } from 'react-router-dom'
import navbarCss from './nav.css'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout(); 
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                {/* <Link to={'/tweets'}>All Tweets</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_tweet'}>Write a Tweet</Link> */}
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
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

export default NavBar;
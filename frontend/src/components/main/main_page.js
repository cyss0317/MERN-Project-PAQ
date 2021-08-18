import React from 'react';
import mainCss from './main.css'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

  render() {
    return (
      <div id="main-div">
        <div id="main-div-contents">
            <div id="home-banner">
                <div id='reserve-now-banner'>
                  <h1 id='banner-quote'>PAQ I<big id='plane-text'>✈︎</big> UP</h1>
                  <Link to='/signup' id="banner-quote1">Reserve Now</Link>
                </div>
            </div>

            <div id="three-div-containers">
              <div id='div1'>
                  <div id='three-div'><h1 div='div-head'>📆  Calendar</h1></div>
              </div>
              
              <div id='div2'>
              <div id='three-div'><h1 div='div-head'>📇  Contact Us</h1></div>
              </div>

              <div id='div3'>
              <div id='three-div'><h1 div='div-head'>👤  Sign Up</h1></div>
              </div>
            </div>

            <div id="about-us">
              <div id='about-description'>
                <p>PAQ it up and we'll send it for you</p>
              </div>
              <img src="https://www.naahq.org/sites/default/files/styles/article_image_large_685x380/public/images/units/carry_package_0.jpg?itok=HUDJMDY6" id="about-us-photo"/>
            </div>

        </div>

        <footer>
          Copyright &copy; 2021 PAQ 
        </footer>
      </div>
    );
  }
}

export default MainPage;
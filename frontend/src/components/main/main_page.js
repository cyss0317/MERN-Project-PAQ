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
                  <div id='three-div'><h1 id='div-head'>📆  Calendar</h1></div>
              </div>
              
              <div id='div2'>
              <div id='three-div'><Link to='/contacts/page' id='div-head'><h1 id="div-head">📇  Contact Us</h1></Link></div>
              </div>

              <div id='div3'>
              <div id='three-div'><Link to="/signup" id="div-head"><h1 id='div-head'>👤  Sign Up</h1></Link></div>
              </div>
            </div>

            <div id="about-us">
              <div id='about-description'>
                <h1>PAQ it up and we'll send it for you</h1>
              <h3>As an International shipping business, operations will be more efficient in the way that business is conducted by implementing the PAQ App.
              </h3>
              <br />
              <h2>Business side</h2>
              <h3>
                On the business side, you will be able to manage all of your weekly shipments to ensure that you can satisfy your clients needs. By allowing your clients to make shipment reservations, you can calculate the available space in your weekly shipments.
              </h3>
              <br />
              <h2>Client side</h2>
              <h3>
                On the client side, you will receive text messages to notify you about upcoming shipments and you will also be able to view the price for your package. The text message notification will also cut down labor for the business side. By making reservations, you can ensure that your package is delivered on time, as long as shipping limits are not exceeded.

                </h3>
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
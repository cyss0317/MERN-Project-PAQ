import React from 'react';
import { Link } from 'react-router-dom';
import dashboardCss from './dashboard.css'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)


  }

  componentDidMount() {
    this.props.fetchUserOrders(this.props.user._id);
    this.props.fetchAllShipments(this.props.user._id);
  }

  render() {
    return this.props.user.businessOwner ?
      (
        <div id='main-dash'>
          <div id='inner-dash'>

            <div id='weather'>
              <div id='min-weather'>
                <a target="_blank" href="https://www.booked.net/weather/minneapolis-1205">
                  <img src="https://w.bookcdn.com/weather/picture/7_1205_1_1_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=32315"
                    alt="booked.net" />
                </a>
              </div>

              <div id='mex-weather'>
                <a target="_blank" href="https://www.booked.net/weather/mexico-city-18199">
                  <img src="https://w.bookcdn.com/weather/picture/7_18199_1_1_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=32315"
                    alt="booked.net" />
                </a>
              </div>
            </div>

            <div id='action-divs'>

              <div id='msg-div'>
                <div id='inner-li'>
                  <Link to='/notify' id='action-li'>Send a Customer a message</Link>
                  <Link to='/notify/all' id='action-li'>Notify All Clients</Link>
                </div>

              </div>

              <div id='msg-div2'>
                <div id='inner-li2'>
                  <Link to={`/shipments/user/${this.props.user._id}`} id='action-li2'>Shipment Cargos</Link>
                </div>
              </div>

              <div id='msg-div3'>
                <div id='inner-li'>
                  <Link to='/contacts/page' id='action-li3'>Contacts Information</Link>
                </div>
              </div>

            </div>

            <div id='welcome-div1'>
              <div id='user-name-div'>
                <h1 id='w-div-t'>Welcome {this.props.user.name}</h1>
              </div>

              <h2>Current Shipments <p id='paq-num1'>{this.props.total.length}</p></h2>

              <div id='packages-user-history'>
                <div id='pd-div1'>
                  <h3>Pending Shipments</h3>
                  <p id='paq-num'>{this.props.shipping.length}</p>
                </div>

                <div id='pd-div1'>
                  <h3>Shipments Done</h3>
                  <p id='paq-num'>{this.props.shipped.length}</p>
                </div>

              </div>
              <h4>For More Info Click The Shipments Button</h4>

              <img id='owner-plane' src="https://github.com/cyss0317/MERN-Project-PAQ/blob/finalCss/frontend/src/css_images/ownerPlane.jpeg?raw=true"/>
            </div>

          </div>
        </div>
      )
      :
      (
        <div id='main-dash'>
          <div id='inner-dash'>

            <div id='weather'>
              <div id='min-weather'>
                <a target="_blank" href="https://www.booked.net/weather/minneapolis-1205">
                  <img src="https://w.bookcdn.com/weather/picture/7_1205_1_1_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=32315"
                    alt="booked.net" />
                </a>
              </div>

              <div id='mex-weather'>
                <a target="_blank" href="https://www.booked.net/weather/mexico-city-18199">
                  <img src="https://w.bookcdn.com/weather/picture/7_18199_1_1_137AE9_160_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=32315"
                    alt="booked.net" />
                </a>
              </div>
            </div>

            <div id='action-divs'>

              <div id='user-div1'>
                <div id='inner-li'>
                  <Link to={`/orders`} id='user-li1'>Create a New Order</Link>
                </div>

              </div>

              <div id='user-div2'>
                <div id='user-li2'>
                  <Link to={`/orders/user/${this.props.user._id}`} id='u-action-li2'>User Order</Link>
                </div>
              </div>

              <div id='msg-div3'>
                <div id='inner-li'>
                  <Link to='/contacts/page' id='action-li3'>Contacts Information</Link>
                </div>
              </div>

            </div >

            <div id='welcome-div'>
              <div id='user-name-div'>
                <h1 id='w-div-t'>Welcome {this.props.user.name}</h1>
              </div>

              <div id='user-info-dash'>


                <h2 id='dash-address'>Current address</h2>
                <h3>{this.props.user.address}</h3>

                <br />

                <h2>User Contact Info</h2>
                <h3>{this.props.user.email}</h3>
                <h3>{this.props.user.phoneNumber}</h3>

              </div>



              <div id='packages-user-history'>

                <div id='pd-div'>
                  <h3>Pending Orders</h3>
                  <p id='paq-num'>{this.props.pending.length}</p>
                </div>

                <div id='pd-div'>
                  <h3>Delivered Orders</h3>
                  <p id='paq-num'>{this.props.done.length}</p>
                </div>

              </div>

            </div>
          </div>
        </div>
      )
  }
}

export default Dashboard;
import React from 'react'; 
import { Link } from 'react-router-dom'; 
import dashboardCss from './dashboard.css'

class Dashboard extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    return(
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
                <Link to='/' id='action-li2'>Shipment Cargos</Link>
              </div>
          </div>

          <div id='msg-div3'>
              <div id='inner-li'>
                <Link to='/contacts/page' id='action-li3'>Contacts Information</Link>
              </div>
          </div>

        </div >
          <Link to={`/orders/user/${this.props.user._id}`}>User Order</Link>
        </div>
      </div>
    )
  }
}

export default Dashboard; 
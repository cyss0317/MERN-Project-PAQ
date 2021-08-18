import React from 'react'; 
import { Link } from 'react-router-dom'; 

class Dashboard extends React.Component{

  constructor(props){
    super(props)

  }
  

  render(){
    return(
      <div>
        <Link to='/notify'>Send a Customer a message</Link>
        <Link to='/notify/all'>Notify All Clients</Link>
      </div>
    )
  }
}

export default Dashboard; 
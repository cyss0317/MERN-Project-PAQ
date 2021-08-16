import React from 'react'

const accountSid = require("./config/keys").accountSid;
const authToken = require("./config/keys").authToken;
const client = require('twilio')(accountSid, authToken);

class Messages extends React.Component {
  


  sendMessage(){
      client.messages
          .create({
               body: 'Your shipment is ready for pickup!',
               from: '+12546553803',
               to: '+16124231028'
         }).then(message => console.log(message.sid));
  }
  

  render(){
      <div>
        <button onClick={this.sendMessage}> Notify clients</button>
      </div>
  }


}


export default Messages; 
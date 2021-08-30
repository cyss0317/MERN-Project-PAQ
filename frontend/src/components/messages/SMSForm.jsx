import React from 'react'; 
import SmsCss from './sms.css'
import { Link } from 'react-router-dom'

class SMSForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.message
    this.update = this.update.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  update(field){

    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  renderErrors(){
    if(!this.props.errors){
      return null
    }else{
      return(
          <ul className='errors'>
              {Object.keys(this.props.errors).map((error, i) => (
                <li key={`error-${i}`}>
                  {this.props.errors[error]}
                </li>
              ))}
          </ul>
        ); 
    }
    
  }
  handleSubmit(e){
    e.preventDefault();
    const message = Object.assign({}, this.state)
    this.props.sendMessage(message)
    .then(this.setState(
     {
        to: '',
        body: ''
      },
    ))
  }


  render(){
    return(
      <div className='sms-container'>
        <div style={{color: 'red', fontSize: '14px', fontWeight: '200'}}>
          ***Disclaimer, due to Twilio services your phone number must be verified before 
          being able to send out a message, I encourage you to use the mass text funtion to contact 
          the developers. Best, the PAQ team***
        </div>
        
        <form onSubmit={this.handleSubmit} id="sms-form-container">
          {/* <label htmlFor='to'> To:</label> */}
          <h1 id='text-form-title'>Notify Customer</h1>
          <div className='sms-form' >
            <input type='tel'
                    id='to'
                    name='to'
                    value={this.state.to}
                    onChange={this.update('to')}
                    placeholder='612-555-5555'
                    className='sms-input'/>
          {/* <label htmlFor='body'>Body:</label> */}
            <textarea name='body'
                      id='body'
                      value={this.state.body}
                      onChange={this.update('body')}
                      placeholder='Enter your message here...'/> 
          </div>
          {this.renderErrors()}
          <button type='submit' className='sms-button'>Send Message</button>
          <br />
          <Link to='/notify/all' id="switch-form">Notify All</Link>
        </form>
      </div>
    )
  }
  
  
}

export default SMSForm; 
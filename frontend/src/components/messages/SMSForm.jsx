import React from 'react'; 
import SmsCss from './sms.css'

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
    console.log(this.props)
    return(
      <div className='sms-container'>
        <form onSubmit={this.handleSubmit} >
          {/* <label htmlFor='to'> To:</label> */}
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
        </form>
      </div>
    )
  }
  
  
}

export default SMSForm; 
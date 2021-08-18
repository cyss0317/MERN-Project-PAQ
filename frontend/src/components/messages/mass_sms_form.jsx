import React from 'react'; 
import SmsCss from './sms.css'
class MassSMSForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.message
    this.update = this.update.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
    // this.phoneNumbers = this.phoneNumbers.bind(this); 
   
  }

  update(field){

    return e => this.setState({
      [field]: e.currentTarget.value,
    })
  }

  // phoneNumbers(){
    
  //   this.setState({
  //     numbers: numbers 
  //   })
  // }

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
    
    const messages = Object.assign({}, this.state)
    this.props.massText(messages)
      .then(this.setState({
        body: ''
      }))
  }


  render(){
    console.log(this.props)
    return(
      <div className='sms-container'>
        <form onSubmit={this.handleSubmit}>
        
          <div className='sms-form'>
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

export default MassSMSForm; 


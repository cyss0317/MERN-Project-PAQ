import React from 'react'; 

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
              {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                  {error}
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
  }


  render(){
    console.log(this.props)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <label htmlFor='body'>Body:</label>
            <textarea name='body'
                      id='body'
                      value={this.state.body}
                      onChange={this.update('body')}
                      placeholder='Enter your message here...'/> 
          <button type='submit'>Send Message</button>
        </form>
      </div>
    )
  }
  
  
}

export default MassSMSForm; 


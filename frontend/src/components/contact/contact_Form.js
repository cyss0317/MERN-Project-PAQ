import React from "react";

class ContactForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.email; 
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.update = this.update.bind(this);
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
    const email = Object.assign({}, this.state)
    this.props.sendEmail(email)
    .then(this.setState(
     {
      name: '',
      message: '',
      email: '',
      },
    ))
  }
  
    
 render(){
  return (
     <form onSubmit={this.handleSubmit}>
       <div>
         <label htmlFor="name">Name:</label>
         <input type="text" value={this.state.name} 
                 onChange={this.update('name')}/>
       </div>
       <div>
         <label htmlFor="email">Email:</label>
         <input type="email" 
                value={this.state.email} 
                onChange={this.update('email')}/>
       </div>
       <div>
         <label htmlFor="message">Message:</label>
         <textarea value={this.state.message} onChange={this.update('message')} />
       </div>
       <button type="submit">Send Email</button>
     </form>
   );
}
 

}
  

export default ContactForm;
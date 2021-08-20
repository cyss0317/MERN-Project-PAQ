import React from 'react';
import { withRouter } from 'react-router-dom';

class userUpdateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      _id: '',
      phoneNumber: '',
      address: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps.user)
    console.log(this.props.user)
    if(!prevProps.user && this.props.user){
      console.log('HEy its eorking')
      this.setState(
        {
        _id: this.props.user._id,
        phoneNumber: this.props.user.phoneNumber,
        address: this.props.user.address,
        email: this.props.user.email 
      }
      ) 
      // this.forceUpdate()
    }
  }
  
  
  componentDidMount(){
    this.props.fetchUser()
      // .then(() => {
      //   console.log(this.props) 
      //   this.state = {
      //   id: this.props.user._id,
      //   phoneNumber: this.props.user.phoneNumber,
      //   address: this.props.user.address,
      //   email: this.props.user.email }
      // } )

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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

  handleSubmit(e) {
    e.preventDefault();
     const user = Object.assign({}, this.state, )
    this.props.updateUser(user).then(this.setState({

    })) 
  }
  
  render(){
    console.log(this.state)
    if(!this.state._id) return null; 
    
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='email'
                 value={this.state.email}
                 onChange={this.update('email')}/>

          <input type='text'
                 value={this.state.phoneNumber}
                 onChange={this.update('phoneNumber')}/>

          <input type='text'
                 value={this.state.address}
                 onChange={this.update('address')}/>
      
          {this.renderErrors()}
       <input type='submit' value="Update Settings"/>
        </form>
      </div>
    )

  }
  
}

export default withRouter(userUpdateForm); 
 
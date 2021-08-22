import React from 'react';
import { withRouter } from 'react-router-dom';
import updateCss from "./update.css"

class userUpdateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      _id: '',
      phoneNumber: '',
      address: '',
      email: '',
      businessOwner: false

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
        email: this.props.user.email,
        businessOwner: true 
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
      <div id='update-div'>
        <form id="update-forms" onSubmit={this.handleSubmit}>
          <div id="update-input">

              <div id='update-email'>
                <p id='update-titles'>Email</p>
                <input type='email'
                      value={this.state.email}
                      onChange={this.update('email')}
                      id='update-e-input'/>
              </div>

              <div id='update-number'>
                <p id='update-titles'>Phone number </p>
                    <input type='text'
                          value={this.state.phoneNumber}
                          onChange={this.update('phoneNumber')}
                          id='update-n-input'/>
               
              </div>

              <div id='update-address'>
                <p id='update-titles'>Address </p>
                    <input type='text'
                            value={this.state.address}
                            onChange={this.update('address')}
                            id='update-a-input'/>

              </div>

        </div>
          {/* <input type='text'
            value={this.state.busienssOwner}
            onChange={this.update('busienssOwner')} /> */}

          <div id='update-submit'>
            <input id="update-button"type='submit' value="Update Settings"/>            
            {this.renderErrors()}
          </div>

        </form>
      </div>
    )

  }
  
}

export default withRouter(userUpdateForm); 
 
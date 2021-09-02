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

    if(!prevProps.user && this.props.user){

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
    if (window.localStorage) {
      if (!localStorage.getItem("firstLoad")) {
        localStorage["firstLoad"] = true;
        window.location.reload();
      }
      else localStorage.removeItem("firstLoad");
    }
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
            <div id='update-sum'>
              <p id='select-category'>Select the Category to Edit</p>
              <small>Once you have edited the category please press the "Update Settings" button to implment changes</small>              
            </div>

            <div id='up-button'>
              <input id="update-button"type='submit' value="Update Settings"/> 
              <br />
            </div>

            {this.renderErrors()}
              <small>User information can always be changed at any time</small>  
          </div>

        </form>
      </div>
    )

  }
  
}

export default withRouter(userUpdateForm); 
 
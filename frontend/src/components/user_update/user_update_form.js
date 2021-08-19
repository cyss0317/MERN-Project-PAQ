import React from 'react';
import { withRouter } from 'react-router-dom';

class userUpdateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  componentDidMount(){
    this.props.fetchUser()
  }

  handleSubmit(){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.updateUser(user);
  }
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
      
          <button type='submit'> Update User Settings </button>
        </form>
      </div>
    )

  }
  
}

export default withRouter(userUpdateForm); 
 
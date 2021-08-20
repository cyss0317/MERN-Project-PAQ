import { connect } from 'react-redux';
import {updateUser, fetchUser} from '../../actions/users_actions'; 
import userUpdateForm from './user_update_form';




const mSTP = (state, ownProps) => {

 return{
   user: state.users[ownProps.match.params._id],
   errors: state.errors.user
 } 

}

const mDTP = (dispatch, ownProps) => ({
  updateUser: (user) => dispatch(updateUser(user)),
  fetchUser: () => dispatch(fetchUser(ownProps.match.params._id))
})

export default connect(mSTP, mDTP)(userUpdateForm); 
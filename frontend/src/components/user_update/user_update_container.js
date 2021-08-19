import { connect } from 'react-dom';
import {updateSettings, fetchUser} from '../../actions/users_actions'; 
import userUpdateForm from './user_update_form';




const mSTP = ({users}, ownProps) => ({
  user: users[ownProps.match.paramsId]
})

const mDTP = dispatch => ({
  updateUser: (user) => dispatch(updateSettings(user)),
  fetchUser: () => dispatch(fetchUser(ownProps.match.paramsId))
})

export default connect(mSTP, mDTP)(userUpdateForm); 
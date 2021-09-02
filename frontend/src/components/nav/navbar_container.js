import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = ({state, session, history}) => ({
  loggedIn: session.isAuthenticated,
  history: history,
  user: session.user,
  currentUser: state
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps,mDTP)(NavBar);
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/message_actions'
import SMSForm from './SMSForm'; 


const mSTP = ({errors }) =>({
  errors: errors.messages,
  message: {
      to: '',
      body: ''
    },
});

const mDTP = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message))
})

export default connect(mSTP, mDTP)(SMSForm); 
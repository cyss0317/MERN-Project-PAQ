import { connect } from 'react-redux';
import { massText } from '../../actions/message_actions';
import MassSMSForm from './mass_sms_form';  

const mSTP = ({errors}) =>{
  const numbers = ['8315952562','6124231028', '2544494325', '9258267730' ]
  return {
    errors: errors.messages,
  message: {
      numbers: numbers,
      body: ''
    },
  }
  
};

const mDTP = dispatch => {

 return { massText: messages => dispatch(massText(messages))}
}
 


export default connect(mSTP, mDTP)(MassSMSForm); 
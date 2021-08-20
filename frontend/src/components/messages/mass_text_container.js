import { connect } from 'react-redux';
import { massText } from '../../actions/message_actions';
import MassSMSForm from './mass_sms_form';  

//assuming we have clients as a slice of state then we can deconstruct it
const mSTP = ({errors}) =>{
  const numbers = ['8315952562','6124231028', '2544494325', '9258267730' ]
  return {
    errors: errors.messages,
  message: {
      numbers: numbers,
      body: ''
    },
  // clients: Object.values(client.phoneNumbers)
  }
  
};

const mDTP = dispatch => {

 return { massText: messages => dispatch(massText(messages))}
}
 


export default connect(mSTP, mDTP)(MassSMSForm); 
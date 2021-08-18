import { connect } from 'react-redux';
import { sendEmail } from '../../actions/contact_actions';
import ContactForm from './contact_Form'

const mSTP = ({errors}) => ({
  errors: errors.contact,
  email: {
    name: '',
    message: '',
    email: '',
  }

})

const mDTP = dispatch => ({
  sendEmail: email => dispatch(sendEmail(email))
})

export default connect(mSTP, mDTP)(ContactForm)
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from "react-router"
import NavBarContainer from './nav/navbar_container';
import MessageContainer from './messages/sms_container';
import MassTextContainer from './messages/mass_text_container';
import ContactFormContainer from './contact/contact_form_container'

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ShipmentContainer from './shipments/shipment_container'

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path='/notify' component={MessageContainer} />
        <ProtectedRoute exact path='/notify/all' component={MassTextContainer} />
        <Route exact path='/shipments/user/:userId' component={ShipmentContainer} />
        <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import { Route } from "react-router"
import NavBarContainer from './nav/navbar_container';
import MessageContainer from './messages/sms_container';
import MassTextContainer from './messages/mass_text_container';
import OrderContainer from './orders/order_container';
import EditOrderContainer from './orders/edit_order_container'
import UserIndexContainer from './orders/user_index_container'
import ContactFormContainer from './contact/contact_form_container';

import DashboardContainer from './dashboard/dashboard_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ShipmentContainer from './shipments/shipment_container'
import ContactsPage from './contact_info/contacts_page';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path='/contacts/page' component={ContactsPage} />
        <ProtectedRoute exact path='/notify' component={MessageContainer} />
        <ProtectedRoute exact path='/notify/all' component={MassTextContainer} />
        <ProtectedRoute exact path='/order/update' component={EditOrderContainer} />
        <ProtectedRoute exact path='/orders' component={OrderContainer} />
        <ProtectedRoute exact path='/orders/user' component={UserIndexContainer} />
        <Route exact path='/shipments/user/:userId' component={ShipmentContainer} />
        <Route exact path='/dashboard' component={DashboardContainer}/>
        <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
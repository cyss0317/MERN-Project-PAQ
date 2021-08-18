import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import { jwt } from 'twilio';
import {createNewShipment, fetchShipment, updateShipment, fetchAllShipments} from "./actions/shipment_actions"
import axios from "axios"

document.addEventListener('DOMContentLoaded', () => {
  let store; 
  if(localStorage.jwt_token){
    setAuthToken(localStorage.jwt_token); 
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {session: { isAuthenticated: true, user: decodedUser}};

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000; 

    if( decodedUser.exp < currentTime){
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else{
    store = configureStore({}); 
  }
  const root = document.getElementById('root');

  // testing
    window.store = store;
    window.getState = store.getState;
    window.createNewShipment = createNewShipment;
    window.fetchShipment = fetchShipment;
    window.updateShipment = updateShipment;
    window.fetchAllShipments = fetchAllShipments;

    window.axios = axios
    
  ReactDOM.render(<Root store={store}/>, root); 

}); 
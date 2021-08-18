import { RECEIVE_SHIPMENT,
    CREATE_SHIPMENT,
    EDIT_SHIPMENT,
    RECEIVE_SHIPMENT_ERRORS} from "../actions/shipment_actions";


// takes care of the action and oldstate
const ShipmentReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);

    switch( action.type ){
      case RECEIVE_SHIPMENT:
        return action.shipment  
      case CREATE_SHIPMENT:
        return Object.assign({}, oldState, {[action.shipment.id]: action.shipment})
      case EDIT_SHIPMENT:
        nextState[action.shipment.id]= action.shipment
        return nextState
      default:
          return oldState;
    }
}

export default ShipmentReducer;
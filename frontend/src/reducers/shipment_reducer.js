import { RECEIVE_SHIPMENT,
    CREATE_SHIPMENT,
    EDIT_SHIPMENT,
    RECEIVE_ALL_SHIPMENTS} from "../actions/shipment_actions";


const shipmentReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);

    switch( action.type ){
      case RECEIVE_SHIPMENT:
        return action.shipment  
      case CREATE_SHIPMENT:
        return Object.assign({}, oldState, {[action.shipment.data._id]: action.shipment.data})
      case RECEIVE_ALL_SHIPMENTS:
        let shipments = action.shipments.data
        let newState = { }

        shipments.forEach((shipment) => {
          newState[shipment._id]= shipment
        })

        return newState;
      case EDIT_SHIPMENT:
        nextState[action.shipment.data._id]= action.shipment.data
        return nextState
      default:
          return oldState;
    }
}

export default shipmentReducer;
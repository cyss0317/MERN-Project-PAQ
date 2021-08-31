import { RECEIVE_ORDERS, RECEIVE_ORDER, RECEIVE_USER_ORDERS, RECEIVE_ORDERS_BY_SHIPMENTID, REMOVE_ORDER } from '../actions/order_actions';

const OrdersReducer = (state = {}, action) => {

  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ORDERS:
      return action.orders.data;
      
      case RECEIVE_ORDER:
        return nextState[action.order.data._id] = action.order.data; 
        
        case RECEIVE_USER_ORDERS:
      // console.log("action",action)
      let userOrders = action.orders

      userOrders.forEach((order) => {
        nextState[order._id] = order
      })
      return nextState;

    case RECEIVE_ORDERS_BY_SHIPMENTID:
      let orders = action.orders.data
      let newState= {}
      orders.forEach((order) => {
        newState[order._id] = order
      })
      return newState;

    case REMOVE_ORDER:
      delete nextState[action.orderId];
      return nextState;
      
    default: 
      return state;
  }
}

export default OrdersReducer;
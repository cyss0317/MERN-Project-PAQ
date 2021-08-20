import { RECEIVE_ORDERS, RECEIVE_ORDER, RECEIVE_USER_ORDERS, REMOVE_ORDER } from '../actions/order_actions';

const OrdersReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ORDERS:
     
      return action.orders.data;
    case RECEIVE_ORDER:
      // const newOrder = { [action.order.id]: action.order };
      return nextState[action.order.data._id] = action.order.data; 
    case RECEIVE_USER_ORDERS:
      // const newOrder = { [action.order.id]: action.order };
      // return nextState[action.orders.id] = action.orders
  
      return action.orders;
    case REMOVE_ORDER:
      delete nextState[action.orderId];
      return nextState;
    default: 
      return state;
  }
}

export default OrdersReducer;
import { RECEIVE_ORDERS, RECEIVE_ORDER, RECEIVE_USER_ORDERS, REMOVE_ORDER } from '../actions/order_actions';

const OrdersReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ORDERS:
      return action.orders;
    case RECEIVE_ORDER:
      // const newOrder = { [action.order.id]: action.order };
      return nextState[action.order.id] = action.order
    case RECEIVE_USER_ORDERS:
      // const newOrder = { [action.order.id]: action.order };
      return nextState[action.order.id] = action.order
    case REMOVE_ORDER:
      delete nextState[action.orderId];
      return nextState;
    default:
      return state;
  }
}

export default OrdersReducer;
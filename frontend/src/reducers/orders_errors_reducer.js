import { RECEIVE_ORDER_ERRORS, RECEIVE_ORDER } from '../actions/order_actions';

const _nullErrors = [];

const OrdersErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ORDER_ERRORS:
      return action.errors;
    case RECEIVE_ORDER:
      return _nullErrors;
    default:
      return state;
  }
};

export default OrdersErrorsReducer;
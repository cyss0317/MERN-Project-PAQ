import * as APIUtilOrder from '../util/orders_api_util';

export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ORDER = "RECEIVE_ORDERS";
export const RECEIVE_USER_ORDERS = "RECEIVE_USER_ORDERS";
export const REMOVE_ORDER = "REMOVE_ORDER";


export const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders
})

export const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
})

export const receiveUserOrders = orders => ({
  type: RECEIVE_USER_ORDERS,
  orders
})

export const removeOrder = orderId => ({
  type: REMOVE_ORDER,
  orderId
})

export const fetchUserOrders = id => dispatch => (
  APIUtilOrder.getUserOrders(id)
    .then(userOrders => dispatch(receiveUserOrders(userOrders)))
    .catch(err => console.log(err))
);

export const fetchOrder = id => dispatch => (
  APIUtilOrder.getOrder(id)
    .then(order => dispatch(receiveOrder(order)))
    .catch(err => console.log(err))
);

export const createOrder = order => dispatch => (
  APIUtilOrder.createOrder(order)
    .then(createdOrder => dispatch(receiveOrder(createdOrder)))
    .catch(err => console.log(err))
)

export const deleteOrder = () => dispatch => (
  APIUtilOrder.deleteOrder()
    .then(() => dispatch(removeOrder(orderId)))
)
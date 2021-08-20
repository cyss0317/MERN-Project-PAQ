import * as APIUtilOrder from '../util/orders_api_util';

export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const RECEIVE_USER_ORDERS = "RECEIVE_USER_ORDERS";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const RECEIVE_ORDER_ERRORS = "RECEIVE_ORDER_ERRORS";
export const RECEIVE_ORDERS_BY_SHIPMENTID = "RECEIVE_ORDERS_BY_SHIPMENTID";

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

export const receiveErrors = errors => ({
  type: RECEIVE_ORDER_ERRORS,
  errors
})

export const receiveOrdersByShipmentId = orders => ({
  type: RECEIVE_ORDERS_BY_SHIPMENTID,
  orders
})

export const fetchUserOrders = id => dispatch => (
  APIUtilOrder.getUserOrders(id)
    .then(
      userOrders => {
        console.log(userOrders.data)
        dispatch(receiveUserOrders(userOrders.data))
      },
      errors => dispatch(receiveErrors(errors.response.data))
    )
    // .catch(err => console.log(err))
);

export const fetchOrder = id => dispatch => (
  APIUtilOrder.getOrder(id)
    .then(
      order => dispatch(receiveOrder(order)),
      errors => dispatch(receiveErrors(errors.response.data))
    )
    // .catch(err => console.log(err))
);

export const fetchOrdersByShipmentId = shipmentId => dispatch => (
  APIUtilOrder.receiveOrdersByShipmentId(shipmentId)
    .then(
      orders => dispatch(receiveOrdersByShipmentId(orders)),
      errors => dispatch(receiveErrors(errors.response.data))
    )
  // .catch(err => console.log(err))
);

export const createOrder = order => dispatch => (
  APIUtilOrder.createOrder(order)
    .then(
      createdOrder => dispatch(receiveOrder(createdOrder)),
      errors => dispatch(receiveErrors(errors.response.data))
    )
    // .catch(err => console.log(err))
)

export const deleteOrder = order => dispatch => (
  APIUtilOrder.deleteOrder()
    .then(
      () => dispatch(removeOrder(order.id)),
      errors => dispatch(receiveErrors(errors.response.data))
    )
)

export const updateOrder = order => dispatch => (
  APIUtilOrder.updateOrder()
)
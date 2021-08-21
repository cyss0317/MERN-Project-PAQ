import {connect} from "react-redux";
import ShipmentOrders from "./shipment_orders";
import { fetchOrdersByShipmentId, deleteOrder, createOrder, updateOrder } from "../../actions/order_actions";

const mSTP = (state, ownProps) => ({
    currentUser: state.session.user,
    // shipments: Object.values(state.shipments)[0],
    // shipments: Object.values(state.shipments),
    shipmentId: ownProps.match.params.shipmentId,
    orders: Object.values(state.orders)
})

const mDTP = dispatch => ({
    fetchOrdersByShipmentId: shipmentId => dispatch(fetchOrdersByShipmentId(shipmentId)),
    deleteOrder: order => dispatch(deleteOrder(order)),
    createOrder: order => dispatch(createOrder(order)),
    updateOrder: order => dispatch(updateOrder(order))

})


export default connect(mSTP, mDTP)(ShipmentOrders)
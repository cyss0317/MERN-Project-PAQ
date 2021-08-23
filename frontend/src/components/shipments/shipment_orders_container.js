import {connect} from "react-redux";
import ShipmentOrders from "./shipment_orders";
import { fetchOrdersByShipmentId, deleteOrder, createOrder, updateOrder } from "../../actions/order_actions";
import { updateShipment, fetchShipment } from "../../actions/shipment_actions";

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.user._id,
    // shipments: Object.values(state.shipments)[0],
    shipments: Object.values(state.shipments),
    // shipment: Object.values(state.shipments).findById(ownProps.match.params.shipmentId),
    shipmentId: ownProps.match.params.shipmentId,
    orders: Object.values(state.orders)
})

const mDTP = dispatch => ({
    fetchOrdersByShipmentId: shipmentId => dispatch(fetchOrdersByShipmentId(shipmentId)),
    deleteOrder: order => dispatch(deleteOrder(order)),
    createOrder: order => dispatch(createOrder(order)),
    updateOrder: order => dispatch(updateOrder(order)),
    fetchShipment: shipmentId => dispatch(fetchShipment(shipmentId)),
    updateShipment: shipment => dispatch(updateShipment(shipment))

})


export default connect(mSTP, mDTP)(ShipmentOrders)
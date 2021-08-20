import {connect} from "react-redux";
import ShipmentOrders from "./shipment_orders";
import { fetchOrdersByShipmentId } from "../../actions/order_actions";

const mSTP = (state, ownProps) => ({
    currentUser: state.session.user,
    shipments: Object.values(state.shipments)[0],
    orders: state.orders,
    shipmentId: ownProps.match.params.shipmentId
})

const mDTP = dispatch => ({
    fetchOrdersByShipmentId: shipmentId => dispatch(fetchOrdersByShipmentId(shipmentId))
})


export default connect(mSTP, mDTP)(ShipmentOrders)
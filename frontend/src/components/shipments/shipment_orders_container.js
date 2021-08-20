import {connect} from "react-redux";
import ShipmentOrders from "./shipment_orders";
import { fetchOrdersByShipmentId } from "../../actions/order_actions";

const mSTP = state => ({
    currentUser: state.session.user,
    shipments: Object.values(state.shipments)[0]
})

const mDTP = dispatch => ({
    fetchOrdersByShipmentId: shipmentId => dispatch(fetchOrdersByShipmentId(shipmentId))
})


export default connect(mDTP)(ShipmentOrders)
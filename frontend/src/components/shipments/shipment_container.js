import {connect} from "react-redux";
import ShipmentIndex from "./shipment_index";
import { createNewShipment, fetchShipment, updateShipment, fetchAllShipments } from "../../actions/shipment_actions";
import { fetchOrdersByShipmentId } from "../../actions/order_actions";

const mSTP = (state, ownProps) => ({
    shipments: Object.values(state.shipments),
    currentUser: state.session.user,
    currentUserId: ownProps.match.params.userId
})

const mDTP = dispatch => ({
    createNewShipment: shipment => dispatch(createNewShipment(shipment)),
    fetchShipment: shipmentId => dispatch(fetchShipment(shipmentId)),
    updateShipment: shipment => dispatch(updateShipment(shipment)),
    fetchAllShipments: userId => dispatch(fetchAllShipments(userId)),
    fetchOrdersByShipmentId: shipmentId => dispatch(fetchOrdersByShipmentId(shipmentId))
})

export default connect(mSTP, mDTP)(ShipmentIndex)
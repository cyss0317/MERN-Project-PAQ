import {connect} from "react-redux";
import ShipmentIndex from "./shipment_index";
import { createNewShipment, fetchShipment, updateShipment, fetchAllShipments } from "../../actions/shipment_actions";


const mSTP = (state, ownProps) => ({
    shipments: Object.values(state.shipments)[0],
    currentUser: state.session.user,
    currentUserId: ownProps.match.params.userId
    // need to think about how to automatically add orders 
})

const mDTP = dispatch => ({
    createNewShipment: shipment => dispatch(createNewShipment(shipment)),
    fetchShipment: shipmentId => dispatch(fetchShipment(shipmentId)),
    updateShipment: shipment => dispatch(updateShipment(shipment)),
    fetchAllShipments: userId => dispatch(fetchAllShipments(userId))
    // need order's thunk actions 
})

export default connect(mSTP, mDTP)(ShipmentIndex)
import {connect} from "react-redux";
import ShipmentIndex from "./shipment_index";
import { createNewShipment, fetchShipment, updateShipment, fetchAllShipments } from "../../actions/shipment_actions";


const mSTP = (state, ownProps) => ({
    shipments: state.shipment
})

const mDTP = dispatch => ({
    createNewShipment: shipment => dispatch(createNewShipment(shipment)),
    fetchShipment: shipmentId => dispatch(fetchShipment(shipmentId)),
    updateShipment: shipment => dispatch(updateShipment(shipment)),
    fetchAllShipments: userId => disptach(fetchAllShipments(userId))
})

export default connect(mSTP, mDTP)(ShipmentIndex)
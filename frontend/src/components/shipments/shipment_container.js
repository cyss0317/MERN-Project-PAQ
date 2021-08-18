import {connect} from "react-redux";
import ShipmentIndex from "./shipment_index";
import { createNewShipment, fetchShipment, updateShipment } from "../../actions/shipment_actions";


const mSTP = (state, ownProps) => ({
    shipment: state.shipment
})

const mDTP = dispatch => ({
    createNewShipment: shipment => dispatch(createNewShipment(shipment)),
    fetchShipment: shipmentId => dispatch(fetchShipment(shipmentId)),
    updateShipment: shipment => dispatch(updateShipment(shipment))
})

export default connect(mSTP, mDTP)(ShipmentIndex)
import * as shipmentAPIUtil from "../util/shipment_api_util"
export const RECEIVE_SHIPMENT = "RECEIVE_SHIPMENT"
export const RECEIVE_ALL_SHIPMENTS = "RECEIVE_ALL_SHIPMENTS"
export const CREATE_SHIPMENT = 'CREATE_SHIPMENT';
export const EDIT_SHIPMENT = 'EDIT_SHIPMENT';
export const RECEIVE_SHIPMENT_ERRORS = 'RECEIVE_SHIPMENT_ERRORS'; 

export const createShipment = (shipment) => ({
  type: CREATE_SHIPMENT,
  shipment
});

export const receiveShipment = (shipment) => ({
  type: RECEIVE_SHIPMENT,
  shipment
});

export const receiveAllShipments = (shipments) => ({
  type: RECEIVE_ALL_SHIPMENTS,
  shipments
});


export const editShipment = shipment => ({
  type: EDIT_SHIPMENT,
  shipment
})

export const receiveErrors = errors => ({
  type: RECEIVE_SHIPMENT_ERRORS,
  errors 
})


export const createNewShipment = shipment => dispatch => 
  shipmentAPIUtil.createShipment(shipment)
    .then( shipment => dispatch(createShipment(shipment)),
      err => dispatch(receiveErrors(err.responseJSON))
    )

export const fetchShipment = shipmentId => dispatch =>
  shipmentAPIUtil.receiveShipment(shipmentId)
    .then( shipment => dispatch(editShipment(shipment)),
      err => dispatch(receiveErrors(err.responseJSON))
    )

export const fetchAllShipments = userId => dispatch =>
  shipmentAPIUtil.receiveAllShipments(userId)
    .then(shipments => dispatch(receiveAllShipments(shipments)),
      err => dispatch(receiveErrors(err.responseJSON))
    )


export const updateShipment = shipment => dispatch =>
  shipmentAPIUtil.editShipment(shipment)
    .then( updatedShipment => dispatch(editShipment(updatedShipment)),
      err => dispatch(receiveErrors(err.responseJSON))
    )



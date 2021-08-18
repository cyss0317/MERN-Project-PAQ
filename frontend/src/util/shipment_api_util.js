import axios from 'axios';


export const createShipment = (shipment) => {
    return axios.post('/api/shipments/create', shipment)
}

export const receiveShipment = (shipmentId) => {
    return axios.get(`/api/shipments/${shipmentId}`)
}

export const editShipment = shipment => {
    return axios.patch(`/api/shipments/${shipment.id}`,
    { departure: shipment.departure, 
      weight: shipment.weight,
      full: shipment.full })
}

// get, post, patch
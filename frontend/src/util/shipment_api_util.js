import axios from 'axios';


export const createShipment = (shipment) => {
    return axios.post('/api/shipments/create', shipment)
}

export const receiveShipment = (shipmentId) => {
    return axios.get(`/api/shipments/${shipmentId}`)
}

export const editShipment = shipment => {
    return axios.patch(`/api/shipments/${shipment._id}`,
    shipment
    //  {
    //   departure: shipment.departure, 
    //   weight: shipment.weight,
    //   full: shipment.full,
    //   delivered: shipment.delivered,
    //   order: shipment.order
    //  }
      )
}

export const receiveAllShipments = (userId) => {
    return axios.get(`/api/shipments/user/${userId}`)
}

export const shipmentsByDeliveryStatus = (delivered) => {
   return axios.get(`/api/shipments/allShipments/${delivered}`)
}





// get, post, patch
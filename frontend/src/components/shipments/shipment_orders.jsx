import React from "react";
import { fetchShipment, updateShipment } from "../../actions/shipment_actions";
import OrderShow from './orders_show'

class ShipmentOrders extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: "",
            weight: "",
            receiverName: "",
            description: "",
            delivered: false,
            businessOwnerId: this.props.currentUserId,
            shipmentId: this.props.shipmentId
        }


        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchOrdersByShipmentId(this.props.shipmentId)
        this.props.fetchAllShipments(this.props.currentUserId)
    }



    onChangeHandler(field, e) {
        if (field === "weight") {
            this.setState({ price: `${Math.round(((e.currentTarget.value * 3.0) * 100) / 100).toFixed(2)}` })
        }
        this.setState({ [field]: e.currentTarget.value })

    }
    expandFunction(currentFullStatus, currentDeliveredStatus, e) {
        var x = document.getElementById("create-shipment");
        if ( currentFullStatus === true ) {
            alert("It's already full, you can't add more orders")
            return;
        } else if ( currentDeliveredStatus === true){
            alert("This shipment has been delivered, you can't add more orders")
            return;
        }
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        let oldShipment = this.props.shipments[this.props.shipmentId];
        let fullOrNot = false;
        let newWeight = oldShipment.weight - this.state.weight;

        if (this.state.weight === 0 || this.state.receiverName.length === 0 || this.state.description.length === 0) {
            alert("please fill out every inputs")
            return;
        } else if (newWeight > 0.05) {
            this.props.createOrder(this.state)
                .then(order => this.props.updateShipment({
                    _id: this.props.shipmentId,
                    departure: oldShipment.departure,
                    weight: newWeight,
                    full: false,
                    delivered: false,
                }))
                .then(shipment => this.props.fetchOrdersByShipmentId(this.state.shipmentId))
                .then(this.setState({ price: "", weight: "", recieverName: "", description: "", receiverName: "" }))
        }
        else if (newWeight === 0) {
            this.props.createOrder(this.state)
                .then(order => this.props.updateShipment({
                    _id: this.props.shipmentId,
                    departure: oldShipment.departure,
                    weight: newWeight,
                    full: true,
                    delivered: false,
                }))
                .then(shipment => this.props.fetchOrdersByShipmentId(this.state.shipmentId))
                .then(this.setState({ price: "", weight: "", recieverName: "", description: "", receiverName: "" }))
        } else {
            alert("Over exceeded weight, please try again")
            return;
        }
    }
    render() {

        if ( !Object.keys(this.props.shipments).length ) return null;
        let currentFullStatus = this.props.shipments[this.props.shipmentId].full
        let currentDeliveredStatus = this.props.shipments[this.props.shipmentId].delivered
        const { currentUser, shipments, orders } = this.props;



        if (orders.length !== 0) {

            return (
                <div id="main-container">
                    <div id='table-main'>
                        <h1 id='table-title'>List of orders</h1>
                        <h3>Departure Date : {this.props.shipments[this.props.shipmentId].departure}</h3>
                        <h3>Available Shipment Weight : {Number.parseFloat(this.props.shipments[this.props.shipmentId].weight).toFixed(2)} lb</h3>
                        <div id='create-div'>
                            <button id="expand-button" className="all-buttons" onClick={ e => this.expandFunction(currentFullStatus, currentDeliveredStatus, e)}>Create a new order</button>
                            <div id="create-shipment">
                                <form id="create-form" onSubmit={this.handleSubmit} >
                                    <input type="text" value={`$${this.state.price}`} placeholder="price" readOnly id='c-input' />
                                    <input type="text" value={this.state.weight} placeholder="weight(lb)" onChange={(e) => this.onChangeHandler("weight", e)} id='c-input' />
                                    <input type="text" value={this.state.receiverName} placeholder="receiverName" onChange={(e) => this.onChangeHandler("receiverName", e)} id='c-input' />
                                    <input type="text" value={this.state.description} placeholder="description" onChange={(e) => this.onChangeHandler("description", e)} id='c-input' />
                                    <input id="create-button" type="submit" />
                                </form>
                            </div>
                        </div>
                        <div id="table-columns-order">
                            <p id="p3">Order number</p>
                            <p id="p2">Price</p>
                            <p id="p2">Weight(lb)</p>
                            <p id="p2">ReceiverName</p>
                            <p id="p2">Description</p>
                            <p id="p2">delivered</p>


                        </div>


                        <div>
                            {
                                orders.map((order) => (
                                    <div key={order._id}>
                                        <OrderShow updateOrder={this.props.updateOrder} shipment={this.props.shipments[this.props.shipmentId]}  updateShipment={this.props.updateShipment} shipmentId={this.props.shipmentId}
                                            fetchOrdersByShipmentId={this.props.fetchOrdersByShipmentId}
                                            deleteOrder={this.props.deleteOrder} key={order._id} order={order} orderId={order._id} />
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="main-container">


                    <div id='table-main'>
                        <h1 id='table-title'>List of orders</h1>

                        <div id='create-div'>
                            <button id="expand-button" className="all-buttons" onClick={this.expandFunction}>Create a new order</button>
                            <div id="create-shipment">
                                <form id="create-form" onSubmit={this.handleSubmit} >
                                    <input type="text" value={`$${this.state.price}`} placeholder="price" readOnly id='c-input' />
                                    <input type="text" value={this.state.weight} placeholder="weight(lb)" onChange={(e) => this.onChangeHandler("weight", e)} id='c-input' />
                                    <input type="text" value={this.state.receiverName} placeholder="receiverName" onChange={(e) => this.onChangeHandler("receiverName", e)} id='c-input' />
                                    <input type="text" value={this.state.description} placeholder="description" onChange={(e) => this.onChangeHandler("description", e)} id='c-input' />
                                    <input id="create-button" type="submit" />
                                </form>
                            </div>
                        </div>
                        <div id="table-columns-order">
                            <p id="p3">Order number</p>
                            <p id="p2">Price</p>
                            <p id="p2">Weight(lb)</p>
                            <p id="p2">ReceiverName</p>
                            <p id="p2">Description</p>
                            <p id="p2">delivered</p>


                        </div>

                        <h1>You don't have any orders for this shipment</h1>
                    </div>
                </div>
            )
        }
    }
}

export default ShipmentOrders;
import React from "react";
import OrderShow from './orders_show'

class ShipmentOrders extends React.Component{
    constructor(props){
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

    componentDidMount(){
        this.props.fetchOrdersByShipmentId(this.props.shipmentId)
    }


    onChangeHandler(field, e) {
        this.setState({ [field]: e.currentTarget.value });
    }

    expandFunction(e) {
        e.preventDefault();
        var x = document.getElementById("create-shipment");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    handleSubmit(e){
        // const order = Object.assign({}, this.state )
        e.preventDefault();
        
        this.props.createOrder(this.state)
        .then(order => console.log(order))
        .then(order => this.props.fetchOrdersByShipmentId(this.state.shipmentId))
        .then(this.setState({ price: "", weight: "", recieverName: "", description: "", receiverName:"" }))
    }

    render(){
        const { currentUser, shipments, orders } = this.props;
        // if ( orders === undefined ){
        //     return null;
        // }
        
        return (
            <div id="main-container">
                {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> */}


                <div id='table-main'>
                    <h1 id='table-title'>List of orders</h1>
                    <div id='create-div'>
                        <button id="expand-button" className="all-buttons" onClick={this.expandFunction}>Create a new order</button>
                        <div id="create-shipment">
                            <form id="create-form" onSubmit={this.handleSubmit} >
                                <input type="text" value={this.state.price} placeholder="price" onChange={(e) => this.onChangeHandler("price", e)} id='c-input' />
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
                        <p id="p2">Weight</p>
                        <p id="p2">ReceiverName</p>
                        <p id="p2">Description</p>
                        <p id="p2">delivered</p>


                        {/* <Link to="/shipment/create">Create a shipment</Link>
                        <Route path="/shipment/create" component={ShipmentCreate}></Route> */}
                    </div>
                    {/* <div>
                        
                    </div> */}

                    <div>
                        {
                            orders.map((order) => (
                                <div>
                                    <OrderShow updateOrder={this.props.updateOrder} shipmentId={this.props.shipmentId} 
                                    fetchOrdersByShipmentId={this.props.fetchOrdersByShipmentId}
                                    deleteOrder={this.props.deleteOrder} key={order._id} order={order} orderId={order._id} />
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ShipmentOrders;
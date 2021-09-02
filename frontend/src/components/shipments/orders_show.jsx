import React from "react";
import { Link, withRouter } from "react-router-dom";
import shipmentCSS from './shipment.css';

class OrderShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.order._id,
            price: this.props.order.price,
            weight: Number.parseFloat(this.props.order.weight).toFixed(2),
            receiverName: this.props.order.receiverName,
            description: this.props.order.description,
            delivered: this.props.order.delivered,
            businessOwnerId: this.props.currentUserId,
            shipmentId: this.props.shipmentId
        }
        this.onClickSubmit = this.onClickSubmit.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
    }

    deleteHandler(e){
        e.preventDefault();
        let shipment = this.props.shipment;
        let fullOrNot = false;
        let newWeight = shipment.weight + this.props.order.weight;
        const answer = window.confirm('Are you sure you want to delete this order from the database?')
        if (answer ) {
            let newShipment = Object.assign({}, shipment, {full: fullOrNot, weight: newWeight})
            this.props.updateShipment(newShipment)
            this.props.deleteOrder(this.props.orderId);
        } else {
            return;
        }
    }

    onClickSubmit(e) {

        e.preventDefault();
        const answer = window.confirm('Are you sure you want to confirm this changes to this order?')
        if (answer) {
            this.props.updateOrder(this.state)
            .then(order => this.props.fetchOrdersByShipmentId(this.props.shipmentId))
        } else {
            return;
        }
    }


    onChangeHandler(field, e) {
        if (field === "weight"){
            this.setState({ price: `${Math.round(((e.currentTarget.value * 3.0) * 100 ) / 100).toFixed(2)}`})
        }
        this.setState({ [field]: e.currentTarget.value })
    }
    render() {
        if (this.state.delivered === true) {
            return (
                <div  id="edit-container">
                    <form onSubmit={this.onClickSubmit} id="info-container">
                        <input id="not-delivered" type='text' readOnly value={this.state.id} />
                        <input id="not-delivered" type='text' readOnly value={this.state.price} />
                        <input id="not-delivered" type='text' readOnly value={`${this.state.weight}`} />
                        <input id="not-delivered" type='text' readOnly value={this.state.receiverName} />
                        <input id="not-delivered" type='text' readOnly value={this.state.description} />
                        <select align="center" style={{ color: this.state.delivered === true ? "green" : "red" }} defaultValue={this.state.delivered} onChange={(e) => this.onChangeHandler("delivered", e)} id="not-deliveredR">
                            <option align="center" value="true" >DELIVERED</option>
                            <option align="center" value="false" >NOT DELIVERED</option>
                        </select>
    
                    </form>




                </div>
            )
        } else {
            return (
                <div  align="center" id="edit-container">
                    <form align="center" onSubmit={this.onClickSubmit} id="not-delivered-info-container">
                        <input id="not-delivered" readOnly type="text" value={this.state.id} />
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("price", e)} value={this.state.price} />
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("weight", e)} value={this.state.weight}/>
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("receiverName", e)} value={this.state.receiverName} />
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("description", e)} value={this.state.description} />
                        <select align="center" style={{ color: this.state.delivered === true ? "green" : "red" }} defaultValue={this.state.delivered} onChange={(e) => this.onChangeHandler("delivered", e)} id="not-deliveredR">
                            <option align="center" value="true" >DELIVERED</option>
                            <option align="center" value="false" >NOT DELIVERED</option>
                        </select>
                        <input className="all-buttons" id="submit-buttons" type="submit" value="Submit changes" />
                        <button  onClick={this.deleteHandler} >Delete</button>
                    </form>


                </div>
            )
        }

    }
}

export default OrderShow;
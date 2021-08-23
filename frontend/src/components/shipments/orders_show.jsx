import React from "react";
import { Link, withRouter } from "react-router-dom";
import shipmentCSS from './shipment.css';

class OrderShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.order._id,
            price: this.props.order.price,
            weight: this.props.order.weight,
            receiverName: this.props.order.receiverName,
            description: this.props.order.description,
            delivered: this.props.order.delivered,
            businessOwnerId: this.props.currentUserId,
            shipmentId: this.props.shipmentId
        }

        // this.onClickSubmit = this.props.onClickSubmit.bind(this)
        this.onClickSubmit = this.onClickSubmit.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
    }

    deleteHandler(e){
        e.preventDefault();
        const answer = window.confirm('Are you sure you want to delete this order from the database?')
        if (answer) {
            // Save it!
            console.log('Deleted the order successfully');
            this.props.deleteOrder(this.props.orderId);
            // this.props.fetchOrdersByShipmentId(this.props.shipmentId);
        } else {
            // Do nothing!
            console.log('');
        }
        // this.updateOrder = this.props.updateOrder.bind(this)
    }

    onClickSubmit(e) {

        e.preventDefault();
        const answer = window.confirm('Are you sure you want to confirm this changes to this order?')
        if (answer) {
            // Save it!
            console.log('Successfully edited');
            this.props.updateOrder(this.state)
            .then(order => this.props.fetchOrdersByShipmentId(this.props.shipmentId))
        } else {
            // Do nothing!
            console.log("")
        }

        // .then(this.setState({}))
    }


    onChangeHandler(field, e) {
        this.setState({ [field]: e.currentTarget.value })
    }
    render() {
        if (this.state.delivered == true) {
            return (
                <div id="edit-container">
                    <form onSubmit={this.onClickSubmit} id="info-container">
                        <input id="not-delivered" type='text' readOnly value={this.state.id} />
                        <input id="not-delivered" type='text' readOnly value={`${Math.round(((this.state.price) * 100) / 100).toFixed(2)}`} />
                        <input id="not-delivered" type='text' readOnly value={`${this.state.weight}`} />
                        <input id="not-delivered" type='text' readOnly value={this.state.receiverName} />
                        <input id="not-delivered" type='text' readOnly value={this.state.description} />
                        <select align="center" style={{ color: this.state.delivered === true ? "green" : "red" }} defaultValue={this.state.delivered} onChange={(e) => this.onChangeHandler("delivered", e)} id="not-deliveredR">
                            <option align="center" value="true" >DELIVERED</option>
                            <option align="center" value="false" >NOT DELIVERED</option>
                        </select>
                        {/* <button  onClick={this.deleteHandler} >Delete</button> */}
                        {/* <input id="not-delivered" type='text' defaultV{this.state.id} </input> 
                        <input id="not-delivered" type='text' defaultV{this.state.departure} </input>
                        <input id="not-delivered" type='text' defaultV{JSON.stringify(this.state.weight)} </input>
                        <input id="not-delivered" type='text' defaultV{JSON.stringify(this.state.full)} </input>
                        <input id="not-deliveredG" type='text' defaultV>{JSON.stringify(this.state.delivered)} </input>  */}
                        {/* <p id="delivered">{this.state.id} </p>   
                        <p id="delivered">{this.state.departure}</p>    
                        <p id="delivered">{JSON.stringify(this.state.weight)}</p>   
                        <p id="delivered">{JSON.stringify(this.state.full)}</p>   
                        <p id="delivered">{JSON.stringify(this.state.delivered)}</p>   
                        <p id="delivered"></p>    */}
                    </form>

                    {/* //                     <Link to="/" id='check-li'>Check</Link> */}

                    {/* <Link  to={{pathna`/shipments/orders/${this.state.id}`, state:{}}} >Check</Link> */}


                </div>
            )
        } else {
            return (
                <div align="center" id="edit-container">
                    <form align="center" onSubmit={this.onClickSubmit} id="not-delivered-info-container">
                        <input id="not-delivered" readOnly type="text" value={this.state.id} />
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("price", e)} value={`${Math.round(((this.state.price) * 100) / 100).toFixed(2)}`} />
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("weight", e)} value={`${Math.round(((this.state.weight) * 100) / 100).toFixed(2)}`}/>
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("receiverName", e)} value={this.state.receiverName} />
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("description", e)} value={this.state.description} />
                        {/* <input style={{ color: this.state.full === true ? "red" : "green" }} id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("full", e)} value={this.state.full === true ? ("FULL") : ("ADD MORE") } /> */}
                        {/* <input style={{ color: this.state.delivered === true ? "green" : "red" }} id="not-deliveredR" type="text" onChange={(e) => this.onChangeHandler("delivered", e)} value={this.state.delivered === true ? ("DELIVERED") : ("NOT YET")} /> */}
                        <select align="center" style={{ color: this.state.delivered === true ? "green" : "red" }} defaultValue={this.state.delivered} onChange={(e) => this.onChangeHandler("delivered", e)} id="not-deliveredR">
                            <option align="center" value="true" >DELIVERED</option>
                            <option align="center" value="false" >NOT DELIVERED</option>
                        </select>
                        <input className="all-buttons" id="submit-buttons" type="submit" value="Submit changes" />
                        <button  onClick={this.deleteHandler} >Delete</button>
                    </form>

                    {/* <Link to="/" id='check-li'>Check</Link> */}



                </div>
            )
        }

    }
}

export default OrderShow;
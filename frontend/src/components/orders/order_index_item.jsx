import React from "react";
import { Link, withRouter } from "react-router-dom";
import shipmentCSS from '../shipments/shipment.css'

class UserOrderItem extends React.Component {
    constructor(props) {
        super(props)
        // console.log("inside of the constructor", this.props)
        this.state = {
            id: this.props.order._id,
            price: this.props.order.price,
            weight: this.props.order.weight,
            receiverName: this.props.order.receiverName,
            description: this.props.order.description,
            delivered: this.props.order.delivered,
            businessOwnerId: this.props.order.businessOwnerId,  
            customerId: this.props.order.customerId,
            shipmentId: this.props.order.shipmentId
        }
        this.update = this.update.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

  onClickSubmit(e) {
    e.preventDefault();
    const answer = window.confirm('Are you sure you want to save changes to this order?')

    if (answer) {
        this.props.updateOrder(this.state)
            .then(order => this.props.fetchUserOrders(this.state.customerId))
    } else {
        return;
    }
    //   .then(this.props.fetchUserOrders(this.state.customerId))
    // .then(this.props.history.push(`/orders/user/${this.state.customerId}`))
  }

    deleteHandler(e){
        e.preventDefault();
        const answer = window.confirm('Are you sure you want to delete this order?')
        let orderWeight = this.state.weight
        let shipmentWeight = this.state.shipmentId

        if (answer) {

            console.log(this.props.order.shipmentId)
            let oldWeight = this.props.order.shipmentId.weight 
            let oldShipment = this.props.order.shipmentId 
            let newShipment = Object.assign({}, oldShipment, {weight: oldWeight + this.props.order.weight, full: false})
            this.props.updateShipment(newShipment)
                .then(this.props.deleteOrder(this.props.order._id));
        } else {
            return;
        }
        // this.updateOrder = this.props.updateOrder.bind(this)
    }

    update(field){
    // this.updatePrice(field)
    
    if (field === 'weight') {
      return e => this.setState({
        price: `${Math.round(((e.currentTarget.value * 3.0) * 100 )/ 100 ).toFixed(2) }`,
        weight: e.currentTarget.value
      })
    }

    // return e => this.setState({
    //   [field]: e.currentTarget.value
    // })
    
    }

    onChangeHandler(field, e) {
        this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        // debugger
        if (this.state.delivered === true) {

            return (
                <div id="edit-container">
                    <form onSubmit={this.onClickSubmit} id="info-container">
                        <input id="not-delivered" type='text' readOnly value={this.props.order.shipmentId.departure} />
                        <input id="not-delivered" type='text' readOnly value={`$${Number.parseFloat(this.state.price).toFixed(2)}`} />
                        <input id="not-delivered" type='text' readOnly value={`${Number.parseFloat(this.state.weight).toFixed(2)} lb`}  />
                        <input id="not-delivered" type='text' readOnly value={this.state.receiverName} />
                        <input id="not-delivered" type='text' readOnly value={this.state.description} />
                        
                        <select align="center" style={{ color: this.state.delivered ? "green" : "red" }} defaultValue={this.state.delivered} onChange={(e) => this.onChangeHandler("delivered", e)} id="not-deliveredR">
                            <option align="center" value="true" >DELIVERED</option>
                            <option align="center" value="false" >NOT DELIVERED</option>
                        </select>
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
                    {/* <a href={`/shipments/orders/${this.state.id}`} id='check-li' >Check orders</a> */}

                </div>
            )
        } else {
            return (
                <div align="center" id="edit-container">
                    <form align="center" onSubmit={this.onClickSubmit} id="not-delivered-info-container">
                        <input id="not-delivered" type="text" readOnly value={this.props.order.shipmentId.departure} />
                        <input id="not-delivered" type="text" readOnly value={`$${Number.parseFloat(this.state.price).toFixed(2)}`}  />
                        {/* <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("weight", e), this.update("weight")} value={this.state.weight} /> */}
                        <input id="not-delivered" type="text" readOnly value={`${Number.parseFloat(this.state.weight).toFixed(2)} lb`} />
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("receiverName", e)} value={this.state.receiverName} />
                        <input id="not-delivered" type="text" readOnly value={this.state.description} />
                        <select align="center" style={{ color: this.state.delivered === true ? "green" : "red" }} defaultValue={this.state.delivered} onChange={(e) => this.onChangeHandler("delivered", e)} id="not-deliveredR">
                            <option align="center" value="true" >DELIVERED</option>
                            <option align="center" value="false" >NOT DELIVERED</option>
                        </select>
                        <input className="all-buttons" id="submit-buttons" type="submit" value="Submit changes" />
                        <button className="all-buttons" onClick={this.deleteHandler} >Delete Order</button>
                    </form>
                </div>
            )
        }

    }
}

  


export default withRouter(UserOrderItem); 
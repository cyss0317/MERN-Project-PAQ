import React from "react";
import {Link, withRouter} from "react-router-dom";
import shipmentCSS from './shipment.css';

class EditShipment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.shipment._id,
            departure: this.props.shipment.departure,
            weight: this.props.shipment.weight,
            full: this.props.shipment.full,
            delivered: this.props.shipment.delivered,
            orders: this.props.shipment.orders
        }
        this.onClickSubmit = this.onClickSubmit.bind(this)

    }

    onClickSubmit(e){
        e.preventDefault()
        const shipment = Object.assign({}, this.state)
        this.props.updateShipment(shipment)
        // this.props.updateShipment(this.state)
    }

    onChangeHandler(field, e){
        this.setState({[field]: e.currentTarget.value })
    }
    render(){
        if ( this.state.delivered == true ){
            return(
                <div id="edit-container">
                    <form onSubmit={this.onClickSubmit} id="info-container">
                        <input id="not-delivered" type='text' value={this.state.id}/>
                        <input id="not-delivered" type='text' value={this.state.departure}/>
                        <input id="not-delivered" type='text' value={JSON.stringify(this.state.weight)}/>
                        <input id="not-delivered" type='text' value={JSON.stringify(this.state.full)}/>
                        <input id="not-deliveredG" type='text' value={JSON.stringify(this.state.delivered)}/>
                        {/* <p id="delivered">{this.state.id} </p>   
                        <p id="delivered">{this.state.departure}</p>    
                        <p id="delivered">{JSON.stringify(this.state.weight)}</p>   
                        <p id="delivered">{JSON.stringify(this.state.full)}</p>   
                        <p id="delivered">{JSON.stringify(this.state.delivered)}</p>   
                        <p id="delivered"></p>    */}
                    </form>

//                     <Link to="/" id='check-li'>Check</Link>

                    {/* <Link  to={{pathna`/shipments/orders/${this.state.id}`, state:{}}} >Check</Link> */}
                    <a href={`/shipments/orders/${this.state.id}`} id='check-li' >Check</a>

                </div>
            )
        }   else {
            return(
                <div id="edit-container">
                    <form onSubmit={this.onClickSubmit} id="not-delivered-info-container">
                        <input id="not-delivered" type="text" value={this.state.id} />
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("departure", e)} value={this.state.departure} />
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("weight", e)} value={this.state.weight} />
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("full", e)} value={this.state.full} />
                        <input id="not-deliveredR" type="text" onChange={(e) => this.onChangeHandler("delivered", e)} value={this.state.delivered} />
                        <input className="all-buttons" id="submit-buttons" type="submit" value="Submit changes" />
                    </form>

                    <Link to="/" id='check-li'>Check</Link>

                    <Link to={`/shipments/orders/${this.state.id}`} id='check-li' >Check</Link>

                </div>
            )
        }

    }
}



export default withRouter(EditShipment);
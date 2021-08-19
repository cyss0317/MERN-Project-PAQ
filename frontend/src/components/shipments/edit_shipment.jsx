import React from "react";
import {Link} from "react-router-dom"
import shipmentCSS from './shipment.css'

class EditShipment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            departure: this.props.shipment.departure,
            weight: this.props.shipment.weight,
            full: this.props.shipment.full,
            delivered: this.props.shipment.delivered,
            orders: this.props.shipment.orders
        }
        this.onClickSubmit = this.onClickSubmit.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onClickSubmit(){
        this.props.updateShipment(this.state)
    }

    onChangeHandler(field){
        return e => this.setState({[field]: e.currenTarget.value })
    }

    render(){
        return(
            <div id="edit-container">
                <div id="info-container">
                    <p id={`${this.props.index}`} contentEditable="true" onChange={this.onChangeHandler("departure")} value={this.state.departure} >{this.state.departure}</p>
                    <p id={`${this.props.index}`} contentEditable="true" onChange={this.onChangeHandler("weight")} value={this.state.weight}>{this.state.weight}</p>
                    <p id={`${this.props.index}`} contentEditable="true" onChange={this.onChangeHandler("full")} value={this.state.full}>{JSON.stringify(this.state.full)}</p>
                    <p id={`${this.props.index}`} contentEditable="true" onChange={this.onChangeHandler("delivered")} value={this.state.delivered}>{JSON.stringify(this.state.delivered)}</p>
                    <Link>Check</Link>
                </div>
                    <input type="submit" value="Submit changes" onClick={this.onClickSubmit} />
            </div>
        )
    }


}


export default EditShipment
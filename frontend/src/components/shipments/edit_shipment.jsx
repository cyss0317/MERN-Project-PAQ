import React from "react";
import {Link, withRouter} from "react-router-dom";
import shipmentCSS from './shipment.css';

class EditShipment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            _id: this.props.shipment._id,
            departure: this.props.shipment.departure,
            weight: this.props.shipment.weight.toFixed(2),
            full: this.props.shipment.full,
            delivered: this.props.shipment.delivered,
            userId: this.props.shipment._userId

        }
        this.onClickSubmit = this.onClickSubmit.bind(this)

    }

    onClickSubmit(e){
        e.preventDefault()
        
        const answer = window.confirm('Are you sure you want to make this changes to the database?')
        if (answer) {
            // Save it!
            console.log('Successfully edited');
            const shipment = Object.assign({}, this.state)
            console.log(this.props)
            console.log(shipment)
            this.props.updateShipment(shipment)
            .then(this.props.fetchAllShipments(this.props.currentUserId))
        } else {
            // Do nothing!
            console.log('Something went wrong, try again');
        }
    }


    onChangeHandler(field, e){
        if (field === "weight") {
            this.setState({ price: `${Math.round(((e.currentTarget.value * 3.0) * 100) / 100).toFixed(2)}` })
        }
        this.setState({ [field]: e.currentTarget.value })
        
    }
    render(){
        if ( this.state.delivered === true ){
            return(
                <div id="edit-container">
                    <form onSubmit={this.onClickSubmit} id="info-container">
                        <input  id="not-delivered" type='text' readOnly  value={this.state._id}/>
                        <input id="not-delivered" type='text'  readOnly value={this.state.departure}/>
                        <input id="not-delivered" type='text' readOnly value={`${this.state.weight}`}/>
                        <input style={{ color: this.state.full === true ? "green" : "red" }} id="not-delivered" type='text'  readOnly value={this.state.full === true ? ("FULL") : ("ADD MORE")} />
                        <select align="center" style={{ color: this.state.delivered === true ? "green" : "red" }} defaultValue={this.state.delivered} onChange={(e) => this.onChangeHandler("delivered", e)} id="not-deliveredR">
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
                        <Link to={`/shipments/orders/${this.state._id}`} id='check-li' >Check orders</Link>           
                    </form>

{/* //                     <Link to="/" id='check-li'>Check</Link> */}

                    {/* <Link  to={{pathna`/shipments/orders/${this.state.id}`, state:{}}} >Check</Link> */}
                    {/* <a href={`/shipments/orders/${this.state.id}`} id='check-li' >Check orders</a> */}
                </div>
            )
        }   else {
            return(
                <div align="center" id="edit-container">
                    <form align="center" onSubmit={this.onClickSubmit} id="not-delivered-info-container">
                        <input id="not-delivered" type="text" readOnly value={this.state._id} />
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("departure", e)} value={this.state.departure} />
                        <input id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("weight", e)} value={`${this.state.weight}`} />
                        {/* <input style={{ color: this.state.full === true ? "red" : "green" }} id="not-delivered" type="text" onChange={(e) => this.onChangeHandler("full", e)} value={this.state.full === true ? ("FULL") : ("ADD MORE") } /> */}
                        {/* <input style={{ color: this.state.delivered === true ? "green" : "red" }} id="not-deliveredR" type="text" onChange={(e) => this.onChangeHandler("delivered", e)} value={this.state.delivered === true ? ("DELIVERED") : ("NOT YET")} /> */}
                        <select style={{ color: this.state.full === true ? "red" : "green" }} defaultValue={this.state.full} onChange={(e) => this.onChangeHandler("full", e)}id="not-deliveredR">
                            <option style={{color: "red"}} value="true" >FULL</option>
                            <option style={{ color: "green" }} value="false" >ADD MORE</option>
                        </select>
                        {/* <select align="center" style={{ color: this.state.delivered === true ? "green" : "red" }} defaultValue={this.state.delivered} onChange={(e) => this.onChangeHandler("delivered", e)} id="not-deliveredR"> */}
                        <select align="center" style={{ color: this.state.delivered === true ? "green" : "red" }} defaultValue={this.state.delivered} onChange={(e) => this.onChangeHandler("delivered", e)} id="not-deliveredR">
                            <option align="center" style={{ color: "green" }} value="true" >DELIVERED</option>
                            <option align="center" style={{ color: "red" }} value="false" >NOT DELIVERED</option>
                        </select>
                        <input className="all-buttons" id="submit-buttons" type="submit" value="Submit changes" />
                        <Link to={`/shipments/orders/${this.state._id}`} id='check-li' >Check orders</Link>
                    </form>

                    {/* <Link to="/" id='check-li'>Check</Link> */}


                </div>
            )
        }

    }
}



export default withRouter(EditShipment);
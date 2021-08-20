import React from "react";
import {Link} from "react-router-dom";
import EditShipment from "./edit_shipment";
import shipmentCSS from "./shipment.css"
import {Route} from "react-router";
import ShipmentCreate from "./shipment_create";

class ShipmentIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            departure:'',
            weight:'',
            full: false,
            delivered: false,
            userId: this.props.currentUserId,

        }

        this.editable = this.editable.bind(this)
        this.expandFunction = this.expandFunction.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }
    componentDidMount(){
        this.props.fetchAllShipments(this.props.currentUserId)
    }

    editable(e) {
        let input = e.currentTarget.value;
        let att = document.createAttribute("contentEditable");
        att.value = "true";
        input.setAttributeNode(att);
    }
    noteditable() {
    var h1 = document.getElementsByTagName("H1")[0];
    var att = document.createAttribute("contenteditable");
    att.value = "flase";
    h1.setAttributeNode(att);
    }

    handleSubmit(e) {
        e.preventDefault();
        let shipment = {
            departure: this.state.departure,
            weight: this.state.weight,
            delivered: this.state.delivered,
            full: this.state.full,
            userId: this.state.userId,
        };

        this.props.createNewShipment(shipment)
        .then(this.props.fetchAllShipments(this.props.currentUserId))
    }

    onChangeHandler(field, e){
       this.setState({[field]: e.currentTarget.value});
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
    
    render(){
        const { shipments, currentUser } = this.props;
        if (shipments === undefined){
            return null;
        }
        
        
        return(
            <div id="main-container">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
                <div>
                    <h1>Welcome, {currentUser.name}</h1>
                </div>

                <div id='table-main'>
                    <h1 id='table-title'>List of shipments</h1>
                    <div id='create-div'>
                        <button id="expand-button" className="all-buttons" onClick={this.expandFunction}>Create a new shipment</button>
                        <div  id="create-shipment">
                            <form id="create-form" onSubmit={this.handleSubmit} >
                                    <input type="text" value={this.state.departure} placeholder="Departure" onChange={(e)=> this.onChangeHandler("departure", e)} id='c-input'/>
                                <input type="text" value={this.state.weight} placeholder="Weight" onChange={(e) => this.onChangeHandler("weight", e)} id='c-input'/>
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                    <div id="table-columns">
                        <p id="p">Shipment number</p>
                        <p id="p1">Departure</p>
                        <p id="p1">Weight</p>
                        <p id="p1">Full</p>
                        <p id="p1">Delivered</p>

                
                        {/* <Link to="/shipment/create">Create a shipment</Link>
                        <Route path="/shipment/create" component={ShipmentCreate}></Route> */}
                    </div>
                    {/* <div>
                        
                    </div> */}

                    <div>
                        {
                            shipments.map((shipment,index) => 
                                <EditShipment key={index} shipment={shipment} index={index}
                                    updateShipment={this.props.updateShipment} 
                                    fetchOrdersByShipmentId={this.props.fetchOrdersByShipmentId}/>
                            )
                        }
                    </div>
                </div>
            </div>
        )
            
        

    }

}

export default ShipmentIndex;
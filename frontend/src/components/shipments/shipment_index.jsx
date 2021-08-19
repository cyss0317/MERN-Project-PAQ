import React from "react";
import {Link} from "react-router-dom";
import EditShipment from "./edit_shipment";
import shipmentCSS from "./shipment.css"
import {Route} from "react-router";
import ShipmentCreate from "./shipment_create";

class ShipmentIndex extends React.Component{
    constructor(props){
        super(props)

        this.editable = this.editable.bind(this)
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

    
    render(){
        const { shipments, currentUser } = this.props;
        if (shipments === undefined){
            return null;
        }
        
        
        return(
            <div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
                <div>
                    <h1>Welcome, {currentUser.name}</h1>
                </div>

                <div>
                    <h1>List of shipments</h1>

                    <div id="table-columns-container">
                        <div id="table-columns">
                            <p>Detdarture</p>
                            <p>Weight</p>
                            <p>Full</p>
                            <p>Delivered</p>
                            <p>Orders</p>
                            <Link to="/shipment/create">Create a shipment</Link>
                            <Route path="/shipment/create" component={ShipmentCreate}></Route>
                        </div>
                    </div>
                    <div>
                        
                    </div>

                    <div>
                        {
                            shipments.map((shipment,index) => 
                                <EditShipment key={index} shipment={shipment} index={index}
                                    updateShipment={this.props.updateShipment}/>
                            )
                        }
                    </div>
                </div>
            </div>
        )
            
        

    }

}

export default ShipmentIndex;
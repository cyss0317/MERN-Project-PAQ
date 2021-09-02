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
            weight: '',
            full: false,
            delivered: false,
            userId: this.props.currentUserId,

        }


        this.expandFunction = this.expandFunction.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }
    componentDidMount(){
        this.props.fetchAllShipments(this.props.currentUserId)
    }




    handleSubmit(e) {
        e.preventDefault();
        // let shipment = {
        //     departure: this.state.departure,
        //     weight: this.state.weight,
        //     delivered: this.state.delivered,
        //     full: this.state.full,
        //     userId: this.state.userId,
        // };
        e.preventDefault();
        if (this.state.departure.length === 0 || typeof(this.state.weight) === "") {
            alert("Please fill out every inputs")
            return;
        }
        const answer = window.confirm('Are you sure you want to save this shipment to the database?')
        if (answer) {
            // Save it!
            this.props.createNewShipment(this.state)
            // .then(this.props.fetchAllShipments(this.props.currentUserId))
            .then(this.setState({departure: "", weight: ""}))

        } else {
            // Do nothing!
            return;
        }
        // .then( shipment =>  alert("Successfully Added"), 
        // err => alert(`${err}`))
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
                                <input type="text" value={this.state.weight} placeholder="Weight(lb)" onChange={(e) => this.onChangeHandler("weight", e)} id='c-input'/>
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                    <div id="table-columns1">
                        <p id="p1">Shipment number</p>
                        <p id="p1">Departure</p>
                        <p id="p1">Weight(lb)</p>
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
                                    fetchOrdersByShipmentId={this.props.fetchOrdersByShipmentId}
                                    fetchAllShipments={this.props.fetchAllShipments}
                                    shipments={shipments} currentUserId={this.props.currentUserId}
                                    
                                    />
                            )
                        }
                    </div>
                </div>
            </div>
        )
            
        

    }

}

export default ShipmentIndex;
import React from "react";

class ShipmentIndex extends React.Component{
    constructor(props){
        super(props)
    }
    componenetDidMount(){
        this.props.fetchAllShipments(this.props.currentUser.id)
    }

    render(){
        const { shipments, currentUser } = this.props;
        if (shipments === undefined){
            return null;
        }

        return(
            <div>
                <div>
                    <h1>Welcome, {currentUser.name}</h1>
                </div>

                <div>
                    <h1>List of shipments</h1>
                    <ul>
                        
                            {/* {
                                shipments.maps((shipment) => {
                                   <li> 
                                       shipment

                                    </li>
                                })
                            } */}
                    </ul>
                </div>
            </div>
        )
    }
}


export default ShipmentIndex;
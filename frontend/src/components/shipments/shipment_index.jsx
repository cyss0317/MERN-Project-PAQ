import React from "react";

class ShipmentIndex extends React.Component{
    constructor(props){
        super(props)
    }
    componenetDidMount(){
        this.props.fetchShipment()
    }

    render(){
        return(
            <h1></h1>
        )
    }
}


export default ShipmentIndex;
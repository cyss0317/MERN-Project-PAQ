import React from "react";

class ShipmentOrders extends React.Component{
    constructor(props){
        super(props)
    }

    // componentDidMount(){

    //     this.props.fetchOrdersByShipmentId()
    // }

    render(){
        const { currentUser, shipments } = this.props;
        // if ( shipments === undefined ){
        //     return null;
        // }

        return (
            <h1>Please visit later, our web-developers are working on it!!</h1>
        )
    }
}

export default ShipmentOrders;
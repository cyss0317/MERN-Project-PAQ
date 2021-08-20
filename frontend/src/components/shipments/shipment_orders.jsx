import React from "react";

class ShipmentOrders extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

        this.props.fetchOrdersByShipmentId(this.props.shipmentId)
    }

    render(){
        const { currentUser, shipments } = this.props;
        // if ( shipments === undefined ){
        //     return null;
        // }
        // debugger
        return (
            <h1>Please visit later, our web-developers are working on it!!</h1>
            // <div>
            //     <ul>
            //         {/* {this.} */}

            //     </ul>
            // </div>
        )
    }
}

export default ShipmentOrders;
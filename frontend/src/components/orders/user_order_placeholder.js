import React from 'react';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.price,
      weight: this.props.weight,
      receiverName: this.props.receiverName,
      description: this.props.description
    }
    // this.fetchUserOrders = this.fetchUserOrders.bind(this);
  }

  componentDidMount() { 
    this.props.fetchUserOrders() 

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
  //   let orders = this.props.orders ? this.props.orders : [];

  //   if (orders.length != 0){
  //     return (
  //       <div className="user-index-container">
  //         <h1>Hello</h1>
  //         {
  //           orders.map((order, index) => {
  //             return (
  //               <div key={order.id} className="user-feed-box">
  //                 <div className="order-feed-">
  //                   {order.weight}
  //                 </div>
  //                 <div className="button-container">
  //                   <div className="edit-button-container">
  //                     <button className="edit-button">Edit Order</button>
  //                   </div>
  //                   <div className="delete-button-container">
  //                     <button className="delete-button">Delete Order</button>
  //                   </div>
  //                 </div>
  //               </div>
  //             )
  //           })
  //         }
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <h2>There are no orders for this user!</h2>
  //     )
  //   }

  const { orders, currentUser } = this.props;
  if (orders === undefined){
      return null;
  }
  console.log(Object.values(orders))
  let userOrders = orders.map(order => {
    return Object.values(order)
  })

  return(
    <div>
      {userOrders.map(order =>{
        return order 
      })}
    </div>
  )
  
  
  
  // return(
  //     <div id="main-container">
  //         <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  //         <div>
  //             <h1>Welcome, {currentUser}</h1>
  //         </div>

  //         <div>
  //             <h1>List of orders</h1>
  //             <div>
  //                 <button id="expand-button" className="all-buttons" onClick={this.expandFunction}>Create a new shipment</button>
  //                 <div  id="create-shipment">
  //                     <form id="create-form" onSubmit={this.handleSubmit} >
  //                         <label >Departure : 
  //                             {/* <input type="text" value={this.state.departure} onChange={(e)=> this.onChangeHandler("departure", e)} /> */}
  //                         </label>
  //                         <label >Weight : 
  //                             {/* <input type="text" value={this.state.weight} onChange={(e) =>this.onChangeHandler("weight", e)} /> */}
  //                         </label>
  //                         <input type="submit" />
  //                     </form>
  //                 </div>
  //             </div>
  //             <div id="table-columns">
  //                 <p>Shipment number</p>
  //                 <p>Detdarture</p>
  //                 <p>Weight</p>
  //                 <p>Full</p>
  //                 <p>Delivered</p>
  //                 <p></p>
  //                 <p>Orders</p>
          
  //                 {/* <Link to="/shipment/create">Create a shipment</Link>
  //                 <Route path="/shipment/create" component={ShipmentCreate}></Route> */}
  //             </div>
  //             {/* <div>
                  
  //             </div> */}

          
  //         </div>
  //     </div>
  
  
  // )
  }
}

// export default UserIndex;
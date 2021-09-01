# **PAQ**

### **Inspiration and Background:**

PAQ was inspired by a real business that moved packages from Mexico to Minnesota and vice versa. The owner of this
business would take orders over the phone or in person to deliver goods. These goods usually consisted of toys and 
food. A client can reserve a spot on the business owner's carry on by weight. Airlines will let you check in up to 
three bags up to 70 pounds each. As you can see this process can get overwhelming very quick with keeping track of
the orders.



### **Sign Up Demo**

<iframe src="https://media3.giphy.com/media/s4HsuRHmfXNWh6Phie/giphy.gif" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

### **Create Order Demo**

<iframe src="https://media3.giphy.com/media/RuDdrIlv2GEBGuEQM0/giphy.gif" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

### **Create Shipment Demo**

<iframe src="https://media0.giphy.com/media/Dqmb2OgfOucxq6p5Dd/giphy.gif" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

### **Description:**

The PAQ application is a shipping application that will help both the business owner and user.

*User:* The user's streamline interface makes creating and modifying orders a breeze. No more calling or texting the
business owner hoping they have room in their luggage. Now a user can go online and check available space per the
desired departure date. Creating an order is as simple as clicking a button a filling out four fields.

*Business Owner:* The business owner's home page is a one stop shop to check orders that have been placed for each 
shipment. The owner can also create orders for walk in clients as well. The best part of it all is that the owner
doesn't have to call each individual telling them that their order is ready for pick up. They can simply login to the 
website and send out a mass text to all individuals that their order is ready.



### **Link to Live Site:**

Click the link below to visit the live site

https://mern-paq.herokuapp.com/



### **Technologies Used:**

*MongoDB:* used for our backend database to store data.

*React:* used to help create a more dynamic frontend for the user.

*Node.js:* used for executing JavaScript code server-side.

*HTML:* used to provide a skeleton for our design for website.

*CSS:* used to style website and create a better user experience.

*axios:* used to communicate with our backened for our HTTP requests.

*express:* used to set up middleware to respond to HTTP requests.

*twilio:* is an API used to send mass text to clients.



### **Features:**

There are a ton of features that are included in our application. However, we would like to point out a couple of 
features that we are really proud of. 

*1. twilio*

We all thought that text capabilities was something that would be the most beneficial for the business owner. We 
didn't know how to go about it nor did we even know if we could implement this API. This took us a lot of tinkering, googling, and reading of the docs to get it to finally to send out a text.

*2. editing orders/shipments*

Creating orders and shipments wasn't too bad. But, editing either one of these was maybe the toughest part of creating
this application. After being stuck on the editing feature for a couple of days. We had to essentially start from scratch and refactor 
the state from the backend. After doing so we were able to get the info needed to pass back to the backend. 

*3. orders interacting with shipments*

Part of creating orders is that an order should take up space in a shipment. Therefore, a shipment's available weight should be reduced accordingly. This was a tough thing for us to accomplish since 
orders and shipments are two different components. Also, we would temporarily lose the shipment's id in the state to send back to the backend. To resolve the issue we referenced the other's table in the routes.



### **Code Snippets:**

*1. twilio*

````javascript
router.post('/', (req,res) => {
  const { errors, isValid } = validateMessages(req.body);
  if(!isValid){
    return res.status(400).json(errors); 
  }
  res.header('Content-Type', 'application/json');
  client.messages
          .create({
               body: req.body.body,
               from: phoneNumber,
               to: `+1${req.body.to}`
         })
         .then(() => {
           res.send(JSON.stringify({ success: true}));
         })
         .catch(err => {
           console.log(err);
           res.send(JSON.stringify({success: false}));
         });
});

// multiple messages 
router.post('/massText', (req,res) => {
  const { errors, isValid } = validateMessages(req.body);
  if(!isValid){
    return res.status(400).json(errors); 
  }
  Promise.all(
    req.body.numbers.map(number => {
      return client.messages
          .create({
            to: number, 
            from: phoneNumber,
            body: req.body.body 
          })
    })
  )
        .then(messages => {
          console.log('Messages sent!');
        })
        .catch(err => console.log(err))
})
````

*2. editing orders/shipments reducer*

````javascript
import { RECEIVE_ORDERS, RECEIVE_ORDER, RECEIVE_USER_ORDERS, RECEIVE_ORDERS_BY_SHIPMENTID, REMOVE_ORDER } from '../actions/order_actions';

const OrdersReducer = (state = {}, action) => {

  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ORDERS:
      return action.orders.data;

    case RECEIVE_ORDER:
      return nextState[action.order.data._id] = action.order.data; 

    case RECEIVE_USER_ORDERS:
      let userOrders = action.orders
      userOrders.forEach((order) => {
        nextState[order._id] = order
      })
      return nextState;

    case RECEIVE_ORDERS_BY_SHIPMENTID:
      let orders = action.orders.data
      let newState= {}
      orders.forEach((order) => {
        newState[order._id] = order
      })
      return newState;

    case REMOVE_ORDER:
      delete nextState[action.orderId];
      return nextState;
      
    default: 
      return state;
  }
}

export default OrdersReducer;
````


*3. editing orders/shipments routes*

````javascript
router.get("/:id", (req, res) => {
  const shipment = Shipment.findById(req.params.id)
    .populate("userId")
    .populate("order")
    .exec()
    .then( shipment => res.json(shipment))
    .catch( err => res.status(404).json(err))
})

router.get("/allShipments/:delivered", (req, res) => {
  Shipment.find({ delivered: req.params.delivered })
    .populate("userId")
    .populate("order")
    .exec()
    .then( shipments => res.json(shipments))
    .catch(err => res.status(404).json(err))
})

router.get("/user/:userId", (req, res) => {
  const shipment = Shipment.find({ userId: req.params.userId})
  .sort({delivered: false})
  .populate("userId")
  .populate("order")
  .exec()
    .then(shipments => res.json(shipments))
    .catch(err => res.status(404).json(err))
})
````
### **Developers:**

**Jaycee Magpusao: Frontend / Backend Asst.**

[Jaycee's LinkedIn](https://www.linkedin.com/in/jaycee-magpusao-profile/)

[Jaycee's GitHub](https://github.com/JayceeMagpusao)

**Oscar Vazquez: Team Lead**

[Oscar's LinkedIn](https://www.linkedin.com/in/oscar-vazquez-650471165/)

[Oscar's GitHub](https://github.com/0skat)

**Yun sung Choi: Backend Lead**

[Yun's LinkedIn](https://www.linkedin.com/in/yun-sung-choi-936142214/)

[Yun's GitHub](https://github.com/cyss0317)

**John Angcla: Frontend Lead**

[John's LinkedIn](https://www.linkedin.com/in/john-angcla-1418a9213/)

[John's GitHub](https://github.com/jangcla)
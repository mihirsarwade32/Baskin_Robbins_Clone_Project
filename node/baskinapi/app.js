let express = require('express');
let app = express();
let port = 3299
let mongo = require('mongodb');
let {ObjectId} = require('mongodb');
let bodyParser = require('body-parser');
let cors = require('cors');
let {dbConnect, getData, postData, updateData, deleteData} = require('./controller/dbController');


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// app.get('/',(req, res) => {
//     res.send ('Hi from Json')
// })

//Show all the locations
app.get('/locations', async(req, res) => {
    let query = {};
    let collection = "locations";
    let output = await getData(collection, query);
    res.send (output)
});


//Show all the stores or stores wrt locations
app.get('/stores', async(req, res) => {
    let query = {};
    if(req.query.stateId){
        query = {"state_id":Number(req.query.stateId)}
    }else if(req.query.beveragesid){
        query = {"beveragestype.beverages_id":Number(req.query.beveragesid)}
    }else if(req.query.icecreamid){
        query = {"icecreamtype.icecream_id":Number(req.query.icecreamid)}
    }else if(req.query.icecreamcakeid){
        query = {"icecreamcaketype.icecreamcake_id":Number(req.query.icecreamcakeid)}
    }else if(req.query.newlyarrivedid){
        query = {"newlyarrivedtype.newlyarrived_id":Number(req.query.newlyarrivedid)}
    }else if(req.query.sundaesid){
        query = {"sundaestype.sundaes_id":Number(req.query.sundaesid)}
    }
    let collection = "stores";
    let output = await getData(collection, query);
    res.send (output)
});

//Show all the ice creams
app.get('/icecreamtype', async(req, res) => {
    let query = {};
    let collection = "icecreamtype";
    let output = await getData(collection, query);
    res.send (output)
});

//Show all beverages types
app.get('/beveragestypes', async(req, res) => {
    let query = {};
    let collection = "beveragestypes";
    let output = await getData(collection, query);
    res.send (output)
});

//Show all ice cream cake type
app.get('/icecreamcaketype', async(req, res) => {
    let query = {};
    let collection = "icecreamcaketype";
    let output = await getData(collection, query);
    res.send (output)
});

//Show all newly arrived
app.get('/newlyarrived', async(req, res) => {
    let query = {};
    let collection = "newlyarrived";
    let output = await getData(collection, query);
    res.send (output)
});

//Show all sundaes type
app.get('/sundaestype', async(req, res) => {
    let query = {};
    let collection = "sundaestype";
    let output = await getData(collection, query);
    res.send (output)
});

//show all categories
app.get('/category', async(req, res) => {
    let query = {};
    let collection = "category";
    let output = await getData(collection, query);
    res.send (output)
});

//Details of store
app.get('/details/:id', async(req, res) => {
    let id= Number(req.params.id);
    let collection = "stores";
    let query = {"store_id":id};
    let output = await getData(collection, query);
    res.send(output)
});

//Menu of stores
app.get('/menu/:id', async(req, res) => {
    let collection = "storemenu";
    let query = {store_id:Number(req.params.id)};
    let output = await getData(collection, query);
    res.send(output)
});

//order wrt user
app.get('/order', async(req, res) => {
    let query = {};
    let collection = "order";
    if (req.query.email){
        query = {email:req.query.email}
    }
    let output = await getData(collection, query);
    res.send(output)
});


//place order
app.post('/placeOrder', async(req,res) => {
    let body = req.body;
    let collection = 'order';
    let response = await postData(collection, body);
    res.send(response)
})

//Update order
app.put('/UpdateOrder', async(req, res) => {
    let collection = "order";
    let condition = {"_id":new ObjectId(req.body._id)}
    let data = {
        $set:{
            "status":req.body.status
        }
    }
    let output = await updateData(collection,condition,data)
    res.send(output)
});


//Delete order
app.delete('/deleteOrder', async(req, res) => {
    let collection = "order";
    let condition = {"_id":new ObjectId(req.body._id)}
    let output = await deleteData(collection,condition)
    res.send(output)
});


app.listen(port, (err) => {
    dbConnect();
    if (err) throw err;
    console.log(`Sever is running on port ${port}`)
}) 


















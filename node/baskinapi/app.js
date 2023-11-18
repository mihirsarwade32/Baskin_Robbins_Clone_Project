let express = require('express');
let app = express();
let port = 3299
let mongo = require('mongodb');
let bodyParser = require('body-parser');
let cors = require('cors');
let {dbConnect, getData} = require('./controller/dbController');


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

// app.get('/',(req, res) => {
//     res.send ('Hi from Json')
// })


app.get('/locations', async(req, res) => {
    let query = {};
    let collection = "locations";
    let output = await getData(collection, query);
    res.send (output)
})



app.listen(port, (err) => {
    dbConnect();
    if (err) throw err;
    console.log(`Sever is running on port ${port}`)
}) 


















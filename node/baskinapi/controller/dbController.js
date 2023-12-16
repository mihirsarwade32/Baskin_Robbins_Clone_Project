let mongo = require ('mongodb');
let {MongoClient} = require('mongodb');
let mongoUrl = "mongodb+srv://mihir:yA4Mvzo2GqURr4Zk@cluster0.orpn7yf.mongodb.net/?retryWrites=true&w=majority";
let client = new MongoClient(mongoUrl);

async function dbConnect(){
    await client.connect();
}

let db = client.db('baskinrobbins');


//GET DATA
async function getData(ColName,query){
    let output = [];
    try{
        const cursor = db.collection(ColName).find(query);
        for await (const data of cursor){
            output.push(data)
        }
        cursor.close();
    }catch(err){
        output.push({"Error" : "Error in getting data"})
    }
    return output
}


//POST DATA
async function postData(ColName,data){
    let output;
    try{
       output = await db.collection(ColName).insertOne(data);
    }catch(err){
        output = {"Response" : "Error in post data"}
    }
    return output
}


//UPDATE DATA
async function updateData(ColName,condition,data){
    let output;
    try{
       output = await db.collection(ColName).updateOne(condition,data);
    }catch(err){
        output = {"Response" : "Error in update data"}
    }
    return output
}



//DELETE DATA
async function deleteData(ColName,condition){
    let output;
    try{
       output = await db.collection(ColName).deleteOne(condition);
    }catch(err){
        output = {"Response" : "Error in delete data"}
    }
    return output
}

module.exports = {
    dbConnect,
    getData,
    postData,
    updateData,
    deleteData
}
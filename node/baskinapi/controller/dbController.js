let mongo = require ('mongodb');
let {MongoClient} = require('mongodb');
let mongoUrl = "mongodb+srv://mihir:yA4Mvzo2GqURr4Zk@cluster0.orpn7yf.mongodb.net/?retryWrites=true&w=majority";
let client = new MongoClient(mongoUrl);

async function dbConnect(){
    await client.connect();
}

let db = client.db('baskinrobbins');

async function getData(ColName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await (const data of cursor){
            output.push(data)
        }
        cursor.close();
    }catch(err){
        output.push({"Error" : "Error in getting data"})
    }
    return output
}



module.exports = {
    dbConnect,
    getData
}
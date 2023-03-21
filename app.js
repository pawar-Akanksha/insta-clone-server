const mongoose = require('mongoose');
const PORT = "9000" // || process.env.PORT;
const MongoDb = "mongodb+srv://akankshapawar:insta123@cluster0.nuf5hol.mongodb.net/insta?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);
const app =require("./index");



 function main() {
     mongoose.connect(MongoDb, (err) => {
        if(err) console.log(err);
        else console.log("database connected");
    })
     app.listen(PORT, (err) => {
        if(err) console.log(err);
        else console.log("Server running");
    })
} main()
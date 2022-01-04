//connecting mongoDB to server
const mongoose = require('mongoose');

const ConnectDB = async() => {
    const url = "mongodb+srv://Olegos:12345$54321@learningcluster.yuefy.mongodb.net/test";
    const options ={
        useNewUrlParser : true,
        useUnifiedTopology : true
    };

    const data = await mongoose.connect(url,options);
    //console.log(data);
};

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports = {
    ConnectDB
}

//conected to: TEST/mycars (Compass)
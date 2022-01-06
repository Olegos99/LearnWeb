const mongoose = require('mongoose');

const DBConnectionPath = "mongodb+srv://Olegos:12345$54321@learningcluster.yuefy.mongodb.net/test";

const ConnectDB = async() => {
    const url = DBConnectionPath;
    const options ={
        useNewUrlParser : true,
        useUnifiedTopology : true
    };

    const data = await mongoose.connect(url,options);
};

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports = {
    ConnectDB
}
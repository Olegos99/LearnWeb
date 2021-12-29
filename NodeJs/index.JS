const jsonFile = require('jsonFile');

console.log("start");

jsonFile.readFile("user.json", (err,obj) => {
    if(err)
    {
        console.log(err);
    }
    else
    console.log(obj);
});

console.log("end");
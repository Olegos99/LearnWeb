const ReadingJson = require('jsonfile');

 const GetJson = () =>
{
    return new Promise((resolve, reject) =>
    {
        ReadingJson.readFile('Cars.Json', (err, obj) =>
        {
            if(err)
            {
                reject(err);
                console.log(err);
            }
            
            else
            {
                console.log(obj);
                resolve(obj);
            }
        });
    })
}

module.exports ={
    GetJson
}

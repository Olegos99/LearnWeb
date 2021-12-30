const Searching = require('jsonfile');

 const getUserOnStreet = (street) =>
{
    return new Promise((resolve, reject) =>
    {
        let AllPersons;

        Searching.readFile('Persons.Json', (err, obj) =>
        {
            if(err)
            {
                reject(err);
                console.log(err)
            }
            
            else
            {
                AllPersons = obj;
                AllPersons.forEach((element) => {          
                if(element.address.street.name === street)
                {
                    console.log(element);
                    // resolve([element.name, element.age,element.address.city]);
                    resolve(element);
                }
                });
            }
        });
    })


    // let person = await Search();
    // console.log(person);
}


module.exports ={
    getUserOnStreet
}

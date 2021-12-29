const Searching = require('jsonfile');

 const getUserOnStreet = async (street) =>
{
    let AllPersons;

    Searching.readFile('Persons.Json', (err, obj) =>
    {
        if(err)
        console.log(err)
        else
        {
            AllPersons = obj;
            AllPersons.forEach((element) => {          
            if(element.address.street.name === street)
            {
                console.log(element);
                return element.name;
            }
            });
        }
    });

    // let person = await Search();
    // console.log(person);
}


module.exports ={
    getUserOnStreet
}

const Searching = require('./SerchByAddressModule');

async function GetPersonOnStreet(street)
    {
        let search = await Searching.getUserOnStreet(street);
        // console.log(`Person living on street "${street}" is: ${search[0]} age: ${search[1]} from ${search[2]}`);
        // const address = search.address
        // console.log(address.city)
        console.log(`Person living on street "${street}" is: ${search.name} age: ${search.age} from ${search.address.city}`)
    }

    GetPersonOnStreet("somestreet"); 
    console.log("start");


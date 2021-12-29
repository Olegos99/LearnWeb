const Searching = require('./SerchByAddressModule');

async function GetPersonOnStreet(street)
    {
        let search = await Searching.getUserOnStreet(street);
        console.log(`Person living on street "${street}" is: ${search}`);
    }

    GetPersonOnStreet("somestreet"); 
    console.log("start");


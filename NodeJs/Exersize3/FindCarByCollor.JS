const getJson = require('./ReedJsonUtil');

async function GetCarsByColor(color)
{
    return new Promise(async (resolve) =>
    {
        let AllCars = await getJson.GetJson();
        let ChosenCars = [];
        AllCars.cars.forEach(element => {
            if(element.color == color)
            {
                ChosenCars.push(element.model);
            }
        });

        resolve(ChosenCars);
    })
}

module.exports ={
    GetCarsByColor
}

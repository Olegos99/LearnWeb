const getCarsByColor = require('./FindCarByCollor');

Search = async (color) =>
{
    console.log(await getCarsByColor.GetCarsByColor(color));
}

Search("Red");


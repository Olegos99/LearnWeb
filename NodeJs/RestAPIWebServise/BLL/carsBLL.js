const carsDAL = require('../DAL/carsDAL');

const getCars =  () => {
    return new Promise(async (resolve, reject) => {
        const data = await carsDAL.getCarsJSON();
        if(data)
        {
            resolve(data);
            console.log("BLL worked");
        }
        else{
            console.log("BLL failed");
            reject("NONONONO")
        }
    });
    // const data = await carsDAL.getCarsJSON();
    // return data.cars;
}

const GetCarByID = async (id) => {
    const data = await carsDAL.getCarsJSON();
    const carsArray = data;
    const car = carsArray.filter(car => car.id === +id);
    console.log(car);
    return(car);
}

const CreateNewCar = async (obj) =>
{
    const data = await carsDAL.getCarsJSON();
    let carsArray2 = data;
    
    const NewObj = {
        id : carsArray2.length + 1,
        model : obj.model,
        color : obj.color,
        year : obj.year
    }
    carsArray2.push(NewObj);
    const data2 = await carsDAL.setCarsJSON(carsArray2);

    return(`New car was created with id: ${NewObj.id}`);
}

const updateCar = async (id, obj) => {
    const data = await carsDAL.getCarsJSON();
    const carsArray = data;
    const carElem = carsArray.find(car => car.id === +id);
    if (carElem) {
        carElem.model = obj.model;
        carElem.color = obj.color;
        carElem.year = obj.year;
        const res = await carsDAL.setCarsJSON(data);
        return res;
    } else {
        return "No such id..."
    }
}

const deleteCar = async (id) => {
    const data = await carsDAL.getCarsJSON();
    const carsArray = data;
    const index = carsArray.findIndex(car => car.id === +id)// returns the index of the element in the array
    if (index >= 0) {
        carsArray.splice(index, 1)// mutate the originall array - deletes elements from the index in the first parameter as the second paramter number.
        // will be cool to set new ids for all element after delition
        const res = await carsDAL.setCarsJSON(data);
        return res
    } else {
        const res = "No such car..";
        return res;
    }
}


module.exports = {
    getCars,
    GetCarByID,
    CreateNewCar,
    updateCar,
    deleteCar
}
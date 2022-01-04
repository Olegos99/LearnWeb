const Car = require('../models/CarModel');

//getAll
const GetAllCars = () =>
{
    return new Promise((resolve, reject) => {
        Car.find({}, (err, cars) =>
        {
            if(err)
                reject(err);
            else
                resolve(cars);
        })
    })

}

const FindCarByID = (id) =>
{
    return new Promise((resolve, reject) => {
        Car.findById(id, (err, car) =>
        {
            if(err)
                reject(err);
            else
                resolve(car);
        })
    })

}

const AddCar = (newCar) => {
    return new Promise((resolve, reject) => {
        const car = new Car(newCar);
        car.save((err) => {
            if(err)
            reject(err);
            else
            resolve(`${car} was created`);
        })
    })
}

const UpdateCar = async (id, obj) => {
    return new Promise((resolve, reject) => {
        Car.findByIdAndUpdate(id, obj, (err) => {
            if(err)
            reject(err);
            else
            resolve(`Car with id ${id} was updated`);
        })
    })
}

const DeleteCar = async (id) => {
    return new Promise((resolve, reject) => {
        Car.findByIdAndDelete(id, (err) => {
            if(err)
            reject(err);
            else
            resolve(`Car with id:${id} was delited`);
        })
    })
}

module.exports = {
    GetAllCars,
    FindCarByID,
    AddCar,
    UpdateCar,
    DeleteCar
}
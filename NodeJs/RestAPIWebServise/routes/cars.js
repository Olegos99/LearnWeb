const Express = require('express')
const carsBLL = require('../BLL/carsBLL')

const Router = Express.Router();

// GETT ALL INFO
Router.get('/', async (req, res) => {
    try {
        const cars = await carsBLL.getCars()
        res.send(cars);
    } catch (error) {
        res.send(error)
    }
})

// GET INFO BY ID
Router.get('/:id',async (req, res) => {
    try {
        const car = await carsBLL.GetCarByID(req.params.id);
        res.send(car);
    } catch (error) {
        res.send(error);
    }
})

//POST NEW CAR
Router.post('/',async (req, res) => {
    try {
        const car = await carsBLL.CreateNewCar(req.body);
        res.send(car);
    } catch (error) {
        res.send(error);
    }
})


// Update an existing car
Router.put('/:id', async (req, res) => {
    try {
        // const model = req.body.model
        // const obj = {
        //     model: model
        // }
        const response = await carsBLL.updateCar(req.params.id,  req.body);
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

// Delete an existing car
Router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await carsBLL.deleteCar(id)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})

module.exports = Router;



const Express = require('express')
const carsBll = require('./BLL/carsBLL');

const APP = Express();

APP.use(Express.json());

const CarsRouter = require('./routes/cars');
APP.use('/api/cars', CarsRouter);

//http://localhost:7000/api/cars/ - get all cars

const port = 7000;
APP.listen(port, () => console.log(`Server is running on port ${port}`));

// CarsRouter.get(`http://localhost:${port}/:4`);
carsBll.getCars().then(data => console.log(data)).catch(err => console.log(err));

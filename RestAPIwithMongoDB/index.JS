const express = require('express');
const DB = require('./config/Database');
const CarsRouter = require('./routers/carsRouter');

const app = express();

app.use(express.json());

DB.ConnectDB();

app.use('/api/cars', CarsRouter);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is runing on port: ${PORT}`));
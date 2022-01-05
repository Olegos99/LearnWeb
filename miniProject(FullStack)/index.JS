const DBPath = './config/DatabaseConfig';
const RouterPath = './routers/ItemsRouter';
const PORT = 8000;

const express = require('express');
const cors = require('cors');
const DB = require(DBPath);
const ItemsRouter = require(RouterPath);

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/cars', ItemsRouter);
DB.ConnectDB();

app.listen(PORT, () => console.log(`Server is runing on port: ${PORT}`));
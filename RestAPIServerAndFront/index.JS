const express = require('express');
const DB = require('./config/Database');
const FilmRouter = require('./routers/filmsRouter');
const cors = require('cors');

const app = express();

// Cross-Origin Resource sharing (CORS) is mechanism that gives permission for a domain (origin) to access another origin.
app.use(cors()); // for all the clients/origins

app.use(express.json());

DB.ConnectDB();

app.use('/api/films', FilmRouter);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is runing on port: ${PORT}`));
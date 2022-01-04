const express = require('express');
const FilmsBLL = require('../BLL/FilmsBLL');

const Router = express.Router();

Router.get('/',async (req,res) => {
    try {
        const Films = await FilmsBLL.GetAllFilms();
        res.send(Films);
    } catch (error) {
        res.send(error);
    }
});

Router.get('/:id',async (req,res) => {
    try {
        const Films = await FilmsBLL.FindFilmByID(req.params.id);
        res.send(Films);
    } catch (error) {
        res.send(error);
    }
});

Router.post('/', async (req, res) => 
{
    //option 1 - destructuring
    // const {name,model,color,hp ,year ,img } = req.body;
    //option 2 
    try {
        const car = req.body;  
        const result = await FilmsBLL.AddFilm(car);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

// Update an existing car
Router.put('/:id', async (req, res) => {
    try {
        const response = await FilmsBLL.UpdateFilm(req.params.id,  req.body);
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

// Delete an existing car
Router.delete('/:id', async (req, res) => {
    try {
        const response = await FilmsBLL.DeleteFilm(req.params.id)
        res.send(response)
    } catch (error) {
        res.send(error)
    }
})


module.exports = Router;
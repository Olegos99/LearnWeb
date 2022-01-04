const Film = require('../models/FilmModel');

//getAll
const GetAllFilms = () =>
{
    return new Promise((resolve, reject) => {
        Film.find({}, (err, cars) =>
        {
            if(err)
                reject(err);
            else
                resolve(cars);
        })
    })

}

const FindFilmByID = (id) =>
{
    return new Promise((resolve, reject) => {
        Film.findById(id, (err, car) =>
        {
            if(err)
                reject(err);
            else
                resolve(car);
        })
    })

}

const AddFilm = (newFilm) => {
    return new Promise((resolve, reject) => {
        const film = new Film(newFilm);
        film.save((err) => {
            if(err)
            reject(err);
            else
            resolve(`${film} was created`);
        })
    })
}

const UpdateFilm = async (id, obj) => {
    return new Promise((resolve, reject) => {
        Film.findByIdAndUpdate(id, obj, (err) => {
            if(err)
            reject(err);
            else
            resolve(`Film with id ${id} was updated`);
        })
    })
}

const DeleteFilm = async (id) => {
    return new Promise((resolve, reject) => {
        Film.findByIdAndDelete(id, (err) => {
            if(err)
            reject(err);
            else
            resolve(`Film with id:${id} was delited`);
        })
    })
}

module.exports = {
    GetAllFilms,
    FindFilmByID,
    AddFilm,
    UpdateFilm,
    DeleteFilm
}
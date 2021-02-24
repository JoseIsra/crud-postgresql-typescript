const { Sequelize } = require('sequelize');
const movieModel = require('../model/movie');

const sequelize = new Sequelize('DB_NAME_HERE','DB_USER_HERE','DB_PASSWORD_HERE',{
    host:'localhost',
    dialect:'postgres'
});


const Movie = movieModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('BASE DE DATOS conectada, tablas sincronizadas');
    }).catch((error:Error )=> console.log(error));


const model ={
    movies: Movie
}

module.exports = model;

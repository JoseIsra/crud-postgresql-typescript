import {Sequelize, Model } from 'sequelize';

interface MovieInstance extends Model {
    name:string,
    year:number
}



module.exports =(sequelize:Sequelize, type:any)=> {
    return sequelize.define<MovieInstance>('movie', {
        name:{
            type:type.STRING
        },
        year:{
            type:type.INTEGER
        }
    }, {
        timestamps:false
    })
}
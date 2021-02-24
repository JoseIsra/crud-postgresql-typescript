import {Request, Response} from 'express';
const model = require('../dbconfig/dbconfig');
const router= require('express').Router();


router.post('/movie', async(req:Request, res:Response):Promise<void> => {
    try {
        await model.movies.create(req.body);
        console.log("pelicula agregada");
        res.send("movie added");res.end();
        
    } catch (error) {
        console.log(error);
    }
})

router.get('/movie', async (req:Request, res:Response):Promise<void> => {
    try {
        
        const result = await model.movies.findAll();
        const json = JSON.stringify(result);
        res.send(json);
    } catch (error) {
        console.log(error);
        
    }
})


router.delete('/movie/:id',async (req:Request, res:Response):Promise<void> => {
    try {
        await model.movies.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({
            message:"registro borrado exitosamente"
        })
    } catch (error) {
        console.log(error);
    } 
})

router.put('/movie/:id',async (req:Request, res:Response):Promise<void> => {
    try {
        await model.movies.update(req.body, {
            where:{
                id:req.params.id
            }
        })
        res.json({
            message:"registro actualizado exitosamente"
        })
    } catch (error) {
        console.log(error);
    } 
})




module.exports = router;
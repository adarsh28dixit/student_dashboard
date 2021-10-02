import express from 'express'
import Courses from '../models/coursesModel.js';
//import data from '../data.js'

const courseRouter = express.Router();

courseRouter.post('/course', (req, res) => {
    const dbCard = req.body;

    Courses.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

courseRouter.get('/course', (req, res) => {


    Courses.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

export default courseRouter;
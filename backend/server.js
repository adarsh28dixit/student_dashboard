import express from 'express'
import mongoose from 'mongoose'
import courseRouter from './routers/courseRouter.js';
import orderRouter from './routers/orderRouter.js';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv'
import  profileRouter  from './routers/profileRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost/IEZAL', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/api', userRouter);
app.use('/api', courseRouter);
app.use('/api', orderRouter);
app.use('/api', profileRouter);

app.get('/', (req, res) => {
    res.send("your server is ready")
})

app.listen(5000, () =>{
    console.log('http://localhost:5000')
})
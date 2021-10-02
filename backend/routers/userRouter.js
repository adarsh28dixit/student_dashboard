import express from 'express'
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
//import generateToken from '../utils.js';

const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
    const{ email} = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "user already registered" })
        } else {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8)
            })
             user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({
                        message: "Successfully registered, please login now"
                    })
                }
            });

        }
    })


});

userRouter.post('/login', async(req, res) => {
    
    const user = await User.findOne({ email: req.body.email });
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                res.send({message: "login successfull"})
            } else {
                res.send({ message: "Password didn't match"})
            }
        }else {
            res.send({message: "user not registered"})
        }
    
    
})

export default userRouter;
import express from 'express'
import Profile from '../models/profileModel.js';

const profileRouter = express.Router();

profileRouter.post('/profile', (req, res) => {
    const dbprofile = req.body;
    Profile.create(dbprofile, (err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

profileRouter.get('/profile', (req, res) => {

    Profile.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

profileRouter.get('/profile/:id', (req, res) => {

    Profile.findById(req.params.id, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

profileRouter.delete('/profile/:id', async (req, res) => {
    try {
      const removeProfile = await Profile.findByIdAndRemove(req.params.id);
       res.send({ message: 'The profile was removed' });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });

  profileRouter.put('/profile/:id', async (req, res) => {
    try {
      const updateProfile = await Profile.findByIdAndUpdate(req.params.id);
       res.send({ message: 'The profile was updated' });
    } catch(err) {
      res.status(400).send({ error: err });
    }
  });


export default profileRouter;
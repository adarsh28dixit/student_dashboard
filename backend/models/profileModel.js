import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    city: {type: String, required: true},
    interest: {type: String, required: true},
    
},
{
    timestamps: true,
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
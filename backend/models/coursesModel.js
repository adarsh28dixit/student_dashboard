import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    title: {type: String, required: true},
    tutor: {type: String, required: true},
    reviews: {type: Number, required: true},
    old_price: {type: Number, required: true},
    new_price: {type: Number, required: true},
    image: {type: String, required: true}
},
{
    timestamps: true,
});

const Courses = mongoose.model('Courses', courseSchema);

export default Courses;
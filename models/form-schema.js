import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
    Email: String,
    Text : String, 
    Password : String, 
    Number : Number,
    Date : String
})

const form = mongoose.model('Form', formSchema)

export default form;
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({    
    googleId: {
        type: String,
        required: true,
        unique: true
      },
    credits: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('User', userSchema)

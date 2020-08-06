const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    cookingTimeInMinutes:{
        type: Number,
    },
    country: {
        type: String,
    },
    description:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
    imageUrl:{
        type: String
    },
    ingredients:{
        type: [String]
    },
    name:{
        type: String,
        required: true,
    },
    numberOfServings:{
        type: Number
    },
    uid:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Recipe', recipeSchema);
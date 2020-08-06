const router = require('express').Router();
const verifyToken = require('./verifyToken');
const Recipe = require('../models/Recipe');
const { recipeValidation } = require('../validations/recipesValidations');

//Add recipe
router.post('/', verifyToken, async (req, res) => {
    try {
        const { error } = recipeValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        
        res.status(200).send(req.body);
    } catch (error) {
        res.status(400).send({message: error});
    }
});


module.exports = router;
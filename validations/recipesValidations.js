const Joi = require('joi');

const recipeValidation = (data) => {
    
    const schema = Joi.object({
        uid: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string().required()
    })

    return schema.validate(data);
}

module.exports.recipeValidation = recipeValidation;
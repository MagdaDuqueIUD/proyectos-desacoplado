const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCreate = [
    check('numero')
    .exists().withMessage('El campo número es obligatorio')
    .not()
    .isEmpty().withMessage('El campo número es obligatorio.'),       
    (req, res, next) => {
        validateResult(req, res, next)
    }
]
console.log('valida proyecto');

module.exports = { validateCreate }
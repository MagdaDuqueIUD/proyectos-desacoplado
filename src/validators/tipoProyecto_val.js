const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCreate = [
    check('nombre')
    .exists().withMessage('El campo nombre es obligatorio')
    .not()
    .isEmpty().withMessage('El campo nombre es obligatorio.'),       
    (req, res, next) => {
        validateResult(req, res, next)
    }
]
console.log('valida tipo de proyecto');

module.exports = { validateCreate }
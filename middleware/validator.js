//Validimi te dhenave ne backend
const { check, validationResult } = require('express-validator');

exports.signupValidator = [
check('username').not().isEmpty()
    .trim()
    .withMessage('Te gjitha fushat duhet te jene te mbushura'),
check('email').not().isEmpty()
    .isEmail()
    .normalizeEmail()
    .withMessage('Email invalide'),
check('password')
    .isLength({ min: 6 })
    .withMessage('Fjalekalimi duhet te kete se paku 6 karaktere'),
    
];

exports.validatorResults = (req, res, next) => {
    const results = validationResult(req);
    const hasErrors = !results.isEmpty();
    if (hasErrors){
        const firstError = result.array() [0].msg;
        return res.status(400).json({
            errorMessage: firstError,
        });

        //console.log('hasErrors: ', hasErrors);
        //console.log('result', result);
    }
    next();
};
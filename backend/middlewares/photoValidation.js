const {body} = require('express-validator')

const photoInsertValidation = () => {
    return [
        body('title')
        .not()
        .equals('undefined')
        .withMessage('O titulo é obrigatorio.')
        .isString()
        .withMessage('O titulo é obrigatorio.')
        .isLength({min:3})
        .withMessage('O titulo precisa ter no minomo 3 caracteres.'),

        body('image')
        .custom((value, {req}) => {
            if(!req.file) {
                throw new Error('A imagem é obrigatoria')
            }
            return true
        })

    ]
}

const photoUpdateValidation = () => {
    return [
      body("image")
        .optional()
        .custom((value, { req }) => {
          if (!req.file) {
            throw new Error("A imagem é obrigatória");
          }
          return true;
        }),
      body("title")
        .optional()
        .isString()
        .withMessage("O título é obrigatório")
        .isLength({ min: 3 })
        .withMessage("O nome precisa ter no mínimo 3 caracteres."),
    ];
  };

const commentValidation = () => {
    return [
        body('comment').isString().withMessage('O comentario é obrigatorio')
    ]
}

module.exports = {
    photoInsertValidation,
    photoUpdateValidation,
    commentValidation
}
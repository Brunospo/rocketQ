const { Router } = require('express')

const QuestionController = require('../controllers/QuestionController')

const questionRoute = Router()

questionRoute.post('/create/:room', QuestionController.create)
questionRoute.post('/:room/:question/:action', QuestionController.index)

module.exports = questionRoute

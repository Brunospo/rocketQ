const { Router } = require('express')

const RoomController = require('../controllers/RoomController')

const roomRouter = Router()

roomRouter.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
roomRouter.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}))

roomRouter.post('/create-room', RoomController.create)
roomRouter.get('/room/:room', RoomController.open)
roomRouter.post('/enterroom', RoomController.enter)


module.exports = roomRouter

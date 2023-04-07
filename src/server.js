const express = require('express')
const path = require('path')

const roomRouter = require('./routers/roomRouter')
const questionRouter = require('./routers/questionRouter')

const server = express()

server.set('view engine', 'ejs')
server.use(express.static("public"))
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

server.use(roomRouter)
server.use('/question', questionRouter)

server.listen(3000, () => console.log("Server is running on http://localhost:3000"))
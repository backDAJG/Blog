const morgan = require('morgan')
const cors = require('cors')
const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')

const appio = express()

const server = http.createServer(appio)
const io = socketio(server)

const routes = require('../routes/index')

module.exports= app => {

    //configuraciones
    app.set('port', process.env.port || 3001)   


    //funciones
    app.use(morgan('dev'))
    app.use(cors())
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())

    //sockets

    io.on('connection', (socket) =>  {
        console.log('We have a new connection.')

        socket.on('disconnect', () => {
            console.log('User had left.')
        })
    })
    
    //rutas
    routes(app)

    //archivos estaticos (opcional no necesario en un RESTAPI)
    app.use('/public', express.static(path.join(__dirname, '../public')))


    return(app)
}
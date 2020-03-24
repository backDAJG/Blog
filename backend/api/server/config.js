const morgan = require('morgan')
const cors = require('cors')
const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash')


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
    app.use(express.json())
    app.use(cookieParser())
    app.use(session({
        secret: 'DAJG',
        resave: false,
        saveUninitialized: false
    }))
    app.use(flash())
    app.use(passport.initialize())
    app.use(passport.session())

    //variables globales

    app.use((req, res, next) => {
        res.locals.signupMessage = req.flash('signupMessage')
        /* const username = app.locals.signupMessageUsername = req.flash('signupMessageUsername')
        const characterPassword = app.locals.signupMessageCharacterPassword = req.flash('signupMessageCharacterPassword')

        if( app.locals.signupMessageUsername === 'el nombre de usuario ya existe') {
           return res.json({msg: 'el nombre de usuario ya existe'})
        } else {

        } */

        next()
    })

    //rutas
    routes(app, passport)

    


    //sockets

    io.on('connection', (socket) =>  {
        console.log('We have a new connection.')

        socket.on('disconnect', () => {
            console.log('User had left.')
        })
    })

    
    

    //archivos estaticos (opcional no necesario en un RESTAPI)
    app.use('/public', express.static(path.join(__dirname, '../public')))


    

    return(app)
}
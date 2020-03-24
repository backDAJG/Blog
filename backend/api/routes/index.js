const express = require('express')
const router = express.Router()

const Public = require('../controllers/Public')
const Private = require('../controllers/Private')

module.exports = (app, passport) => {

    //Rutas Publicas

    router.get('/', Public.index)
    router.get('/images/:image_id', Public.view)
    router.post('/images/:images_id/like', Public.like)
    router.post('/images/:image_id/comment', Public.comment)

    //Rutas Privadas

    router.post('/logout', Private.logout)
    router.post('/images', Private.create)
    router.delete('/images/:image_id', Private.remove)
    router.post('/register', Private.register)
    router.post('/login', Private.login)

    app.use(router)
}
const User = require('../models/Users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

process.env.SECRET_KEY = 'DAJG_BMO_102107'

const ctrl = {}

ctrl.create = (req, res) => {
    res.send('create')
}

ctrl.remove = (req, res) => {
    res.send('remove')
}

ctrl.register = async (req, res) => {
    const { name, email, password, comfirmPassword } = req.body
    
    const user = await User.findOne({email : email})

    if(user) {
        return res.json({msg: 'El nombre de usuario ya existe.'})
    } else if (password != comfirmPassword) {
        return res.json({msg: 'Las contraseña no coinciden.'} )
    } else if (password.length < 6) {
        return res.json({msg: 'La contraseña debe ser mayor a 6 caracteres.'})
    } else {
        const user = new User()
        user.email = email
        user.password = await user.encryptPassword(password)
        user.name = name
        await user.save()
        res.json({msg: 'Nuevo usuario agregado.'})
    }
}

ctrl.login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({
        email: email
    })
    if(user) {
        if(bcrypt.compareSync(req.body.password, user.password)) {
            const payload = {
                _id: user._id,
                name: user.name,
                email: user.email
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: 60 * 60 * 24
            })
            res.json({msg: 'autheticated.', token})
        } else {
            return res.json({msg: 'Contraseña incorrecta.'})
        }
    } else {
        return res.json({msg: 'El nombre de usuario no existe.'})
    }
    /* .then(user => {
        if(user.comparePassword(password)) {
            const payload = {
                _id: user._id,
                name: user.name,
                email: user.email
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: 60 * 60 * 24
            })
            res.json({token})
        } else {
            return res.json({msg: 'Contraseña incorrecta.'})
        }
    }) */
}

ctrl.logout = (req, res) => {

}

ctrl.profile = (req, res) => {
    res.json({ msg: 'profile' })
}

ctrl.logic = (req, res) => {

}

module.exports = ctrl
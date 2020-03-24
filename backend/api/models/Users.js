const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs')


const UserShema = new Schema({
        name: {
                type: String,
                required: true
        },
        email: {
                type: String,
                required: true,
                unique: true
        },
        password: {
                type: String,
                required: true
        }
}, {
        timestamps: true
})


UserShema.methods.encryptPassword = async password => {
        const salt = await bcrypt.genSalt(8)
        return await bcrypt.hash(password, salt)
}


module.exports = model('User', UserShema)
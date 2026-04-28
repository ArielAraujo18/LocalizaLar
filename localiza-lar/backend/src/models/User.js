const moongose = require('mongoose');

const userSchema = new moongose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    timestamps: {
        timestamps: true,
    }
});

const UserModel = moongose.model('User', userSchema);

module.exports = moongose.model('User', userSchema);
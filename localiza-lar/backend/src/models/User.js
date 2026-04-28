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

module.exports = moongose.model('User', userSchema);
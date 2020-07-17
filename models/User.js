const mongose = require('mongoose');

const UserSchema = new mongose.Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role :{
        type:Number,
        default:0
    },
    cart: {
        type: Array,
        default: []
    }

        
}, { timestamps: true});

const User = mongose.model('User', UserSchema);

module.exports = User;
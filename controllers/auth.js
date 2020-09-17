const{ User } = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtSecret, jwtExpire} = require('../config/keys');


exports.signupController = async (req, res) => {
    //Marrja e te dhenave te userit
    const{ username,email,password} = req.body;

    //Kontrollimi nese email ekziston
    try{
        const user = await User.findOne({ email });
        if(user){
            return res.status(400).json({
                errorMessage: 'Kjo email ekziston',
            });
        }

        const newUser = new User ();
        newUser.username = username;
        newUser.email = email;

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();
        res.json({
            successMessage: 'Regjistrimi u perfundua me suksese. Tani mund te kyqeni. ',
        });

    }catch (err){
        console.log('signupController error: ', err);
        res.status(500).json({
            errorMessage: "Server error",
        });
    }
};


exports.signinController = async (req, res) => {
    //Destruct data
    const {email, password} = req.body;

    try {
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({
                errorMessage: 'Email nuk ekziston ose password eshte gabim',
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                errorMessage: 'Email nuk ekziston ose password eshte gabim',
            });
        }

        //Payload

        const payload = {
            user : {
                _id: user._id,
            },
        };

        jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire}, (err, token) => {
            if(err) console.log('jwt error: ', err);
            const { _id, username, email, role} = user;

            res.json({
                token,
                user: {_id, username, email, role },
            });
        });

    }catch (err) {
        console.log('SigninController error: ', err);
        res.status(500).json({
            errorMessage: 'Server error',
        })
    }

};


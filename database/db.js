//Inicializimi i mongose

const mongoose = require ('mongoose');
const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://Techthings-admin:taulant123@techthings-ukeod.mongodb.net/techthings?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        );
        console.log('Databaza u lidh');
    }catch (err){
        console.log(err);
    }
};

module.exports = connectDB;
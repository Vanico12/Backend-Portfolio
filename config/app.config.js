require("dotenv").config;

const MONGO_DB_CONFIG = {
   DB: 'mongodb+srv://takemjim43:takemjim@Backend.b3fleep.mongodb.net/Backend?retryWrites=true&w=majority'
    
}

module.exports = {
    MONGO_DB_CONFIG
}
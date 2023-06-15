const mongo = require("mongoose");
const schema = mongo.Schema;

const testschema = new schema({
    name:{
        type:String,
        minLength:5,
        maxLength:30,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    call:{
        type:String,
        required:false
    }
});

module.exports = mongo.model("test",testschema,"test");
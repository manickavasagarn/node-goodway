const mongo = require("mongoose");
  exports.connect= () => {
    try {
        mongo.connect("mongodb+srv://manickavasagardgl:vasagar123@ecom.crkitcb.mongodb.net/ecom");
        console.log("database success");
    } catch (error) {
        console.error(error);
    }
}
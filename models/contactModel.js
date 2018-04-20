// get access to the Schema constructor
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// schema for a Contact
var contact = new Schema({
    firstName: {type: String, required: true}
    ,lastName: {type: String, required: true}
    //,birthDate: {type: Date, required: true}
    },
    {timestamps: true}
);

// update the createdAt and updatedAt dates behind the scenes
// whenever the record is saved. taken from class sample code.
contact.pre('save', function(next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    } else {
        this.updatedAt = new Date();
    }

    next();
});

// Export the model
module.exports = mongoose.model("Contact", contact);

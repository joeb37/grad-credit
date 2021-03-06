// contactController
//
// Controller for working with contacts.  Exposes a ContactService that
// interacts with MongoDB using Mongoose.

var Contact = require('../models/contactModel');

class ContactService {

    // note: these methods all return a Promise

    // list
    static list() {
        // this method returns a promise
        return Contact.find({}).sort({lastName: 'asc', firstName: 'asc'})
            .then((contacts) => {
                return contacts;
            }).catch((err) => {
                throw err;
            });
    }

    // create
    static create(obj) {
        var contact = new Contact(obj);
        return contact.save()
            .catch((err) => {
                throw err;
            });
    }
}

module.exports.ContactService = ContactService;

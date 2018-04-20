// contacts.js
//
// Processing for the 'contacts' route.

var express = require("express");
var router = express.Router();

const ContactService = require('../controllers/contactController').ContactService;

router.get('/', (request, response) => {

    // Find all Contacts
    ContactService.list()
        .then((contacts) => {
            response.render('contacts', {"contacts": contacts});
        })
        .catch((err) => {
            if (err) {
                console.log(err);
                response.end("Error reading from database");
            }
        });
});

// create a new contact
router.post('/', (req, res, next) => {

    // add the data from the form into the database
    var formData = {
        firstName: req.body.firstName
        ,lastName: req.body.lastName
    };

    // create a new contact
    ContactService.create(formData)
        .then((contact) => {
            // display the main page again
            res.redirect('/contacts');
        })
        .catch((err) => {
            if (err) console.log(err);
        });
});

module.exports = router;

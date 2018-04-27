# Graduate Credit Assignment
#### Joe Bockskopf
CSCI E-31, Spring 2018
## Project Goals
The project demonstrates adding dates to a basic contact list application. This repository branch represents the *final* state of the application. These changes have been made to the initial contact list app:
* Added a date (birth day) to the input form and the contact list
  * Changed page titles in contacts.pug
  * Added Birth Date field to input form
  * Added Birth Date column to contact list
  * Added Birth Date to the form data passed to the database create() method
  * Added Birth Date to database schema
* Used [Moment.js](https://momentjs.com/) to format the dates shown on the page
  * Installed node package moment.js
  * Required moment in app.js
  * Formatted the birth date in contact list
* Retrieved the contacts from the database so that they are sorted by the contact's birth month and day
  * Changed database retrieval in contactController.js
* Enhanced the contact list to highlight upcoming birthdays
  * Added a new style to contacts.css
  * Changed contact list to style upcoming birthdays

There is an accompanying video here: <https://youtu.be/ET9nQ-ceaDY>

The code branch with the initial state of the application can be found here: <https://github.com/joeb37/grad-credit/tree/master>

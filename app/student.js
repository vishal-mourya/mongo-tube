// This line will import mongoose in our file
const mongoose = require('mongoose');

// This will assign Schema of mongoose to our Schema
const Schema = mongoose.Schema;

// This is our database schema which will be stored
// in mongoDB
const StudentSchema = new Schema({
  name : String // Our Db currently have only 1 data i.e name
});

// This will call mongoose to make our DB inspect in
// mongoDB
const Student = mongoose.model('student',StudentSchema);

// Export
// This will allow to any other file to import our file and use our schema
module.exports = Student;

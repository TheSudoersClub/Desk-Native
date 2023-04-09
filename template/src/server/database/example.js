const path = require("path");

// import DNA-DB
const database = require('desk-native-database');

// initialize the database 
const db = database();

// // create a new collection in database 
db.createCollection("test_collection");

// // add new field in collection
// let generatedId = db.addData("hello", {
//     name: 'John',
//     email: 'john.doe@example.com',
// });
// console.log(generatedId);

// // update the field with its id
// const updated = db.updateData('hello', 7, {
//     name: 'hello world'
// });
// console.log(updated);

// // delete the specific field(s)
// const deleted = db.deleteData('hello', 1);
// console.log(deleted);

// // get all the data form the given collection
// let data = db.getAllData("hello")
// console.log(data)

// // get the specific data by its id
// let dataById = db.getDataById("hello", 2);
// console.log(dataById);
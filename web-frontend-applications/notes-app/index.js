//index.js is the main file 
//it loads all the other dependencies (source files)
//this helps to connect to the browser but its not doig anything useful at the moment
const notesModel = require('./notesModel');
const model = new notesModel();

model.addNote('Cancel gym membership!!')
console.log(model.getNotes());
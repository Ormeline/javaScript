//index.js is the main file 
//it loads all the other dependencies (source files)
//this helps to connect to the browser but its not doig anything useful at the moment
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

// model.addNote('Cancel gym membership!!')
// console.log(model.getNotes());

//1. setup the model with one note
const model = new NotesModel();
model.addNote('This is an example note')

//2 Setup the view
const view = new NotesView(model);

//3. Make the view display notes
view.displayNotes();
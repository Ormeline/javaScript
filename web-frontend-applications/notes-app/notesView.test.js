/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

// Set up the test suite for Notes view
describe('Notes view', () => {
  // Test case: Displaying two notes
  it('displays two notes', () => {
    // Load the HTML file into the DOM
    document.body.innerHTML = fs.readFileSync('./index.html');

    // 1. Setting up the model and view
    const model = new NotesModel();
    const view = new NotesView(model);

    // Add two notes to the model
    model.addNote('first note');
    model.addNote('second note');

    // 2. Display the notes on the page
    view.displayNotes();

    // 3. There should be 2 div.note elements on the page
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  // Test case: Adding a new note
  it('adds a new note', () => {
    // Load the HTML file into the DOM
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
  
    // 1. Fill the input with a new note
    const input = document.querySelector('#add-note-input');
    input.value = 'A new test note';
  
    // 2. Click the button to add the note
    const button = document.querySelector('#add-note-button');
    button.click();
  
    // 3. The note should be on the page
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('A new test note');
  });

  it('clear the list of previous notes before displaying', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('one');
    model.addNote('two');
  
    view.displayNotes();
    view.displayNotes();
  
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});

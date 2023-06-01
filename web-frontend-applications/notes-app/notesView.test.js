/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('Notes view', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    //1. setting up model and view
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('first note');
    model.addNote('second note');

    //2. Display the notes on the page
    view.displayNotes();

    //3. There should be 2 ndiv.note on the page
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  // it('adds a new paragraph', () => {
  //   //Arrange
  //   document.body.innerHTML = fs.readFileSync('./index.html'); //taking the concept of the index.html file. 
  //   const view = new View(); //this instatiates the View class which contains the code we want to test
    
  // //Act  
  //   view.addParagraph();// this is the behaviour that we want to test

  //   //Assert
  //   expect(document.querySelectorAll('p').length).toBe(3);
  // });
});

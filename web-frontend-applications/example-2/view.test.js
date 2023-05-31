/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('adds a new paragraph', () => {
    //Arrange
    document.body.innerHTML = fs.readFileSync('./index.html'); //taking the concept of the index.html file. 
    const view = new View(); //this instatiates the View class which contains the code we want to test
    
  //Act  
    view.addParagraph();// this is the behaviour that we want to test

    //Assert
    expect(document.querySelectorAll('p').length).toBe(3);
  });

  it ('clears all paragraphs',() => {
    //Arrange
    document.body.innerHTML = fs.readFileSync('./index.html'); //taking the concept of the index.html file. 
    const view = new View(); //this instatiates the View class which contains the code we want to test
    
  //Act  
    view.clearParagraph();

  //Assert)
  expect(document.querySelectorAll('p').length).toBe(0);
  });
});
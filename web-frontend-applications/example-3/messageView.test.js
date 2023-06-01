/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('it clicks the button and displays the message', () => {
    //Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();

    //Act
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    
    inputEl.value = 'This is a test message';
    buttonEl.click(); //we simulate a click on the button with .click().
    
    // Assert
    expect(document.querySelector('#message')).not.toBeNull(); //we check that there is an element with an HTML ID message on the document.
    expect(document.querySelector('#message').innerText).toEqual('This is a test message')
  });

  // it('hides the message', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');
  //   const view = new MessageView();

  //   // show then hide the message
  //   const buttonEl = document.querySelector('#show-message-button');
  //   buttonEl.click(); //we simulate a click on the button with .click().
  //   const hideButtonEl = document.querySelector('#hide-message-button');
  //   hideButtonEl.click();

  //   // Assert that the message element is not on the page
  //   expect(document.querySelector('#message')).toBeNull(); //we check that there is an element with an HTML ID message on the document.
  // });
});
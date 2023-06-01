/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    //Arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    //Act
    const view = new MessageView();

    //Getting a reference to the button
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click(); //we simulate a click on the button with .click().

    // Assert
    expect(document.querySelector('#message')).not.toBeNull(); //we check that there is an element with an HTML ID message on the document.
  });

  it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();

    // show then hide the message
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click(); //we simulate a click on the button with .click().
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    // Assert that the message element is not on the page
    expect(document.querySelector('#message')).toBeNull(); //we check that there is an element with an HTML ID message on the document.
  });
});
class MessageView {
  constructor() {
    //1. Get references to the buttons
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');

    //2. Attaching event listener functions
    this.buttonEl.addEventListener('click', () => {
      this.displayMessage();
    });

    //3. Attaching event listener for hiding message
    this.hideButtonEl?.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    //4. The user clicked, do something interesting now!
    console.log('Thanks for clicking me!');
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = 'This is a message';

    document.querySelector('#main-container').append(messageElement);
  }

  hideMessage() {
    //5. The user clicked, do something interesting now!
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;

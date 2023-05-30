//functions as values CHALLENGE - SEE WORD DOC FOR NOTES

const notifyByEmail = (email) => {
    return 'Email sent to: ${email}';
}

const notifyByText = (phoneNumber) => {
    return 'Text sent to: ${phoneNumber}';
}

const notify = (contact, notifyFunction) => {
    return notifyFunction(contact);
}

const notificationByEmail = notify('hello@makers.tech.test', notifyByEmail);
console.log(notificationByEmail()); // Output: "Email sent to: hello@makers.tech.test"

const notificationByText = notify('010000000', notifyByText);
console.log(notificationByText()); // Output: "Text sent to: 010000000"


// notesView.js

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    // Add event listener to the "Add Note" button
    document.querySelector('#add-note-button').addEventListener('click', () => {
      // Get the value from the input field
      const newNote = document.querySelector('#add-note-input').value;
      // Call the addNewNote method with the new note
      this.addNewNote(newNote);
    });
  }

  // Method to add a new note
  addNewNote(newNote) {
    // Call the addNote method of the model with the new note
    this.model.addNote(newNote);
    // Call the displayNotes method to update the view
    this.displayNotes();
  }
    
  // Method to display notes
  displayNotes() {
    // Get the notes from the model
    const notes = this.model.getNotes();
  
    // For each note, create and append a new element to the main container
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  }
}

// Export the NotesView class
module.exports = NotesView;

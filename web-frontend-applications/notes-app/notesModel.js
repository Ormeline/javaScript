class NotesModel {
    constructor() {
      this.note = [];
    }
  
    getNotes() {
      return this.note;
    }
  
    addNote(note) {
      this.note.push(note);
    }
  
    reset() {
      this.note = [];
    }
  }
      
module.exports = NotesModel;
class notesModel {
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
      
module.exports = notesModel;
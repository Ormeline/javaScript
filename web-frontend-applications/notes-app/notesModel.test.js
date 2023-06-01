const NotesModel = require("./NotesModel")

describe('Notes Model', () => {
  it('returns an empty array', () => {
    const model = new NotesModel();

    expect(model.getNotes()).toEqual([]);
  });

  it('adds a new note to the list', () => {
    const model = new NotesModel();
    model.addNote('Gym today');
  
    expect(model.getNotes()).toEqual(['Gym today']);
  });

  it('clears all notes on the list', () => {
    const model = new NotesModel();
    model.reset();
  
    expect(model.getNotes()).toEqual([]);
  });
});
import React, { useState } from 'react';
import './App.css';  
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', description: '' });

  const handleAddNote = () => {
    if (newNote.title && newNote.description) {
      setNotes([...notes, { ...newNote, id: Date.now(), pinned: false }]);
      setNewNote({ title: '', description: '' });
    }
  };

  const handleEditNote = (id, updatedNote) => {
    setNotes(notes.map(note => note.id === id ? { ...note, ...updatedNote } : note));
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handlePinNote = (id) => {
    setNotes(notes.map(note => note.id === id ? { ...note, pinned: !note.pinned } : note));
  };

  return (
    <div className="App">
      <NoteInput 
        newNote={newNote} 
        setNewNote={setNewNote} 
        handleAddNote={handleAddNote}
      />
      <NoteList 
        notes={notes} 
        handleEditNote={handleEditNote} 
        handleDeleteNote={handleDeleteNote} 
        handlePinNote={handlePinNote} 
      />
    </div>
  );
}

export default App;

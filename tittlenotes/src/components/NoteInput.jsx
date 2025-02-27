import React from 'react';
import { TextField, Button } from '@mui/material';

const NoteInput = ({ newNote, setNewNote, handleAddNote }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={newNote.title}
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        value={newNote.description}
        onChange={(e) => setNewNote({ ...newNote, description: e.target.value })}
        style={{ marginBottom: '20px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddNote}
      >
        Add Note
      </Button>
    </div>
  );
};

export default NoteInput;

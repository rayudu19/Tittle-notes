import React from 'react';
import { Grid,  } from '@mui/material';
import NoteCard from './NoteCard';

const NoteList = ({ notes, handleEditNote, handleDeleteNote, handlePinNote }) => {
  return (
    <Grid container spacing={2}>
      {notes.map((note) => (
        <Grid item xs={12} sm={6} md={4} key={note.id}>
          <NoteCard 
            note={note} 
            handleEditNote={handleEditNote}
            handleDeleteNote={handleDeleteNote}
            handlePinNote={handlePinNote}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default NoteList;

import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, TextField, Button } from '@mui/material';
import { Edit, Delete, PushPin } from '@mui/icons-material';

const NoteCard = ({ note, handleEditNote, handleDeleteNote, handlePinNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState(note);

  const handleSaveEdit = () => {
    handleEditNote(note.id, updatedNote);
    setIsEditing(false);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        {isEditing ? (
          <>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={updatedNote.title}
              onChange={(e) => setUpdatedNote({ ...updatedNote, title: e.target.value })}
              style={{ marginBottom: '10px' }}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              value={updatedNote.description}
              onChange={(e) => setUpdatedNote({ ...updatedNote, description: e.target.value })}
              style={{ marginBottom: '20px' }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveEdit}
            >
              Save
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h6">{note.title}</Typography>
            <Typography variant="body2" color="textSecondary">{note.description}</Typography>
          </>
        )}
      </CardContent>
      <div style={{ padding: '10px', display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={() => handlePinNote(note.id)} color={note.pinned ? 'primary' : 'default'}>
          <PushPin />
        </IconButton>
        <IconButton onClick={() => setIsEditing(!isEditing)}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => handleDeleteNote(note.id)} color="error">
          <Delete />
        </IconButton>
      </div>
    </Card>
  );
};

export default NoteCard;

const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Notes App is running!');
});

// Notes array
let notes = [];

// Get all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// Add a note
app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content required" });
  }
  const note = { id: notes.length + 1, title, content };
  notes.push(note);
  res.status(201).json(note);
});

// Delete a note
app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter(note => note.id !== id);
  res.json({ message: `Note ${id} deleted` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Notes app running at http://localhost:${PORT}`);
});

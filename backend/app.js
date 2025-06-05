import express from 'express';
import cors from 'cors';
import generateCard from './logic/cardGen.js'; 
import dotenv from 'dotenv';
dotenv.config();


app.use(express.json());

app.post('/generate', (req, res) => {      // after selecting roles the user hits this point only for a magical generation!!
  const { fullname, username, roles } = req.body;
  if (!fullname || !username || !roles || roles.length < 1) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const card = generateCard(fullname, username, roles);
  res.json(card);
});

const PORT = process.env.PORT || 3000;    /// app starts listening
app.listen(PORT, () => {
  console.log(`Roopik backend running at http://localhost:${PORT}`);
});
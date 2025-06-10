// api/generate.js

import generateCard from '../logic/cardGen.js'; // adjust path if needed

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { fullname, username, roles } = req.body;
  if (!fullname || !username || !roles || roles.length < 1) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const card = generateCard(fullname, username, roles);
  res.status(200).json(card);
}

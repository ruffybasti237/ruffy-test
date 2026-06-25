const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Ruffy!' });
});

app.listen(port, () => {
  console.log(`Ruffy API server listening on port ${port}`);
});

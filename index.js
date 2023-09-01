const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello Main');
});

app.get('/dev', (req, res) => {
  res.send('Hello Dev');
});


app.get('/merge', (req, res) => {
  res.send('Hello Merge');
});

app.listen(8008, () => {
  console.log('Server is running on port 8008');
});

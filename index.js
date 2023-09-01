const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello Main');
});

app.listen(8008, () => {
  console.log('Server is running on port 8008');
});

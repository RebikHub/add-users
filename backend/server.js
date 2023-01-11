const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());

const users = [
  {
    id: '01',
    username: 'Jhon',
    email: 'jhon@email.com',
    age: 35,
    country: 'Russia'
  }
]

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
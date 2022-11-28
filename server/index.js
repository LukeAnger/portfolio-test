const express = require('express');
const app = express();
const PORT = 3135 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.json());

app.post('/search', (req, res) => {
  //
  //
})
app.post('/add', (req, res) => {
  //
  //
})
app.post('/update', (req, res) => {
  //
})


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
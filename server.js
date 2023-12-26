const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/process_login', (req, res) => {
  const { username, password } = req.body;

  // Validate and sanitize data as needed

  // Save data to a file
  const data = `${username}, ${password}\n`;
  fs.appendFile('login_data.txt', data, (err) => {
    if (err) throw err;
    console.log('Data saved to login_data.txt');
  });

  // Redirect or send a response as needed
  res.send('Login successful!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

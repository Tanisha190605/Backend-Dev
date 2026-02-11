const express = require('express');
const app = express();
const PORT = 5000;

//to serve static files (CSS, JS, images)
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true })); //to parse urlencoded data from forms


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/form.html');
});

app.post('/students/register', (req, res) => {
    console.log('Form data received:', req.body);
    res.send('Form submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});